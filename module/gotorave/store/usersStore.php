<?php
	
	class Users extends Store {
		
		public function __construct($CB, $data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			$data = $CB->minArray($data);
			$action = $data['action'];
			if($action)
			{
				$this->$action($CB, $data);
			}
			else
			{
				$this->load($CB, $data);
			}
		}
		
		public function load($CB, $data)
		{
			$CB->db->select("user.id, name, image");
			if(is_numeric($data['id_tag']))
			{
				$CB->db->join("user_tag", "user_tag.user_id=user.id");
				$CB->db->where("user_tag.tag_id", $data['id_tag']);
			}
			$CB->db->from("user");
			
			if($res = $CB->db->get())
			{
				if(is_object($res))$res = array($res);
				foreach($res as $k => $r0)
				{
					$CB->db->reset();
					$CB->db->select("user_tag.id, user_tag.tag_id, tags.name");
					$CB->db->from("user_tag");
					$CB->db->join("tags", "tags.id=user_tag.tag_id");
					$CB->db->where("user_tag.user_id", $r0->id);
					
					if($res2 = $CB->db->get())
					{
						if(is_object($res2))$res2 = array($res2);
						if(is_array($res2))$res[$k]->tags = $res2;
					}
					else
					{
						echo $CB->db->error();
					}
					$res2 = false;
				}
				$this->parseStore('users', array('usr' => $res));
			}
			else
			{
				$this->parseStore('users', array('usr' => array()));
			}
		}
		
		public function get_data($CB){
			if(is_numeric($_SESSION['user_id'])){
				$CB->db->select("*");
				$CB->db->where('id', $_SESSION['user_id']);
					
				if($user = $CB->db->get("user"))
				{
					if($_SESSION['user_id'] == $user->id){
						unset($user->pass);
						$CB->parseConfig("user_data", $user);
					}
				}
			}
		}
		
		public function invite($CB, $data){
			$CB->db->select('add_friends');
			$CB->db->where('id', $_SESSION['user_id']);
			$res1 = $CB->db->get('user');
			$add_friends = $res1->add_friends;
			
			if($res1 && is_numeric($add_friends) && $add_friends > 0)
			{
				$email = trim(str_replace(" ", "", $data['email']));
				$CB->db->reset();
				$CB->db->select('id');
				$CB->db->where('email', $email);
				$res2 = $CB->db->get('user');
				if(!$res2){
					$CB->db->reset();
					$pass = base64_encode(rand(1000, 9999));
					$name = explode('@', $email)[0];
					$res = $CB->db->insert('user', array(
						'id' => NULL,
						'email' => $email,
						'pass' => $pass,
						'name' => $name,
						'type' => 'user',
						'date' => date('Y-m-d'),
						'add_friends' => 1
					));
					if($res){
						if(mail($email, 'Go to Rave - Usuario registrado', 'Enhorabuena, has sido invitado para unirte a Go to Rave, esta plataforma es privada, haz buen uso de ella.<br><br>Usuario: '.$email.'<br><br>Pass: '.$pass)){
							$CB->db->reset();
							$CB->db->where('id', $_SESSION['user_id']);
							$CB->db->update('user', array(
								'add_friends' => ($add_friends - 1)
							));
							die('true');
						}else{
							$CB->db->where('id', $CB->db->getInsertId());
							$CB->db->delete('user');
						}
					}else{
						echo $CB->db->getConfig('last_sql');
						echo $CB->db->error();
					}
				}
			}
		}
	}
?>
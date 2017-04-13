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
			if($data['id_tag'] == 'like')
			{
				$CB->db->select("review.id_row");
				$CB->db->where(array(
						"tabla" => "user",
						"review" => "1",
						"id_user" => $_SESSION['user_id']
				));
				if($res4 = $CB->db->get_array('review')){
					foreach($res4 as $tid){
						$wherein .= $tid->id_row.", ";
					}
					$wherein = substr($wherein, 0, count($wherein)-3);
					$CB->db->reset();
				}else{
					$this->parseStore('users', array('usr' => array()));
				}
			}
			$CB->db->select("user.id, name, image, online");
			if(is_numeric($data['id_tag']))
			{
				$CB->db->join("user_tag", "user_tag.user_id=user.id");
				$CB->db->where("user_tag.tag_id", $data['id_tag']);
			}
			if($wherein)
			{
				$CB->db->where("user.id IN (".$wherein.")");
			}
			$CB->db->from("user");
			$CB->db->orderBy("user.id", "DESC");
			
			if($res = $CB->db->get_array())
			{
				foreach($res as $k => $r0)
				{
					$CB->db->reset();
					$CB->db->select("user_tag.id, user_tag.tag_id, tags.name");
					$CB->db->from("user_tag");
					$CB->db->join("tags", "tags.id=user_tag.tag_id");
					$CB->db->where("user_tag.user_id", $r0->id);
					$CB->db->orderBy("user_tag.id", "ASC");
					
					if($res2 = $CB->db->get_array())
					{
						if(is_array($res2) && !empty($res2)){
							$res[$k]->tags = $res2;
						}
					}
					else
					{
						echo $CB->db->error();
					}
					$res2 = false;
					
					$CB->db->reset();
					$CB->db->select("review, id_user");
					$CB->db->from("review");
					$CB->db->where("review.tabla", 'user');
					$CB->db->where("review.id_row", $r0->id);
						
					$res[$k]->reviews = 0;
					$res[$k]->user_review = 0;
						
					$res[$k]->review_pos = "false";
					$res[$k]->review_con = "false";
					$res[$k]->hand1_color = "red";
					$res[$k]->hand2_color = "green";
						
					if($res3 = $CB->db->get_array())
					{
						foreach($res3 as $r3)
						{
							if($r3->review > 0){
								$res[$k]->reviews++;
								if($r3->id_user == $_SESSION['user_id']){
									$res[$k]->user_review = 1;
									$res[$k]->review_pos = "true";
									$res[$k]->hand2_color = "gray";
								}
							}else{
								$res[$k]->reviews--;
								if($r3->id_user == $_SESSION['user_id']){
									$res[$k]->user_review = -1;
									$res[$k]->review_con = "true";
									$res[$k]->hand1_color = "gray";
								}
							}
						}
					}
					else
					{
						echo $CB->db->error();
					}
					
					$res3 = false;
					
					$CB->db->reset();
					$CB->db->select("user_id");
					$CB->db->from("user_follow");
					$CB->db->where("user_id_followed", $r0->id);
					$following = 0;
					$user_follow = 0;
					
					if($res4 = $CB->db->get_array())
					{
						foreach($res4 as $r4)
						{
							if($r4->user_id == $_SESSION['user_id']){
								$user_follow = 1;
							}
							$following++;
						}
					}
					else
					{
						echo $CB->db->error();
					}
					$res4 = false;
				}
				
				$res[$k]->following = $following;
				$res[$k]->user_follow = $user_follow;
				
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
						
						$CB->db->reset();
						$CB->db->select("user_tag.tag_id, tags.name");
						$CB->db->from("user_tag");
						$CB->db->join("tags", "tags.id=user_tag.tag_id");
						$CB->db->where("user_tag.user_id", $user->id);
						$CB->db->orderBy("user_tag.id", "ASC");
						
						if($res2 = $CB->db->get_array())
						{
							if(is_array($res2) && !empty($res2)){
								$user->tags = $res2;
							}
						}
						else
						{
							echo $CB->db->error();
						}
						$res2 = false;
						
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
					$pass = base64_encode(rand(100000, 999999));
					$name = explode('@', $email)[0];
					$res = $CB->db->insert('user', array(
						'id' => NULL,
						'email' => strtolower($email),
						'pass' => $pass,
						'name' => $name,
						'type' => 'user',
						'date' => date('Y-m-d'),
						'add_friends' => 1
					));
					if($res){
						$cabeceras = 'From: info@gotorave.com' . "\r\n" .
							'Reply-To: miguelelinventor@gmail.com' . "\r\n" .
							'X-Mailer: PHP/' . phpversion();
						if(mail($email, 'Go to Rave - Usuario registrado', "Enhorabuena, has sido invitado para unirte a Go to Rave, esta plataforma es privada, haz buen uso de ella. 
						
						 Usuario: ".$email." 
						
						 Contrase&ntilde;a: ".$pass, $cabeceras)){
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
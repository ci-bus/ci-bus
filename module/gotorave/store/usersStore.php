<?php
	
	class Users extends Store {
		
		public function __construct($data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			$data = $this->minArray($data);
			$action = $data['action'];
			if($action)
			{
				$this->$action($data);
			}
			else
			{
				$this->load($data);
			}
		}
		
		public function load($data)
		{
			if($data['id_tag'] == 'like')
			{
				$this->select("review.id_row");
				$this->where(array(
						"tabla" => "user",
						"review" => "1",
						"id_user" => $_SESSION['user_id']
				));
				if($res4 = $this->get_array('review')){
					foreach($res4 as $tid){
						$wherein .= $tid->id_row.", ";
					}
					$wherein = substr($wherein, 0, count($wherein)-3);
					$this->reset();
				}else{
					$this->parseStore('users', array('usr' => array()));
				}
			}
			$this->select("user.id, name, image, online");
			if(is_numeric($data['id_tag']))
			{
				$this->join("user_tag", "user_tag.user_id=user.id");
				$this->where("user_tag.tag_id", $data['id_tag']);
			}
			if($wherein)
			{
				$this->where("user.id IN (".$wherein.")");
			}
			$this->from("user");
			$this->orderBy("user.id", "DESC");
			
			if($res = $this->get_array())
			{
				foreach($res as $k => $r0)
				{
					$this->reset();
					$this->select("user_tag.id, user_tag.tag_id, tags.name");
					$this->from("user_tag");
					$this->join("tags", "tags.id=user_tag.tag_id");
					$this->where("user_tag.user_id", $r0->id);
					$this->orderBy("user_tag.id", "ASC");
					
					if($res2 = $this->get_array())
					{
						if(is_array($res2) && !empty($res2)){
							$res[$k]->tags = $res2;
						}
					}
					else
					{
						echo $this->error();
					}
					$res2 = false;
					
					$this->reset();
					$this->select("review, id_user");
					$this->from("review");
					$this->where("review.tabla", 'user');
					$this->where("review.id_row", $r0->id);
						
					$res[$k]->reviews = 0;
					$res[$k]->user_review = 0;
						
					$res[$k]->review_pos = "false";
					$res[$k]->review_con = "false";
					$res[$k]->hand1_color = "red";
					$res[$k]->hand2_color = "green";
						
					if($res3 = $this->get_array())
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
						echo $this->error();
					}
					
					$res3 = false;
					
					$this->reset();
					$this->select("user_id");
					$this->from("user_follow");
					$this->where("user_id_followed", $r0->id);
					$following = 0;
					$user_follow = 0;
					
					if($res4 = $this->get_array())
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
						echo $this->error();
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
				$this->select("*");
				$this->where('id', $_SESSION['user_id']);
					
				if($user = $this->get("user"))
				{
					if($_SESSION['user_id'] == $user->id){
						unset($user->pass);
						
						$this->reset();
						$this->select("user_tag.tag_id, tags.name");
						$this->from("user_tag");
						$this->join("tags", "tags.id=user_tag.tag_id");
						$this->where("user_tag.user_id", $user->id);
						$this->orderBy("user_tag.id", "ASC");
						
						if($res2 = $this->get_array())
						{
							if(is_array($res2) && !empty($res2)){
								$user->tags = $res2;
							}
						}
						else
						{
							echo $this->error();
						}
						$res2 = false;
						
						$this->parseConfig("user_data", $user);
					}
				}
			}
		}
		
		public function invite($data){
			$this->select('add_friends');
			$this->where('id', $_SESSION['user_id']);
			$res1 = $this->get('user');
			$add_friends = $res1->add_friends;
			
			if($res1 && is_numeric($add_friends) && $add_friends > 0)
			{
				$email = trim(str_replace(" ", "", $data['email']));
				$this->reset();
				$this->select('id');
				$this->where('email', $email);
				$res2 = $this->get('user');
				if(!$res2){
					$this->reset();
					$pass = base64_encode(rand(100000, 999999));
					$name = explode('@', $email)[0];
					$res = $this->insert('user', array(
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
							$this->reset();
							$this->where('id', $_SESSION['user_id']);
							$this->update('user', array(
								'add_friends' => ($add_friends - 1)
							));
							die('true');
						}else{
							$this->where('id', $this->getInsertId());
							$this->delete('user');
						}
					}else{
						echo $this->getConfig('last_sql');
						echo $this->error();
					}
				}
			}
		}
	}
?>
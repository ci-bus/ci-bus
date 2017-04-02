<?php
	
	class UserPanel extends Store {
		
		public function __construct($CB, $data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			$this->read($CB, $data);
		}
		
		public function read($CB, $data)
		{
			if($data['action'] == 'imageupload'){
				
				if(!is_dir('uploads')){
					mkdir('uploads', 0755);
				}
				if($_FILES['file']){
					
					if($_FILES['file']['tmp_name'] && substr($_FILES['file']['type'], 0, 5) == 'image'){
						
						$ext = strtolower(end(explode('.', $_FILES['file']['name'])));
						if($ext == 'jpg' || $ext == 'jpeg' || $ext == 'png' || $ext == 'gif')
						{
							
							if($this->imageResize($_FILES['file']['tmp_name'], 512))
							{
							
								if(file_exists('uploads/'.$_SESSION['user_id'].'.'.$ext)){
									unlink('uploads/'.$_SESSION['user_id'].'.'.$ext);
								}
								if(copy($_FILES['file']['tmp_name'], 'uploads/'.$_SESSION['user_id'].'.'.$ext)){
									
									$CB->db->where('id', $_SESSION['user_id']);
									if(!$CB->db->update('user', array(
										"image" => 'uploads/'.$_SESSION['user_id'].'.'.$ext,
										"name" => $data['name']
									))){
										echo $CB->db->error();
										die();
									}
								}
							}
						}
					}
				}
			}
			else if($data['action'] == 'changename'){
				$CB->db->where('id', $_SESSION['user_id']);
				if(!$CB->db->update('user', array("name" => $data['name']))){
					echo $CB->db->error();
					die();
				}
			}else{
				die('false');
			}
			$data['tags'] = explode(',', $data['tags']);
			if(is_array($data['tags'])){
				$CB->db->reset();
				$CB->db->where("user_id", $_SESSION['user_id']);
				if($CB->db->delete('user_tag')){
						
					foreach($data['tags'] as $tg){
						if(is_numeric($tg)){
							$CB->db->reset();
							if(!$CB->db->insert('user_tag', array(
									"id" => NULL,
									"user_id" => $_SESSION['user_id'],
									"tag_id" => $tg
							))){
								echo $CB->db->error();
								die();
							}
						}
					}
				}
			}
			
			die('true');
		}
		
	}
?>
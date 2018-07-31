<?php
	
	class UserPanel extends Store {
		
		public function __construct($data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			$this->read($data);
		}
		
		public function read($data)
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
									
									$this->where('id', $_SESSION['user_id']);
									if(!$this->update('user', array(
										"image" => 'uploads/'.$_SESSION['user_id'].'.'.$ext,
										"name" => $data['name']
									))){
										echo $this->error();
										die();
									}
								}
							}
						}
					}
				}
			}
			else if($data['action'] == 'changename'){
				$this->where('id', $_SESSION['user_id']);
				if(!$this->update('user', array("name" => $data['name']))){
					echo $this->error();
					die();
				}
			}else if($data['action'] == 'change_pass'){
				$this->where('id', $_SESSION['user_id']);
				$this->where('pass', $data['last_pass']);
				if(!$this->update('user', array("pass" => $data['new_pass']))){
					echo $this->error();
					die();
				}else{
					die('true');
				}
			}else{
				die('false');
			}
			$data['tags'] = explode(',', $data['tags']);
			if(is_array($data['tags'])){
				$this->reset();
				$this->where("user_id", $_SESSION['user_id']);
				if($this->delete('user_tag')){
						
					foreach($data['tags'] as $tg){
						if(is_numeric($tg)){
							$this->reset();
							if(!$this->insert('user_tag', array(
									"id" => NULL,
									"user_id" => $_SESSION['user_id'],
									"tag_id" => $tg
							))){
								echo $this->error();
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
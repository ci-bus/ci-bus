<?php
	
	class Login {
		
		public function __construct($data = array())
		{
			$data = $this->minArray($data);
			$this->dologin($data);
		}
		
		private function dologin($data)
		{
			$this->select("*");
			$this->where('email', $data['user']);
			$this->where('pass' , $data['pass']);
			
			if($user = $this->get("user"))
			{
				$_SESSION['user_id'] = $user->id;
				$_SESSION['user'] = $user;
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
?>
<?php
	
	class Login {
		
		public function __construct($CB, $data = array())
		{
			$data = $CB->minArray($data);
			$this->dologin($CB, $data);
		}
		
		private function dologin($CB, $data)
		{
			$CB->db->select("*");
			$CB->db->where('email', $data['user']);
			$CB->db->where('pass' , $data['pass']);
			
			if($user = $CB->db->get("user"))
			{
				$_SESSION['user_id'] = $user->id;
				$_SESSION['user'] = $user;
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
?>
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
			$CB->db->where('email', $data['email']);
			$CB->db->where('pass' , md5($data['pass']));
			
			if($user = $CB->db->get("task_user"))
			{
				$_SESSION['task_user_id'] = $user->id;
				$_SESSION['user'] = $user;
				unset($user->pass);
				
				$CB->parseConfig("user_id", $user->id);
			}
		}
	}
?>
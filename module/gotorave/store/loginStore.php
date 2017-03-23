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
				$CB->parseConfig("user_data", $user);
			}
		}
	}
?>
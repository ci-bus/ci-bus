<?php
	
	class Login extends Store {
		
		public function __construct($data = array())
		{
			$data = $this->minArray($data);
			$this->dologin($data);
		}
		
		private function dologin($data)
		{
			$this->select("*");
			$this->where('email', $data['email']);
			$this->where('pass' , md5($data['pass']));
			
			if($user = $this->get("task_user"))
			{
				$_SESSION['task_user_id'] = $user->id;
				$_SESSION['user'] = $user;
				unset($user->pass);
				
				$this->parseConfig("user_id", $user->id);
			}
		}
	}
?>
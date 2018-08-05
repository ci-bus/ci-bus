<?php
	
class User extends Store {
	
    public function __construct($data = array())
    {
    	//if(!$_SESSION['task_user_id']) die("cb.ctr('tasks','logout')");
    	$data = $this->minArray($data);
    	$action = $data['action'];
    	if($action)
    	{
    		$this->$action($data);
    	}
    	else
    	{
    	    $this->load($CB);
    	}
    }
    
    public function load($CB)
    {
        // Get users
        $this->select("id, name, email");
        $this->from("task_user");
        $this->orderBy("task_user.name", "ASC");
        $u_data = $this->getArray();
        
        $this->reset();
        
        if ($u_data)
        {
            $this->parseStore('user', $u_data);
        }
        else
        {
            echo $this->error();
        }
    }
    
    public function login($data) {
        
        $this->select("id, name, email");
        $this->from("task_user");
        $this->where("email", $data['email']);
        $this->where("pass", md5($data['pass']));
        $user = $this->get();
        
        if ($user) {
            $this->parseConfig('user', $user);
        }
    }
}
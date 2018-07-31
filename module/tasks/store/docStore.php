<?php
	
class Doc extends Store {
	
    public function __construct($data = array())
    {
    	if(!$_SESSION['task_user_id']) die("cb.ctr('tasks', 'logout')");
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
    
    public function load($data)
    {
        // Get users
        $this->select("id, name, email");
        $this->from("task_user");
        $this->orderBy("task_user.name", "ASC");
        $u_data = $this->get_array();
        
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
}
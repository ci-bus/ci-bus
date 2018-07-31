<?php
	
class Project extends Store {
	
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
        $this->select("id, name");
        $this->from("task_project");
        $this->orderBy("task_project.name", "ASC");
        $p_data = $this->get_array();
        $this->reset();
        
        if ($p_data)
        {
            $this->parseStore('project', $p_data);
        }
        else
        {
            echo $this->error();
        }
    }
}
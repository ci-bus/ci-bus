<?php
	
class Project extends Store {
	
    public function __construct($CB, $data = array())
    {
    	//if(!$_SESSION['task_user_id']) die("cb.ctr('tasks','logout')");
    	$data = $CB->minArray($data);
    	$action = $data['action'];
    	if($action)
    	{
    		$this->$action($CB, $data);
    	}
    	else
    	{
    		$this->load($CB);
    	}
    }
    
    public function load($CB)
    {
        // Get users
        $CB->db->select("id, name");
        $CB->db->from("task_project");
        $CB->db->orderBy("task_project.name", "ASC");
        $p_data = $CB->db->get_array();
        $CB->db->reset();
        
        if ($p_data)
        {
            $CB->parseStore('project', $p_data);
        }
        else
        {
            echo $CB->db->error();
        }
    }
}
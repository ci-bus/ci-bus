<?php
	
class Chat extends Store {
	
    public function __construct($CB, $data = array())
    {
    	if(!$_SESSION['task_user_id']) die("cb.ctr('tasks', 'logout')");
    	$data = $CB->minArray($data);
    	$action = $data['action'];
    	if($action)
    	{
    		$this->$action($CB, $data);
    	}
    	else
    	{
    		$this->load($CB, $data);
    	}
    }
    
    public function check($CB, $data) {
        $CB->db->select("id, task_id, date");
        $CB->db->from("task_chat");
        $CB->db->orderBy("id", "desc");
        $msgs = $CB->db->get_array();
        
        $CB->db->reset();
        $CB->db->select("id, task_id, date");
        $CB->db->from("task_chat_read");
        $CB->db->orderBy("id", "desc");
        $reads = $CB->db->get_array();
        
        $chat_alert = array();
        echo '/* ';
        print_r($msgs);
        print_r($reads);
        echo ' */';
        die();
    }
    
    public function load($CB, $data) {
        // Get chat messages
        $CB->db->select("task_chat.*, task_user.name");
        $CB->db->from("task_chat");
        $CB->db->join("task_user", "task_user.id=task_chat.task_user_id");
        $CB->db->where("task_id", $data['task_id']);
        $CB->db->orderBy("task_chat.id", "DESC");
        $c_data = $CB->db->get_array();
        
        if ($c_data)
        {
            $CB->parseStore('chat', $c_data);
        }
        else
        {
            $CB->parseStore('chat', array());
            echo $CB->db->error();
        }
        
        $CB->db->reset();
    }
    
    public function  send($CB, $data)
    {
        $ins = $CB->db->insert("task_chat", array(
            "id" => "NULL",
            "task_user_id" => $_SESSION['task_user_id'],
            "task_id" => $data['task_id'],
            "message" => $data['msg']
        ));
        
        if ($ins) {
            $CB->db->reset();
            $this->load($CB, $data);
        } else {
            echo $CB->db->error();
            die();
        }
    }
}
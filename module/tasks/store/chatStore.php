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
        
        $CB->db->select("task_chat.task_id, (SELECT count(*) FROM task_chat_read WHERE task_chat.task_id = task_chat_read.task_id) AS reg, count(task_chat_read.id) AS new_msg, count(task_chat.id) AS all_msg");
        $CB->db->from("task_chat");
        $CB->db->join("task_chat_read", "task_chat_read.task_id = task_chat.task_id AND task_chat_read.date < task_chat.date", "left");
        $new_msg = $CB->db->get_array();
        $CB->db->reset();
        $CB->parseStore('chat_alert', $new_msg);
        
        if (is_numeric($data['chat_opened'])) {
            foreach ($new_msg as $nm) {
                if ($nm->task_id == $data['chat_opened']) {
                    if (!$nm->reg || ($nm->reg && $nm->new_msg)) {
                        $this->load($CB, array(
                            'task_id' => $data['chat_opened']
                        ));
                    } else {
                        break;
                    }
                }
            }
        }
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
            $CB->parseStore('chat', array('msg' => $c_data));
        }
        else
        {
            $CB->parseStore('chat', array('msg' => array()));
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
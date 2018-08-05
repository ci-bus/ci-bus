<?php
	
class Chat extends Store {
	
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
    		$this->load($data);
    	}
    }
    
    public function check($data) {
        
        $this->select("task_chat.task_id, (SELECT count(*) FROM task_chat_read WHERE task_chat.task_id = task_chat_read.task_id) AS reg, count(task_chat_read.id) AS new_msg, count(task_chat.id) AS all_msg");
        $this->from("task_chat");
        $this->join("task_chat_read", "task_chat_read.task_id = task_chat.task_id AND task_chat_read.date < task_chat.date", "left");
        $new_msg = $this->getArray();
        $this->reset();
        $this->parseStore('chat_alert', $new_msg);
        
        if (is_numeric($data['chat_opened'])) {
            foreach ($new_msg as $nm) {
                if ($nm->task_id == $data['chat_opened']) {
                    if (!$nm->reg || ($nm->reg && $nm->new_msg)) {
                        $this->load(array(
                            'task_id' => $data['chat_opened']
                        ));
                    } else {
                        break;
                    }
                }
            }
        }
    }
    
    public function load($data) {
        // Get chat messages
        $this->select("task_chat.*, task_user.name");
        $this->from("task_chat");
        $this->join("task_user", "task_user.id=task_chat.task_user_id");
        $this->where("task_id", $data['task_id']);
        $this->orderBy("task_chat.id", "DESC");
        $c_data = $this->getArray();
        
        if ($c_data)
        {
            $this->parseStore('chat', array('msg' => $c_data));
        }
        else
        {
            $this->parseStore('chat', array('msg' => array()));
            echo $this->error();
        }
        
        $this->reset();
    }
    
    public function  send($data)
    {
        $ins = $this->insert("task_chat", array(
            "id" => "NULL",
            "task_user_id" => $_SESSION['task_user_id'],
            "task_id" => $data['task_id'],
            "message" => $data['msg']
        ));
        
        if ($ins) {
            $this->reset();
            $this->load($data);
        } else {
            echo $this->error();
            die();
        }
    }
}
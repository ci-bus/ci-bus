<?php
	
	class Task extends Store {
		
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
		
		public function create($data)
		{
		    $ins = $this->insert("task", array(
		        "id" => "NULL",
		        "task_user_id" => $data['user'],
		        "task_project_id" => $data['project'],
		        "title" => $data['title'],
		        "type" => $data['type'],
		        "content" => $data['content'],
		        "step" => $data['step'],
		        "date" => date('Y-m-d H:i:s')
		    ));
		    
		    if ($ins) {
		        $this->reset();
		        $this->load($CB);
		    } else {
		        echo $this->error();
		        die();
		    }
		}
		
		public function changeStatus($data)
		{
		    $this->where('id', $data['task_id']);
		    if (!$this->update('task', array(
		        "step" => $data['new_step'],
		        "task_user_id" => $data['user_id']
		    ))) {
		        echo $this->error();
		        die();
		    } else {
		        $this->reset();
		        $this->load($CB);
		    }
		}

		
		public function load($CB)
		{
		    // Get users
		    $this->select("id, name");
		    $this->from("task_user");
		    $this->orderBy("task_user.id", "ASC");
		    $tasks = array();
		    if ($u_data = $this->getArray()) {
		        foreach ($u_data as $d) {
		            array_push($tasks, array(
		                'user' => array(
		                    'id' => $d->id,
		                    'name' => $d->name
		                ),
		                'todo' => array(),
		                'inprogress' => array(),
		                'inreview' => array(),
		                'done' => array(),
		                'hidden' => array()
		            ));
		        }
		    }
		    $this->reset();
		    
		    $this->select("task_project.name AS task_project_name, task.task_user_id, task.task_project_id, task.id, task.title, task.type, task.content, task.step, task.date");
		    $this->from("task");
		    $this->join("task_user", "task_user.id=task.task_user_id");
		    $this->join("task_project", "task_project.id=task.task_project_id");
		    $this->orderBy("task_user.id", "ASC");
		    		    
		    if ($data = $this->getArray()) {
		        
		        /* Example data
	              [0] => stdClass Object (
                    [task_project_name] => Edeka
                    [task_user_id] => 1
                    [task_project_id] => 1
                    [id] => 1
                    [title] => Test task
                    [type] => info
                    [content] => task content
                    [step] => 1 // 0 backlog, 1 todo, 2 progress, 3 review, 4 done, 5 hidden	
                    [date] => 2018-06-25 09:06:46 )
		         */
		        
		        $backlog = array();
		        
		        foreach ($data AS $d) {
		            
		            $step = false;
		            switch ($d->step) {
		                case 0:
		                    array_push($backlog, array(
    		                    'title' => $d->title,
    		                    'project' => $d->task_project_name,
    		                    'type' => $d->type,
    		                    'id' => $d->id,
    		                    'content' => $d->content,
    		                    'task_user_id' => $d->task_user_id,
    		                    'step' => $d->step
		                    ));
		                    break;
		                case 1: $step = 'todo';
		                    break;
		                case 2: $step = 'inprogress';
		                    break;
		                case 3: $step = 'inreview';
		                    break;
		                case 4: $step = 'done';
		                    break;
		                case 5: $step = 'hidden';
		                    break;
		            }
		            if ($step) {
		                for ($i = 0; $i < count($tasks); $i ++) {
		                    // Push task in owner user
		                    if ($tasks[$i]['user']['id'] == $d->task_user_id) {
		                        array_push($tasks[$i][$step], array(
		                            'project' => $d->task_project_name,
		                            'title' => $d->title,
		                            'type' => $d->type,
		                            'id' => $d->id,
		                            'content' => $d->content,
		                            'task_user_id' => $d->task_user_id,
		                            'step' => $d->step
		                        ));
		                    }
		                }
		            }
		        }
		        
		        $this->parseStore('tasks', $tasks);
		        $this->parseStore('backlog', $backlog);
		    }
		    else
		    {
		        echo $this->error();
		    }
		}
	}
?>
<?php
	
	class Review extends Store {
		
		public function __construct($data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
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
		
		public function send($data)
		{
			if($data)
			{
				$this->where('tabla', $data['type']);
				$this->where('id_row', $data['id']);
				$this->where('id_user', $_SESSION['user_id']);
				$this->delete('review');
				$this->reset();
				
				$data2 = array('id' => 'NULL',
						'tabla' => $data['type'],
						'id_row' => $data['id'],
						'id_user' => $_SESSION['user_id'],
						'date' => date('Y-m-d'),
						'review' => 1);
				
				if((int) $data['value'] === 1)
				{
					if(!$this->insert('review', $data2)){
						echo $this->error();
					}else{
						return true;
					}
				}
				else if((int) $data['value'] === -1)
				{
					$data2['review'] = 0;
					if(!$this->insert('review', $data2)){
						echo $this->error();
					}else{
						return true;
					}
				}else{
					echo 'Invalid value '.$data['value'];
				}
			}		
		}
	}
?>
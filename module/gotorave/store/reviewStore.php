<?php
	
	class Review extends Store {
		
		public function __construct($CB, $data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
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
		
		public function send($CB, $data)
		{
			if($data)
			{
				$CB->db->where('tabla', $data['type']);
				$CB->db->where('id_row', $data['id']);
				$CB->db->where('id_user', $_SESSION['user_id']);
				$CB->db->delete('review');
				$CB->db->reset();
				
				$data2 = array('id' => 'NULL',
						'tabla' => $data['type'],
						'id_row' => $data['id'],
						'id_user' => $_SESSION['user_id'],
						'date' => date('Y-m-d'),
						'review' => 1);
				
				if((int) $data['value'] === 1)
				{
					if(!$CB->db->insert('review', $data2)){
						echo $CB->db->error();
					}else{
						return true;
					}
				}
				else if((int) $data['value'] === -1)
				{
					$data2['review'] = 0;
					if(!$CB->db->insert('review', $data2)){
						echo $CB->db->error();
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
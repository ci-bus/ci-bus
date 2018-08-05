<?php
	
	class Letra extends Store {
		
		public function __construct($data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			
			if($data['new'])
			{
				$res = $this->insert('maderap_letra', array(
					'title' => $data['new'],
					'user_id' => $_SESSION['user_id']
				));
				if($res) echo $this->getConfig("insert_id");
				else echo $this->error();
			}
			else if($data['remove'])
			{
				$this->where('id', $data['remove']);
				$this->where('user_id', $_SESSION['user_id']);
				$res = $this->delete('maderap_letra');
				if($res) echo 'true';
				else echo $this->error();
			}
			else if(is_numeric($data['id']) && $data['letra'])
			{
				$this->where('id', $data['id']);
				$this->where('user_id', $_SESSION['user_id']);
				$res = $this->update('maderap_letra', array(
					'text' => $data['letra']
				));
				if($res) echo 'true';
				else echo $this->error();
			}
			else
			{
				$this->where('user_id', $_SESSION['user_id']);
				$this->select('id, title, text');
				$this->orderBy('id', 'DESC');
				$res = $this->getArray('maderap_letra');
				if(!$res) $res=array();
				$this->parseStore('letras', $res);
			}
		}
	}
<?php
	
	class Tags extends Store {
		
		public function __construct($data = array())
		{
		    parent::__construct();
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			$data = $this->minArray($data);
			
			$this->read($data);
		}
		
		public function read($data)
		{
			$this->select("id, name, type");
			$this->from("tags");
			$this->orderBy("id", "ASC");
			if($res = $this->get())
			{
				if(is_array($res))
				{
					$res2 = array();
					for($i=0;$i<count($res);$i++)
					{
						if(!$res2[$res[$i]->type]) $res2[$res[$i]->type] = array();
						$res2[$res[$i]->type] []= $res[$i];
					}
				}
				$this->parseStore( 'tags', $res2);
			}
		}
		
	}
?>


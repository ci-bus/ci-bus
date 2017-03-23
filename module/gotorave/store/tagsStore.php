<?php
	
	class Tags extends Store {
		
		public function __construct($CB, $data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			$data = $CB->minArray($data);
			
			$this->read($CB, $data);
		}
		
		public function read($CB, $data)
		{
			$CB->db->select("id, name, type");
			$CB->db->from("tags");
			if($res = $CB->db->get())
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


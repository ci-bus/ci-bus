<?php
	
	class Events extends Store {
		
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

		
		public function load($CB, $data)
		{
			$CB->db->select("event.id, name, image, user_id, date, description, postal");
			if(is_numeric($data['id_tag']))
			{
				$CB->db->join("event_tag", "event_tag.event_id=event.id");
				$CB->db->where("event_tag.tag_id", $data['id_tag']);
			}
			if($res = $CB->db->get("event"))
			{
				if(is_object($res))$res = array($res);
				foreach($res as $k => $r0)
				{
					$res[$k]->description = $CB->embed_multimedia($res[$k]->description);
					$CB->db->reset();
					$CB->db->select("event_tag.id, event_tag.tag_id, tags.name");
					$CB->db->from("event_tag");
					$CB->db->join("tags", "tags.id=event_tag.tag_id");
					$CB->db->where("event_tag.event_id", $r0->id);
					
					if($res2 = $CB->db->get())
					{
						if(is_object($res2))$res2 = array($res2);
						if(is_array($res2))$res[$k]->tags = $res2;
					}
					else
					{
						echo $CB->db->error();
					}
					$res2 = false;
				}
				$this->parseStore('events', array('ev' => $res));
			}
			else
			{
				$this->parseStore('events', array('ev' => array()));
			}
		}
	}
?>


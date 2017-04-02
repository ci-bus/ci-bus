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
			if($data['id_tag'] == 'like')
			{
				$CB->db->select("review.id_row");
				$CB->db->where(array(
						"tabla" => "event",
						"review" => "1",
						"id_user" => $_SESSION['user_id']
				));
				if($res4 = $CB->db->get_array('review')){
					foreach($res4 as $tid){
						$wherein .= $tid->id_row.", ";
					}
					$wherein = substr($wherein, 0, count($wherein)-3);
					$CB->db->reset();
				}else{
					$this->parseStore('events', array('ev' => array()));
				}
			}
			
			$CB->db->select("event.id, name, image, user_id, date, description, postal");
			if(is_numeric($data['id_tag']))
			{
				$CB->db->join("event_tag", "event_tag.event_id=event.id");
				$CB->db->where("event_tag.tag_id", $data['id_tag']);
			}
			
			if($wherein)
			{
				$CB->db->where("event.id IN (".$wherein.")");
			}
			
			if($data['id_tag'] == 'me')
			{
				$CB->db->where('user_id', $_SESSION['user_id']);
			}
			
			$CB->db->orderBy("event.date", "DESC");
			
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
					
					$CB->db->reset();
					$CB->db->select("review, id_user");
					$CB->db->from("review");
					$CB->db->where("review.tabla", 'event');
					$CB->db->where("review.id_row", $r0->id);
						
					$res[$k]->reviews = 0;
					$res[$k]->user_review = 0;
						
					$res[$k]->review_pos = "false";
					$res[$k]->review_con = "false";
					$res[$k]->hand1_color = "red";
					$res[$k]->hand2_color = "green";
						
					if($res3 = $CB->db->get_array())
					{
						foreach($res3 as $r3)
						{
							if($r3->review > 0){
								$res[$k]->reviews++;
								if($r3->id_user == $_SESSION['user_id']){
									$res[$k]->user_review = 1;
									$res[$k]->review_pos = "true";
									$res[$k]->hand2_color = "gray";
								}
							}else{
								$res[$k]->reviews--;
								if($r3->id_user == $_SESSION['user_id']){
									$res[$k]->user_review = -1;
									$res[$k]->review_con = "true";
									$res[$k]->hand1_color = "gray";
								}
							}
						}
					}
					else
					{
						echo $CB->db->error();
					}
					
					$res3 = false;
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


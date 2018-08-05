<?php
	
	class Events extends Store {
		
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

		
		public function load($data)
		{
			if($data['id_tag'] == 'like')
			{
				$this->select("review.id_row");
				$this->where(array(
						"tabla" => "event",
						"review" => "1",
						"id_user" => $_SESSION['user_id']
				));
				if($res4 = $this->getArray('review')){
					foreach($res4 as $tid){
						$wherein .= $tid->id_row.", ";
					}
					$wherein = substr($wherein, 0, count($wherein)-3);
					$this->reset();
				}else{
					$this->parseStore('events', array('ev' => array()));
				}
			}
			
			$this->select("event.id, name, image, user_id, date, description, postal");
			if(is_numeric($data['id_tag']))
			{
				$this->join("event_tag", "event_tag.event_id=event.id");
				$this->where("event_tag.tag_id", $data['id_tag']);
			}
			
			if($wherein)
			{
				$this->where("event.id IN (".$wherein.")");
			}
			
			if($data['id_tag'] == 'recent')
			{
				$this->where('date', date('Y-m-d'), '>=');
				$this->limit(1);
			}
			
			if($data['id_tag'] == 'me')
			{
				$this->where('user_id', $_SESSION['user_id']);
			}
			
			$this->orderBy("event.date", "ASC");
			
			if($res = $this->get("event"))
			{
				if(is_object($res))$res = array($res);
				foreach($res as $k => $r0)
				{
					$res[$k]->description = $this->embedMultimedia($res[$k]->description);
					$this->reset();
					$this->select("event_tag.id, event_tag.tag_id, tags.name");
					$this->from("event_tag");
					$this->join("tags", "tags.id=event_tag.tag_id");
					$this->where("event_tag.event_id", $r0->id);
					
					if($res2 = $this->get())
					{
						if(is_object($res2))$res2 = array($res2);
						if(is_array($res2))$res[$k]->tags = $res2;
					}
					else
					{
						echo $this->error();
					}
					$res2 = false;
					
					$this->reset();
					$this->select("review, id_user");
					$this->from("review");
					$this->where("review.tabla", 'event');
					$this->where("review.id_row", $r0->id);
						
					$res[$k]->reviews = 0;
					$res[$k]->user_review = 0;
						
					$res[$k]->review_pos = "false";
					$res[$k]->review_con = "false";
					$res[$k]->hand1_color = "red";
					$res[$k]->hand2_color = "green";
						
					if($res3 = $this->getArray())
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
						echo $this->error();
					}
					
					$res3 = false;
				}
				if($data['id_tag'] == 'recent'){
					$this->parseStore('events', array('recent' => $res));
				}else{
					$this->parseStore('events', array('ev' => $res));
				}
			}
			else
			{
				$this->parseStore('events', array('ev' => array()));
			}
		}
	}
?>


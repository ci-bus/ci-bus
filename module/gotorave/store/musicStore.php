<?php
	
	class Music extends Store {
		
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
				if($data['titulo'] && $data['enlace'])
				{
					$ins = $this->insert("music", array(
							"id" => "NULL",
							"user_id" => $_SESSION['user_id'],
							"titulo" => $data['titulo'],
							"enlace" => $data['enlace']
						)
					);
					if($ins){
						$music_id = $this->getConfig("insert_id");
						if(is_numeric($music_id))
						{
							for($i=0;$i<count($data['tags']);$i++)
							{
								$this->reset();
								$ins2 = $this->insert("music_tag", array(
									 	"id" => "NULL",
										"music_id" => $music_id,
										"tag_id" => $data['tags'][$i]
									)
								);
							}
							die('1');
						}
					}
				}
			}
			die('0');
		}
		
		public function load($data)
		{
			if($data['id_tag'] == 'like')
			{
				$this->select("review.id_row");
				$this->where(array(
					"tabla" => "music",
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
					$this->parseStore('music', array('msc' => array()));
				}
			}
			
			$this->select("music.id, titulo, enlace");
			if(is_numeric($data['id_tag']))
			{
				$this->join("music_tag", "music_tag.music_id=music.id");
				$this->where("music_tag.tag_id", $data['id_tag']);
			}
			if($wherein)
			{
				$this->where("music.id IN (".$wherein.")");
			}
			
			if($data['id_tag'] == 'me')
			{
				$this->where('user_id', $_SESSION['user_id']);
			}
			
			$this->from("music");
			$this->orderBy("id", "desc");
			
			if($res = $this->getArray())
			{
				foreach($res as $k => $r0)
				{
					$res[$k]->enlace = $this->embedMultimedia($res[$k]->enlace);
					
					$this->reset();
					$this->select("music_tag.id, music_tag.tag_id, tags.name");
					$this->from("music_tag");
					$this->join("tags", "tags.id=music_tag.tag_id");
					$this->where("music_tag.music_id", $r0->id);
					
					if($res2 = $this->getArray())
					{
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
					$this->where("review.tabla", 'music');
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
			}
			else
			{
				echo $this->getConfig("error");
			}
			
			if(!$res) $res = array();
			
			$this->parseStore('music', array('msc' => $res));
		}
	}
?>
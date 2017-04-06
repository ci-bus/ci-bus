<?php
	
	class Music extends Store {
		
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
				if($data['titulo'] && $data['enlace'])
				{
					$ins = $CB->db->insert("music", array(
							"id" => "NULL",
							"user_id" => $_SESSION['user_id'],
							"titulo" => $data['titulo'],
							"enlace" => $data['enlace']
						)
					);
					if($ins){
						$music_id = $CB->db->getConfig("insert_id");
						if(is_numeric($music_id))
						{
							for($i=0;$i<count($data['tags']);$i++)
							{
								$CB->db->reset();
								$ins2 = $CB->db->insert("music_tag", array(
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
		
		public function load($CB, $data)
		{
			if($data['id_tag'] == 'like')
			{
				$CB->db->select("review.id_row");
				$CB->db->where(array(
					"tabla" => "music",
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
					$this->parseStore('music', array('msc' => array()));
				}
			}
			
			$CB->db->select("music.id, titulo, enlace");
			if(is_numeric($data['id_tag']))
			{
				$CB->db->join("music_tag", "music_tag.music_id=music.id");
				$CB->db->where("music_tag.tag_id", $data['id_tag']);
			}
			if($wherein)
			{
				$CB->db->where("music.id IN (".$wherein.")");
			}
			
			if($data['id_tag'] == 'me')
			{
				$CB->db->where('user_id', $_SESSION['user_id']);
			}
			
			$CB->db->from("music");
			$CB->db->orderBy("id", "desc");
			
			if($res = $CB->db->get_array())
			{
				foreach($res as $k => $r0)
				{
					$res[$k]->enlace = $CB->embed_multimedia($res[$k]->enlace);
					
					$CB->db->reset();
					$CB->db->select("music_tag.id, music_tag.tag_id, tags.name");
					$CB->db->from("music_tag");
					$CB->db->join("tags", "tags.id=music_tag.tag_id");
					$CB->db->where("music_tag.music_id", $r0->id);
					
					if($res2 = $CB->db->get_array())
					{
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
					$CB->db->where("review.tabla", 'music');
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
			}
			else
			{
				echo $CB->db->getConfig("error");
			}
			
			if(!$res) $res = array();
			
			$this->parseStore('music', array('msc' => $res));
		}
	}
?>
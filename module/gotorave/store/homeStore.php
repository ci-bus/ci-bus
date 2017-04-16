<?php
	
	class Home extends Store {
		
		public function __construct($CB, $data)
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			$CB->db->reset();
			$this->load($CB);
		}
		
		public function load($CB){
			$music = $this->load_music($CB);
			$user = $this->load_user($CB);
			$this->parseStore('new', array('music' => $music, 'user' => $user));
		}
		
		public function load_music($CB)
		{
			
			$CB->db->select("music.id, titulo, enlace");
			
			$CB->db->from("music");
			$CB->db->orderBy("id", "desc");
			$CB->db->limit(3);
			
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
			
			return $res;
		}
		
		public function load_user($CB)
		{
			$CB->db->reset();
			$CB->db->select("user.id, name, image, online");
			$CB->db->from("user");
			$CB->db->orderBy("user.id", "desc");
			$CB->db->limit(3);
				
			if($res = $CB->db->get_array())
			{
				foreach($res as $k => $r0)
				{
					$CB->db->reset();
					$CB->db->select("user_tag.id, user_tag.tag_id, tags.name");
					$CB->db->from("user_tag");
					$CB->db->join("tags", "tags.id=user_tag.tag_id");
					$CB->db->where("user_tag.user_id", $r0->id);
					$CB->db->orderBy("user_tag.id", "ASC");
						
					if($res2 = $CB->db->get_array())
					{
						if(is_array($res2) && !empty($res2)){
							$res[$k]->tags = $res2;
						}
					}
					else
					{
						echo $CB->db->error();
					}
					$res2 = false;
						
					$CB->db->reset();
					$CB->db->select("review, id_user");
					$CB->db->from("review");
					$CB->db->where("review.tabla", 'user');
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
						
					$CB->db->reset();
					$CB->db->select("user_id");
					$CB->db->from("user_follow");
					$CB->db->where("user_id_followed", $r0->id);
					$following = 0;
					$user_follow = 0;
						
					if($res4 = $CB->db->get_array())
					{
						foreach($res4 as $r4)
						{
							if($r4->user_id == $_SESSION['user_id']){
								$user_follow = 1;
							}
							$following++;
						}
					}
					else
					{
						echo $CB->db->error();
					}
					$res4 = false;
				}
		
				$res[$k]->following = $following;
				$res[$k]->user_follow = $user_follow;
		
				return $res;
			}
			else
			{
				return array();
			}
		}
	}
?>
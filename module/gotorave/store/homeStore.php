<?php
	
	class Home extends Store {
		
		public function __construct($data)
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			$this->reset();
			$this->load($CB);
		}
		
		public function load($CB){
			$music = $this->load_music($CB);
			$user = $this->load_user($CB);
			$this->parseStore('new', array('music' => $music, 'user' => $user));
		}
		
		public function load_music($CB)
		{
			
			$this->select("music.id, titulo, enlace");
			
			$this->from("music");
			$this->orderBy("id", "desc");
			$this->limit(3);
			
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
			
			return $res;
		}
		
		public function load_user($CB)
		{
			$this->reset();
			$this->select("user.id, name, image, online");
			$this->from("user");
			$this->orderBy("user.id", "desc");
			$this->limit(3);
				
			if($res = $this->getArray())
			{
				foreach($res as $k => $r0)
				{
					$this->reset();
					$this->select("user_tag.id, user_tag.tag_id, tags.name");
					$this->from("user_tag");
					$this->join("tags", "tags.id=user_tag.tag_id");
					$this->where("user_tag.user_id", $r0->id);
					$this->orderBy("user_tag.id", "ASC");
						
					if($res2 = $this->getArray())
					{
						if(is_array($res2) && !empty($res2)){
							$res[$k]->tags = $res2;
						}
					}
					else
					{
						echo $this->error();
					}
					$res2 = false;
						
					$this->reset();
					$this->select("review, id_user");
					$this->from("review");
					$this->where("review.tabla", 'user');
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
						
					$this->reset();
					$this->select("user_id");
					$this->from("user_follow");
					$this->where("user_id_followed", $r0->id);
					$following = 0;
					$user_follow = 0;
						
					if($res4 = $this->getArray())
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
						echo $this->error();
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
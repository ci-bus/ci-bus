<?php
	
	class Chat {
		
		public function __construct($CB, $data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			if(!$_SESSION['chat_sala']) $_SESSION['chat_sala'] = 1;
			if(!$_SESSION['chat_name']) $_SESSION['chat_name'] = "Sala general";
			$data = $CB->minArray($data);
			$action = $data['action'];
			if($action)
			{
				$this->$action($CB, $data);
			}
			else
			{
				$this->read($CB, $data);
			}
		}
		
		public function salas($CB, $data)
		{
			$CB->db->reset();
			$CB->db->select("chat.id, chat.name");
			$CB->db->from("chat");
			if($res = $CB->db->get_array())
			{
				$CB->parseStore( 'chat', array( 'salas' => $res ));
			}else{
				echo $CB->db->error();
			}
		}
		
		public function change($CB, $data)
		{
			$_SESSION['chat_sala'] = $data['sala_id'];
			$CB->db->select("name");
			$CB->db->from("chat");
			$CB->db->where("id", $data['sala_id']);
			$sala = $CB->db->get();
			$_SESSION['chat_name'] = $sala->name;
		}
		
		public function send($CB, $data)
		{
			if($data)
			{
				if($data['msg'])
				{
					$ins = $CB->db->insert("chat_msg", array(
								 "id" => "NULL",
							"user_id" => $_SESSION['user_id'],
							"chat_id" => $_SESSION['chat_sala'],
								"msg" => $data['msg']
						)
					);
					
					echo $ins;
				}
			}
		}
		
		public function getfriend($CB, $id_user)
		{
			$res = array();
			$CB->db->reset();
			$CB->db->select("user_id, user_id2");
			$CB->db->from("user_friend");
			$CB->db->where("user_id", $_SESSION['user_id']);
			$CB->db->or_where("user_id2", $_SESSION['user_id']);
			if($res2 = $CB->db->get())
			{
				if(is_array($res2))
				{
					for($w=0;$w<count($res2);$w++)
					{
						if($res2[$w]->user_id == $_SESSION['user_id']) array_push($res, $res2[$w]->user_id2);
						else array_push($res, $res2[$w]->user_id);
					}
				}
				else
				{
					if($res2->user_id == $_SESSION['user_id']) array_push($res, $res2->user_id2);
					else array_push($res, $res2->user_id);
				}
			}
			return $res;
		}
		
		public function read($CB, $data)
		{
			if(empty($data))
			{
				$CB->db->select( "user.id as user_id, user.name as user, chat_msg.msg as msg" );
				$CB->db->from( "chat_msg" );
				$CB->db->join( 'user', 'chat_msg.user_id = user.id' );
				$CB->db->where( 'chat_msg.chat_id', $_SESSION['chat_sala'] );
				$CB->db->orderby( 'chat_msg.id', 'DESC' );
				$CB->db->limit(20);
				if($res = $CB->db->get())
				{
					$friends = $this->getfriend($CB, $_SESSION['user_id']);
					if(is_object($res)) $res = array($res);
					for($r=0;$r<count($res);$r++)
					{
						if(in_array($res[$r]->user_id, $friends))
						{
							$res[$r]->type = "info";
						}
						else if($res[$r]->user_id == $_SESSION['user_id'])
						{
							$res[$r]->type = "default";
						}
						else
						{
							$res[$r]->type = "warning";
						}
						
						$res[$r]->msg = $CB->embed_multimedia($res[$r]->msg);
					}
					$CB->parseStore(
						'chat', array(
							'name' => $_SESSION['chat_name'],
							'chat' => $res
						)
					);
				}
				else
				{
					$CB->parseStore(
						'chat', array(
							'name' => $_SESSION['chat_name'],
							'chat' => array()
						)
					);
				}
			}
		}
	}
?>


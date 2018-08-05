<?php
	
	class Chat extends Store {
		
		public function __construct($data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			if(!$_SESSION['chat_sala']) $_SESSION['chat_sala'] = 1;
			if(!$_SESSION['chat_name']) $_SESSION['chat_name'] = "Sala general";
			$data = $this->minArray($data);
			$action = $data['action'];
			if($action)
			{
				$this->$action($data);
			}
			else
			{
				$this->read($data);
			}
		}
		
		public function salas($data)
		{
			$this->reset();
			$this->select("chat.id, chat.name");
			$this->from("chat");
			if($res = $this->getArray())
			{
				$this->parseStore( 'chat', array( 'salas' => $res ));
			}else{
				echo $this->error();
			}
		}
		
		public function change($data)
		{
			$_SESSION['chat_sala'] = $data['sala_id'];
			$this->select("name");
			$this->from("chat");
			$this->where("id", $data['sala_id']);
			$sala = $this->get();
			$_SESSION['chat_name'] = $sala->name;
		}
		
		public function send($data)
		{
			if($data)
			{
				if($data['msg'])
				{
					$ins = $this->insert("chat_msg", array(
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
		
		public function getfriend($id_user)
		{
			$res = array();
			$this->reset();
			$this->select("user_id, user_id2");
			$this->from("user_friend");
			$this->where("user_id", $_SESSION['user_id']);
			$this->orWhere("user_id2", $_SESSION['user_id']);
			if($res2 = $this->get())
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
		
		private function reg_online($CB){
			$this->where( 'user.id', $_SESSION['user_id'] );
			$this->update('user', array(
				'online'=> time()
			));
			$this->reset();
		}
		
		public function read($data)
		{
			if(empty($data))
			{
				$this->reg_online($CB);
				$this->select( "user.online as online, user.id as user_id, user.name as user, chat_msg.id as id, chat_msg.msg as msg" );
				$this->from( "chat_msg" );
				$this->join( 'user', 'chat_msg.user_id = user.id' );
				$this->where( 'chat_msg.chat_id', $_SESSION['chat_sala'] );
				$this->groupBy( 'chat_msg.id' );
				$this->orderBy( 'chat_msg.id', 'DESC' );
				$this->limit(20);
				if($res = $this->getArray())
				{
					$friends = $this->getfriend($_SESSION['user_id']);
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
						
						if(time()-$res[$r]->online > 5){
							$res[$r]->online = 0;
						}else{
							$res[$r]->online = 1;
						}
						
						$res[$r]->msg = $this->embedMultimedia($res[$r]->msg);
					}
					$this->parseStore(
						'chat', array(
							'name' => $_SESSION['chat_name'],
							'chat' => $res
						)
					);
				}
				else
				{
					$this->parseStore(
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


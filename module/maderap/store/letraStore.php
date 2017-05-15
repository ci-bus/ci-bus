<?php
	
	class Letra {
		
		public function __construct($CB, $data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			
			if($data['new'])
			{
				$res = $CB->db->insert('maderap_letra', array(
					'title' => $data['new'],
					'user_id' => $_SESSION['user_id']
				));
				if($res) echo $CB->db->getConfig("insert_id");
				else echo $CB->db->error();
			}
			else if($data['remove'])
			{
				$CB->db->where('id', $data['remove']);
				$CB->db->where('user_id', $_SESSION['user_id']);
				$res = $CB->db->delete('maderap_letra');
				if($res) echo 'true';
				else echo $CB->db->error();
			}
			else if(is_numeric($data['id']) && $data['letra'])
			{
				$CB->db->where('id', $data['id']);
				$CB->db->where('user_id', $_SESSION['user_id']);
				$res = $CB->db->update('maderap_letra', array(
					'text' => $data['letra']
				));
				if($res) echo 'true';
				else echo $CB->db->error();
			}
			else
			{
				$CB->db->where('user_id', $_SESSION['user_id']);
				$CB->db->select('id, title, text');
				$CB->db->orderBy('id', 'DESC');
				$res = $CB->db->get_array('maderap_letra');
				if(!$res) $res=array();
				$CB->parseStore('letras', $res);
			}
		}
	}
<?php
	
	class Search {
		
		public function __construct($CB, $data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			
			$data = $CB->minArray($data);
			$this->search($CB, $data);
		}
		
		public function search($CB, $data){
			
			$search = $data['search'];
			
			$CB->db->select('id, palabra');
			$CB->db->where('palabra', $search, 'like');
			$res = $CB->db->get('maderap');
			if(!$res) $res=array();
			$CB->parseStore('palabras', array('busqueda' => $res));
		}
	}
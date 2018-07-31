<?php
	
	class Search extends Store {
		
		public function __construct($data = array())
		{
			if(!$_SESSION['user_id']) die("cb.ctr('gotorave','logout')");
			
			$data = $this->minArray($data);
			$this->search($data);
		}
		
		public function search($data){
			
			$search = $data['search'];
			
			$this->select('id, palabra');
			$this->where('palabra', $search, 'like');
			$res = $this->get('maderap');
			if(!$res) $res=array();
			$this->parseStore('palabras', array('busqueda' => $res));
		}
	}
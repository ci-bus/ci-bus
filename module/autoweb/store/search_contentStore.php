<?php
	
	class Search_content {
		
		public function __construct($CB, $data = array())
		{
			$data = $CB->minArray($data);
			$this->search($CB, $data);
		}
		
		public function search($CB, $data){
			print_r($data['search']);
		}
	}
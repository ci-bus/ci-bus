<?php
	
	class Search_content {
		
		public function __construct($data = array())
		{
			$data = $this->minArray($data);
			$this->search($data);
		}
		
		public function search($data){
			print_r($data['search']);
		}
	}
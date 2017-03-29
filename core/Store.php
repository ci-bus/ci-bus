<?php

	include "autoload.php";

	class Store {
		
		var $config;   //Variables of configs
		var $time_exe; //Count time execute
		var $event;    //Events pre/pos Insert | Update | Delete

		function __construct(){
			
			$this->time_exe = microtime(true);
			$this->config = include "config.php";
			//$this->loadLibrary("autoload.php");
			$this->getVars();
			$this->initializeEvents();
			$this->initializeDB();
		}
		
		public function loadLibrary($file){
			
			if(file_exists($file)){
				
				include $file;
			}else{
				
				return false;
			}
		}
		
		private function getVars(){
			
			if(!empty($_GET))$this->setConfig("GET", $_GET);
			if(!empty($_POST))$this->setConfig("POST", $_POST);
			if(!empty($_SESSION))$this->setConfig("SESSION", $_SESSION);
		}
		
		private function initializeDB(){
			
			$this->db = new Db(1);
			$this->db->setConfig($this->getConfig('db'));
		}
		
		private function initializeEvents(){
			
			$this->event = new Event();

			/* Defaults |
			|*|**********
			|*|	->preInsert
			|*|	->preUpdate
			|*|	->preDelete
			|*|	->posInsert
			|*|	->posUpdate
			|*|	->posDelete
			\*/
		}
		
		public function getTimeExe($reset = false){
				
				$temp_time = microtime(true) - $this->time_exe;
				if($reset){
					
					$this->time_exe += $temp_time;
				}
				return $temp_time;
		}
		
		
		public function setConfig($var, $val = false){
			
			if(is_array($var)){
				
				$this->config = array_merge($this->config, $var);
			}else{
				
				$this->config[$var] = $val;
			}
		}


		public function getConfig($var, $var2 = false){
			
			if(!$var2){

				if( isset( $this->config[$var] )){
					return $this->config[$var];
				}
			}else{
				
				if( isset( $this->config[$var][$var2] )){
					return $this->config[$var][$var2];
				}
			}
		}
		
		
		public function showCode($cod)
		{
			echo "<pre>";
			print_r($cod);
			echo "</pre>";
		}
		
		public function parseStore($name, $data)
		{
			echo "cb.define({".
				"xtype: 'store',".
				"name: '".$name."',".
				"data: ".json_encode($data, true).
				"}); ";
		}
		
		public function parseVar($name, $data){
			echo "var ".$name."=".json_encode($data, true)."; ";
		}
		
		public function parseConfig($name, $data){
			echo "cb.setConfig('".$name."', ".json_encode($data, true)."); ";
		}
		
		public function utf8_converter($ar)
		{
			array_walk_recursive($ar, function(&$item, $key)
			{
				$item = utf8_encode($item);
			});
			return $ar;
		}
		
		public function minArray($ar)
		{
			$res = array();
			if(is_array($ar))
			{
				for($i=0;$i<count($ar);$i++)
				{
					if($ar[$i]['name'])
					{
						$res[$ar[$i]['name']] = $ar[$i]['value'];
					}
					else
					{
						return $ar;
					}
				}
				return $res;
			}
			else
			{
				return $ar;
			}
		}
		
		public function extraerURLs($cadena){
		    $regex = '/https?\:\/\/[^\" ]+/i';
		    preg_match_all($regex, $cadena, $partes);
		    return ($partes[0]);
		}
		
		public function embed_multimedia($txt)
		{
			$urls = $this->extraerURLs($txt);
			 
			foreach($urls as $url){
				$parse = parse_url($url);
			    $txt = str_replace($url, '<a target="_blank" href="'.$url.'">[ '.str_replace('www.', '', $parse['host']).' ]</a>', $txt);
			}
			
			return $txt;
		}
		
		public function mergePlusObject($arr1, $arr2)
		{
			if(is_object($arr1) && is_object($arr2)){
				foreach($arr2 as $k => $v)
				{
					if($arr1->$k != $arr2->$k)
					{
						if(is_array($arr1->$k))
						{
							$arr1->$k = array_merge($arr1->$k, $arr2->$k);
						}
						else if(!is_array($arr1->$k) && !is_object($arr1->$k))
						{
							$arr1->$k = array($arr1->$k, $arr2->$k);
						}
					}
				}
			}
			return $arr1;
		}
	}
	
	$CB = new Store();
	
	$CB->db->connect();
?>
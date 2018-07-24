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
		/*
		public function extendStore($name, $data)
		{
			echo "cb.define({".
					"xtype: 'store',".
					"name: '".$name."',".
					"extend: true,".
					"data: ".json_encode($data, true).
					"}); ";
		}
		*/
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
		
		public function extractUrls($cadena){
		    $regex = '/https?\:\/\/[^\" ]+/i';
		    preg_match_all($regex, $cadena, $partes);
		    return ($partes[0]);
		}
		
		public function embedMultimedia($txt)
		{
			$urls = $this->extractUrls($txt);
			 
			foreach($urls as $url){
				$parse = parse_url($url);
				if(stripos($parse['host'], 'youtube.com') !== false){
					$code = explode('&', explode('v=', $parse['query'])[1])[0];
					$txt = str_replace($url, '<br><a style="position:relative;vertical-align:top;font-size:17px;color:white;" target="_blank" href="'.$url.'"><img style="width:100%;max-width:400px;" class="img-thumbnail" src="https://img.youtube.com/vi/'.$code.'/0.jpg"><div class="glyphicon glyphicon-play" style="position:absolute;top:7px;left:7px;"></div></a><br>', $txt);
				}else{
			    	$txt = str_replace($url, '<br><a target="_blank" href="'.$url.'">[ '.str_replace('www.', '', $parse['host']).' ]</a><br>', $txt);
				}
				$txt = trim($txt);
				if(substr($txt, 0, 4) == "<br>"){
					$txt = substr($txt, 4);
				}
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
		
		public function imageResize($imagen, $width, $height = 0)
		  {
		      $new_width = $width ;
		      $new_height = $height ;
		
		      $info_imagen = getimagesize($imagen);
		      $img_height = $info_imagen[1];
		      $img_width = $info_imagen[0];
		      $tipo_imagen = $info_imagen[2];
		
		      if(!$height || $height=='auto' || $height==0){
		        if($img_height>=$img_width){
		          $new_height = $width;
		          $new_width = 0;
		        }else{
		          $new_width = $width;
		          $new_height = 0;
		        }
		      }
		
		      if($new_width==0){
		          $new_width = round($img_width*$new_height/$img_height,0);
		      }
		      if($new_height==0){
		          $new_height = round($img_height*$new_width/$img_width,0);
		      }
		
		      switch ($tipo_imagen) {
		          case 1:
		              $imagen_nueva = imagecreate($new_width, $new_height);
		              $imagen_vieja = imagecreatefromgif($imagen);
		              imagecopyresampled($imagen_nueva, $imagen_vieja, 0, 0, 0, 0, $new_width, $new_height, $img_width, $img_height);
		              if (!imagegif($imagen_nueva, $imagen)) return false;
		          break;
		
		          case 2:
		              $imagen_nueva = imagecreatetruecolor($new_width, $new_height);
		              $imagen_vieja = imagecreatefromjpeg($imagen);
		              imagecopyresampled($imagen_nueva, $imagen_vieja, 0, 0, 0, 0, $new_width, $new_height, $img_width, $img_height);
		              if (!imagejpeg($imagen_nueva, $imagen)) return false;
		          break;
		
		          case 3:
		              $imagen_nueva = imagecreatetruecolor($new_width, $new_height);
		              $white = imagecolorallocate($imagen_nueva, 255, 255, 255);
		              imagefill($imagen_nueva, 0, 0, $white);
		              $imagen_vieja = imagecreatefrompng($imagen);
		              imagecolortransparent($imagen_vieja, $black);
		              imagecopyresampled($imagen_nueva, $imagen_vieja, 0, 0, 0, 0, $new_width, $new_height, $img_width, $img_height);
		             if (!imagepng($imagen_nueva, $imagen)) return false;
		          break;
		          
		          default:
		          	return false;
		          break;
		      }
		      return true;
		  }
	}
	
	$CB = new Store();
	
	$CB->db->connect();
?>
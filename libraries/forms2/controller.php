<?php session_start();

	error_reporting(E_ERROR | E_WARNING | E_PARSE);
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);


	/*\
	 *  Class Core with common functions
	\*/

	class Controller {
		
		var $config;   //Variables of configs
		var $time_exe; //Count time execute
		var $event;    //Events pre/pos Insert | Update | Delete

		function __construct(){
			
			$this->time_exe = microtime(true);
			$this->config = array();
			$this->searchRoot();
			$this->loadLibrary("autoload.php", false);
			$this->getSESSION();
			$this->getGETAndPOST();
			$this->initializeEvents();
			$this->initializeDB();
		}
		
		
		private function getSESSION(){
			
			$this->setConfig( "SESSION", array( "USER_ID"   => $_SESSION['system57os_iduser'],
												"USER_TIPO" => $_SESSION['system57os_tipo'],
												"USER_URL"  => $_SESSION['system57os_url'] ));
												
			if(!is_numeric($this->getConfig("SESSION","USER_ID")))die('Logout');
		}
		
		public function adminUser(){
			
			if($this->getConfig("SESSION", "USER_TIPO")=="administrador"){
				
				return true;
			}else{
				
				return false;
			}
		}
		
		public function developmentUser(){
			
			if($this->getConfig("SESSION", "USER_TIPO")=="desarrollo"){
				
				return true;
			}else{
				
				return false;
			}
		}
		
		
		private function searchRoot(){
			
			$count=0;
			$max=10;
			$val="";
			while($count<=$max && !file_exists($val."librerias/configbd.php")){
				$val.="../";
				$count++;
			}
			if($count>$max){
				die("It could not find the root directory, librerias/configbd.php is missing");
			}
			$this->setConfig("TBACK", $val);
		}


		private function getGETAndPOST(){
			
			if(!empty($_GET))$this->setConfig("GET", $_GET);
			if(!empty($_POST))$this->setConfig("POST", $_POST);
		}
		
		private function initializeDB(){
			
			$this->db = new Db($this->getConfig("SESSION","USER_ID"));
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
		
		
		public function loadLibrary($file, $tback = true){
			
			if($tback && file_exists($this->getConfig("TBACK").$file)){
				
				include $this->getConfig("TBACK").$file;
			}else if(file_exists($file)){
				
				include $file;
			}else{
				
				return false;
			}
		}
		
		
		public function action($action = "browse"){
			
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
			}else if($val){
				
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
		
		
		public function showCode($cod){
			
			echo "<pre>";
			print_r($cod);
			echo "</pre>";
		}
	}
	
	$ctr = new Controller;
	
	
	$ctr->setConfig(array( "PROGRAM_NAME" => "Codiad_Test_Ventana",
							"PROGRAM_URL" => "programas/Codiad/librerias/workspace/forms2/",
							"PHP_NAME" => "core",
							"TABLENAME" => "forms2_test" ));

	$ctr->setConfig("FIELDS", array("name" => array( "type" => "varchar",
													  "length" => 30,
													  "lang" => array( "ES" => "Nombre" )),
									 "lastname" => array( "type" => "varchar",
									 					  "length" => 30,
									 					  "lang" => array( "ES" => "Apellidos" ))));
									 					  
	$ctr->setConfig("FIELDS_EDIT", array( "name", "lastname" ));
/*
	$ctr->showCode($ctr->getConfig("GET"));
	$ctr->event->preInsert = function($ctr){echo "AAA : ".$ctr->getConfig("PROGRAM_NAME")."<hr>";};
	$ctr->event->preInsert($ctr);
*/	

	$ctr->db->setConfig( array( "host" => "localhost",
								"user" => "sistema",
								"pass" => "EFcDCh8hvWdZqJs2",
								"database" => "sistema",
								"prefix" => "abc_57os_"));
								
	$ctr->db->connect();
	
	echo '<div style="overflow:auto;width:100%;height:100%;">';
	
	$ctr->db->select("nombre");

	$ctr->showCode($ctr->db->get("Clientes"));
	
	echo "LAST SQL : ".$ctr->db->getLastSql()."<hr>";
	
	
	
	
	
	//$ctr->action('insert');
	
	
	
	
	
	/*
	$ctr->db->reset();
	
	$ctr->db->where("id", 2);
	$upd = $ctr->db->update("Clientes", array( "id_usuario" => 5,
										"nombre" => "Georgia",
										"apellidos" => "Saunders" ));
										
										
	$ins = $ctr->db->insert("Clientes", array( "id" => "NULL",
										"id_usuario" => 1,
										"nombre" => "Pepe",
										"apellidos" => "Aguilar",
										"tlf" => 654654654));
									
	echo "Upd : ".$upd."<hr>";
	
	echo "LAST SQL : ".$ctr->db->getLastSql()."<hr>";

	$ctr->db->where("id", 3);
	$del = $ctr->db->delete("Clientes");
	
	echo "Upd : ".$del."<hr>";
	
	echo "LAST SQL : ".$ctr->db->getLastSql()."<hr>";
	*/
	echo 'Execution time : '.$ctr->getTimeExe().' seconds';
	
	echo '</div>';

?>
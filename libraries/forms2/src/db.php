<?php

	class Db {
		
		public $link;
		private $sqlSegura;
		private $tables;
		var $config;
		var $sql;
		
		function __construct($id_usuario){
			
			$this->config = array('utf-8'=>true);
			$this->sql = (object) array();
			$this->sqlSegura = (object) array();
			$this->sqlSegura->permiso = array();
			$this->sqlSegura->id_usuario = $id_usuario;
			$this->sqlSegura->table_system = array('user_program'=>'400',
												'usuario'=>'400',
												'share'=>'700',
												'share_chmod'=>'700',
												'info_version'=>'400',
												'config_value'=>'700',
												'finder_ad'=>'700');
			$this->cogerGrupoTrabajo();
		}
		
		private function asegurar(){
			
			$this->cogerPermisosTabla();
			
			if(!$this->sqlSegura->idUsuarioGrupo){
				
				$this->cogerIdUsuarioGrupo();
			}
		}
		
		private function cogerPermisosTabla(){
			
			foreach($this->tables as $t){
				
				$query = "SELECT permiso FROM ".$this->getConfig("prefix")."permiso_table WHERE tabla='".$t."' AND id_usuario=".$this->sqlSegura->id_usuario." LIMIT 1";
				$this->sqlSegura->permiso[$t] = $this->query($query);
			}
		}
		
		private function cogerGrupoTrabajo(){
			
			$query = "SELECT id_grupo_trabajo FROM ".$this->getConfig("prefix")."usuario WHERE id_usuario=".$this->sqlSegura->id_usuario;
			$this->sqlSegura->idGrupoTrabajo = $this->query($query)['id_grupo_trabajo'];
            $query = "SELECT nombre_grupo FROM ".$this->getConfig("prefix")."grupo_trabajo WHERE id=".$this->sqlSegura->idGrupoTrabajo;
			$this->sqlSegura->nombreGrupoTrabajo=$this->query($query)['nombre_grupo'];
			$this->reset();
		}
		
		private function cogerIdUsuarioGrupo(){
			include "configbd.php";
			$query = "SELECT id_usuario FROM ".$this->getConfig("prefix")."usuario WHERE id_grupo_trabajo=".$this->sqlSegura->idGrupoTrabajo." AND tipo='grupo' LIMIT 1";
			$this->sqlSegura->idUsuarioGrupo = $this->query($query);
		}
		
		public function join($table, $where, $type = false){
			
			if($type){
				
				$this->add("join", " ");
				$where = $this->setPrefix($where);
				$this->add("join", strtoupper($type)." JOIN ".$this->getConfig("prefix").$table." ON ".$where, true);
			}else{
				
				$this->add("join", " ");
				$where = $this->setPrefix($where);
				$this->add("join", "JOIN ".$this->getConfig("prefix").$table." ON ".$where, true);
			}
		}
		
		public function get($table = false){
			
			if($table){
				
				$this->from($table);
			}
			
			if($this->getPart("select")){
				
				$query = "SELECT ".$this->getPart("select");
			}else{
				
				$query = "SELECT *";
			}
			
			$query .= " FROM ".$this->getPart("from");
			
			if($this->getPart("join")){
				
				$query .= " ".$this->getPart("join");
			}
			
			if($this->getPart("where")){
				
				$query .= " WHERE ".$this->getPart("where");
			}
			
			if($this->getPart("group_by")){
				
				$query .= " GROUP BY ".$this->getPart("group_by");
			}
			
			if($this->getPart("order_by")){
				
				$query .= " ORDER BY ".$this->getPart("order_by");
			}
			
			if($this->getPart("limit")){
				
				$query .= " LIMIT ".$this->getPart("limit");
			}
			
			$res = $this->query($query);
			
			if($res){
				
				return $this->getResult();
			}else{
				
				return $this->getConfig("error");
			}
		}
		
		public function delete($table = false){
			
			if(!$this->getPart("where")){
				
				$this->setConfig("error", "WHERE is missing");
				return false;
				
			}else if($table){
				
				$this->from($table);

				$query = "DELETE FROM ".$this->getPart("from");
				
				$query .= " WHERE ".$this->getPart("where");
				
				return $this->query($query);
			}else{
				
				return false;
			}
		}
		
		public function update($table = false, $data = false){
			
			if(!$this->getPart("where")){
				
				$this->setConfig("error", "WHERE is missing");
				return false;
				
			}else if($table && is_array($data)){
				
				$this->tables = array(trim($table));
				$table = $this->getConfig("prefix").trim($table);
				
				foreach($data as $f => $d){
					
					$this->add("values", ", ");
					$this->add("values", $f." = ".$this->setQuotes($d), true);
				}
				
				$query = "UPDATE ".$table." SET ".$this->getPart("values");
				
				$query .= " WHERE ".$this->getPart("where");
				
				return $this->query($query);
			}else{
				
				return false;
			}
		}
		
		public function insert($table = false, $data = false){
						
			if($table && is_array($data)){
				
				$this->tables = array(trim($table));
				$table = $this->getConfig("prefix").trim($table);
				
				foreach($data as $f => $d){
					
					$this->add("fields", ", ");
					$this->add("fields", $f, true);
					$this->add("values", ", ");
					$this->add("values", $this->setQuotes($d), true);
				}
				
				$query = "INSERT INTO ".$table." (".$this->getPart("fields").") VALUES (".$this->getPart("values").")";
				
				return $this->query($query);
			}else{
				
				return true;
			}
		}
		
		public function setQuotes($v = ""){
			
			if($v!="" && !is_numeric($v) && $v!="NULL"){
				if($this->getConfig("utf-8")){
					$v = utf8_encode($v);
				}
				$v = "'".$v."'";
			}
			return $v;
		}
		
		public function getLastSql(){
			
			return $this->getConfig("last_sql");
		}
		
		public function groupBy($field = false){
			
			if($field){
				
				$this->add("group_by", ", ");
				if(strpos($field, ".")){
					$field = $this->getConfig("prefix").trim($field);
				}
				$this->add("group_by", $field, true);
			}
		}
		
		public function orderBy($field = false, $asde = "DESC"){
			
			if($field){
				
				$this->add("order_by", ", ");
				if(strpos($field, ".")){
					$field = $this->getConfig("prefix").trim($field);
				}
				$this->add("order_by", $field." ".strtoupper($asde), true);
			}
		}
		
		public function limit($l = 10, $e = false){
			
			if($e){
				
				$this->sql->limit = $l.", ".$e;
			}else{
				
				$this->sql->limit = $l;
			}
		}
		
		private function setPrefix($var){
			
			$prf = $this->getConfig("prefix");
			$va = explode(" ", $var);
			foreach($va as $v){
				
				if(strpos($v, ".")){
					
					$var = str_replace($v, $prf.$v, $var);
				}
			}
			$var = str_replace($prf.$prf, $prf, $var);
			
			return $var;
		}
		
		public function from($table = false){
			
			if($table){
				
				$this->tables = array();
				
				if(is_array($table)){
					
					foreach($table as $t){
						
						if($t){
							
							$this->add("from", ", ");
							$this->add("from", $this->getConfig("prefix").trim($t), true);
							$this->tables[] = trim($t);
						}
					}
				}else{
					
					if(strpos($table, ",")!==false){
						
						$this->from(explode(",", $table));
					}else{
						
						$this->add("from", ", ");
						$this->add("from", $this->getConfig("prefix").trim($table), true);
						$this->tables[] = $this->getConfig("prefix").trim($table);
					}
				}
			}
		}
		
		public function getPart($v = false){
			
			if($v){
				
				if($this->sql->$v){
					
					return $this->sql->$v;
				}else{
					
					return false;
				}
			}
		}
		
		public function select($fields = false){
			
			if(!$fields){
				
				$this->add("select", ", ");
				$this->add("select", "*", true);
				
			}else if(is_array($fields)){
				
				foreach($fields as $f){
					
					if(strpos($f, ".")){
						$f = $this->getConfig("prefix").trim($f);
					}
					$this->add("select", ", ");
					$this->add("select", trim($f), true);
				}
			}else{
				
				$this->select(explode(",", $fields));
			}
			
		}
		
		public function where($field, $value = false, $opera = "="){
			
			if( $value !== false ){
				
				$this->add("where", " AND ");
				$field = $this->setPrefix($field);
				$this->add("where", $field." ".$opera." ".$value, true);
			}else{
				
				if(is_array( $field )){
					
					foreach($field as $f => $v){
						
						$this->add("where", " AND ");
						$f = $this->setPrefix($f);
						$this->add("where", $f." ".$opera." ".$v, true);
					}
				}else{
					
					$this->add("where", " AND ");
					$field = $this->setPrefix($field);
					$this->add("where", $field, true);
				}
			}
		}
		
		public function or_where($field, $value = false, $opera = "="){
			
			if( $value !== false ){
				
				$this->add("where", " OR ");
				$field = $this->setPrefix($field);
				$this->add("where", $field." ".$opera." ".$value, true);
			}else{
				
				if(is_array( $field )){
					
					foreach($field as $f => $v){
						
						$this->add("where", " OR ");
						$f = $this->setPrefix($f);
						$this->add("where", $f." ".$opera." ".$v, true);
					}
				}else{
					
					$this->add("where", " OR ");
					$field = $this->setPrefix($field);
					$this->add("where", $field, true);
				}
			}
		}
		
		private function add($v, $a = " AND ", $force = false){
			
			if(($this->sql->$v || $force) && !is_array($a)){
				
				$this->sql->$v .= $a;
			}
		}
		
		public function reset(){
			
			$this->sql = (object) array();
			$this->setConfig( "result", false );
			$this->setConfig( "num_rows", 0 );
		}
		
		public function connect(){
			
			$this->link = new mysqli( $this->getConfig(  "host"  ),
									  $this->getConfig(  "user"  ),
									  $this->getConfig(  "pass"  ),
									  $this->getConfig("database") );
			
			if( $this->link->connect_errno ){
				
				$this->setConfig( "connect_errno", $this->link->connect_errno );
				return false;
				
			}else{
				
				return $this->link;
			}
		}
		
		public function query($query){
			
			$this->setConfig("last_sql", $query);
			
			if($this->isAlive()){
				
				if( $result = $this->link->query($query) ){
					
					if($result->num_rows){
						
						$data = array();
						while ($row = $result->fetch_object()){
					        $data[] = $row;
					    }
					    if(count($data) == 1){
					    	$data = $data[0];
					    }
						$this->setConfig( "result", $data );
						$this->setConfig( "num_rows", $result->num_rows );
						$result->close();
					}else{
						
						$this->setConfig( "result", $result );
					}
					
					if($this->link->affected_rows){
						
						$this->setConfig( "affected_rows", $result->affected_rows );
					}
					
					return true;
				}else{
					
					$this->setConfig( "error", $this->link->error);
					return false;
				}
			}else{
				
				$this->setConfig( "error", "Database not connected");
				return false;
			}
		}
		
		public function getResult(){
			
			$result = $this->getConfig( "result" );
		    return $result;
		}
		
		public function isAlive(){
			if( empty($this->link) ){
				
				$this->setConfig( "No connected", $this->link->error );
				return false;
				
			}else if( !$this->link->ping() ){
				
				$this->setConfig( "error", $this->link->error );
				return false;
				
			}else{
				
				return true;
			}
		}
		
		public function clear($query){
		
			$search = array ('@<script[^>]*?>.*?</script>@si',// Remove javascript
							 '@<[\/\!]*?[^<>]*?>@si',         // Remove HTML
							 '@&(quot|#34);@i',               // Replace HTML
							 '@&(amp|#38);@i',                //
							 '@&(lt|#60);@i',                 //
							 '@&(gt|#62);@i',                 //
							 '@&(nbsp|#160);@i',              //
							 '@&(iexcl|#161);@i',             //
							 '@&(cent|#162);@i',              //
							 '@&(pound|#163);@i',             //
							 '@&(copy|#169);@i',              //
							 '@&#(\d+);@e');                  // eval php
			
			$replace = array ('',
							  '',
							  '"',
							  '&',
							  '<',
							  '>',
							  ' ',
							  chr(161),
							  chr(162),
							  chr(163),
							  chr(169),
							  'chr(\1)');
			
			$query = preg_replace($search, $replace, $query);
			
			return $query;
		}
		
		public function numRows(){
			
			if( empty($this->getConfig( "num_rows" )) ){
				
				return 0;
				
			}else{
			
				return 	$this->getConfig( "num_rows" );
			}
		}
		
		public function close(){
			
			return $this->link->close();
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
	}
?>
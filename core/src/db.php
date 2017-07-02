<?php

	class Db {
		
		public $link;
		private $sqlSegura;
		private $tables;
		var $config;
		var $sql;
		
		function __construct($id_usuario){
			
			$this->config = array( 
				'charset'  => 'utf8',
				'anticode' => true
			);
			$this->sql = (object) array();
			$this->sqlSegura = (object) array();
			$this->sqlSegura->permiso = array();
			$this->sqlSegura->id_usuario = $id_usuario;
			$this->sqlSegura->table_system = array( 'user'=>'400',
													'info_version'=>'400',
													'config_value'=>'700');
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
		
		private function cogerIdUsuarioGrupo(){
			include "configbd.php";
			$query = "SELECT id_usuario FROM ".$this->getConfig("prefix")."usuario WHERE id_grupo_trabajo=".$this->sqlSegura->idGrupoTrabajo." AND tipo='grupo' LIMIT 1";
			$this->sqlSegura->idUsuarioGrupo = $this->query($query);
		}
		
		public function join($table, $where, $type = ""){
			
			$this->add("join", " ");
			$where = $this->setPrefix($where);
			$this->add("join", strtoupper($type)." JOIN ".$this->getConfig("prefix").$table." ON ".$where, true);
		}
		
		public function getArray($table = false){
			
			$res = $this->get($table);
			if(is_object($res)) return array($res);
			return $res;
		}
		
		public function get_array($table = false){
			
			return $this->getArray($table);
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
			
			$this->setConfig("num_rows", 0);
			$this->setConfig("result", false);
						
			$res = $this->query($query);
			
			if($this->numRows()){
				
				return $this->getResult();
			}else{
				
				return false;
			}
		}
		
		public function error($er = false)
		{
			if($er)
			{
				$this->setConfig("error", $er);
			}
			else
			{
				return $this->getConfig("error");
			}
		}
		
		public function delete($table = false){
			
			if(!$this->getPart("where")){
				
				$this->error("WHERE is missing");
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
				
				$this->error("WHERE is missing");
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
				
				return false;
			}
		}
		
		public function setQuotes($v = ""){
			
			if($v!="" && !is_numeric($v) && $v!="NULL"){
				while(strpos($v, "\\'")!==false){
					$v = str_replace("\\'", "'", $v);
				}
				$v = str_replace("'", "\\'", $v);
				if($this->getConfig('anticode')){
					$v = str_replace("<", "&lt;", $v);
					$v = str_replace(">", "&gt;", $v);
				}
			}
			return is_numeric($v)? $v: "'".$v."'";
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
			
			$prf = $this->getConfig("db_prefix");
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
				if(!is_numeric($value))
				{
					$value = "'".$value."'";
				}
				$this->add("where", $field." ".$opera." ".$value, true);
			}else{
				
				if(is_array( $field )){
					
					foreach($field as $f => $v){
						
						$this->add("where", " AND ");
						$f = $this->setPrefix($f);
						if(!is_numeric($v))
						{
							$v = "'".$v."'";
						}
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
			
			if( $value !== false )
			{	
				$this->add("where", " OR ");
				$field = $this->setPrefix($field);
				if(!is_numeric($value))
				{
					$value = "'".$value."'";
				}
				$this->add("where", $field." ".$opera." ".$value, true);
			}
			else
			{	
				if(is_array( $field )){
					
					foreach($field as $f => $v)
					{
						$this->add("where", " OR ");
						$f = $this->setPrefix($f);
						if(!is_numeric($v))
						{
							$v = "'".$v."'";
						}
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
		
		public function reset()
		{	
			$this->sql = (object) array();
			$this->setConfig( "result", false );
			$this->setConfig( "num_rows", 0 );
		}
		
		public function connect(){
			$this->link = new mysqli( $this->getConfig(  "db_host"  ),
									  $this->getConfig(  "db_user"  ),
									  $this->getConfig(  "db_pass"  ),
									  $this->getConfig("db_database") );
			
			if( $charset = $this->getConfig('charset') )
			{
				mysqli_set_charset($this->link, $charset);
				$this->link->set_charset($charset);
			}
			
			if( $this->link->connect_errno ){
				
				$this->setConfig( "connect_errno", $this->link->connect_errno );
				return false;
				
			}else{
				
				return $this->link;
			}
		}
		
		public function query($query){
			
			$this->setConfig("last_sql", $query);
			
			if($this->isAlive())
			{	
				if( $result = $this->link->query($query) )
				{	
					if($result->num_rows)
					{	
						$data = array();
						while ($row = $result->fetch_object()){
					        $data[] = $row;
					    }
					    if(count($data) == 1){
					    	$data = $data[0];
					    }
						$this->setConfig( "result", $data );
						$this->setConfig( "num_rows", $result->num_rows );
						mysqli_free_result($result);
					}
					else
					{
						$this->setConfig( "result", 0);
					}
				}
				
				if($this->link->affected_rows)
				{	
					$this->setConfig( "affected_rows", $this->link->affected_rows );
				}
				else
				{
					$this->setConfig( "affected_rows", 0 );
				}
				
				if($this->link->insert_id)
				{
					$this->setConfig( "insert_id", $this->link->insert_id );
				}
				else
				{
					$this->setConfig( "insert_id", 0 );
				}
				
				if($this->link->error)
				{	
					$this->error($this->link->error);
					return false;
				}
				else
				{
					return true;
				}
			}
			else
			{
				$this->error("Database not connected");
				return false;
			}
		}
		
		public function getInsertId(){
			return $this->getConfig("insert_id");
		}
		
		public function getResult(){
			
			$result = $this->getConfig( "result" );
		    return $result;
		}
		
		public function isAlive(){
			if( empty($this->link) ){
				
				$this->error( "No connected ".$this->link->error );
				return false;
				
			}else if( !$this->link->ping() ){
				
				$this->error( $this->link->error );
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
	}
?>
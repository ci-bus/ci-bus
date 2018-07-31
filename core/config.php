<?php

	class Config {
	    
	    public $config = array(
	        
	        // General
	        "default_module" => "ci-bus",
	        "charset" => "UTF-8",
	        "title" => "Ci-bus Framework en Español",
	        "favicon" => array(
	            "type" => "image/png",
	            "href" => "./assets/img/cb_logo.png"),
	        "local_ips" => array('127.0.0.1', '::1'),
	        "auto_min_js" => false,
	        
	        // Data base
	        "db" => array("db_host" => "localhost",
	            "db_user" => "root",
	            "db_pass" => "",
	            "db_database" => "gotorave",
	            "db_prefix" => "",
	            'charset'  => 'utf8',
	            'anticode' => true
	        )
	    );
	    
	    public function setConfig($var, $val = false)
	    {
	        if(is_array($var)){
	            
	            $this->config = array_merge($this->config, $var);
	        }else{
	            
	            $this->config[$var] = $val;
	        }
	    }
	    
	    public function setSubConfig($var, $var2, $val) {
	        if (is_string($var) && is_string($var2)) {
	            if (!$this->config[$var]) {
	                $this->config[$var] = array();
	            }
	            $this->config[$var][$var2] = $val;
	        }
	    }
	    
	    public function getConfig($var, $var2 = false)
	    {
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
	    
	    public function getAllConfigs() {
	        return $this->config;
	    }
	}
	
?>

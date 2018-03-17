<?php
	
	class Send_mail {
		
		public function __construct($CB, $data = array())
		{
			if(!$_SESSION['lang_id']){
				$_SESSION['lang_id'] = 1;
				$this->lang_id = 1;
			}else{
				$this->lang_id = $_SESSION['lang_id'];
			}
			
			$cabeceras = 'From: info@bioculuspro.com' . "\r\n" .
					'Reply-To: bioculuspro@gmail.com' . "\r\n" .
					'X-Mailer: PHP/' . phpversion();
			
			if(mail(/*'info@bioculuspro.com'*/'miguelelinventor@gmail.com', 'BioculusPro - Contacto '.$data['nombre'].' ('.$data['email'].')', $data['nombre']." quiere contactar con tigo
			
Telefono: ".$data['telefono']."
					
Email: ".$data['email']."
					
Mensaje: <h3> ".$data['mensaje']." </h3>

User agent: ".$_SERVER['HTTP_USER_AGENT']."
			")){
				die('true');
			}else{
				die('false');
			}
		}

	}
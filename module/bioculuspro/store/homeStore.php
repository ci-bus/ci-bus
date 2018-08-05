<?php
	
	class Home {
		
		public function __construct($data = array())
		{	
			if(!$_SESSION['lang_id']){
				$_SESSION['lang_id'] = 1;
				$this->lang_id = 1;
			}else{
				$this->lang_id = $_SESSION['lang_id'];
			}
			
			if($data['p']){
				
				$this->select('titulo, texto, color');
				$this->where('id_idioma', $this->lang_id);
				$this->where("url", "%p=".$data['p'], "LIKE");
				$p = $this->getArray('bio_paginas');
				
				$this->parseStore('p', $p);
				
			}
			
			if(is_numeric($_SESSION['id_cliente'])){
				$this->select('estado');
				$this->where('id', $_SESSION['id_cliente']);
				$pedido = $this->get('bio_clientes');
				$this->reset();
				
				if($pedido){
					
					//Checkea si se ha pagado con redsys
					$this->select('estado');
					$this->where(array(
							"tabla" => "bio_clientes",
							"celda" => "id_redsys",
							"id_fila" => $_SESSION['id_cliente']
					));
					$pago = $this->get('redsys');
					$this->reset();
					$pagado = false;
					if($pago->estado == '0000'){
						$pagado = true;
					}
					
					//Si se ha pagado realmente y no esta marcado aun como pagado
					if($pagado && (int) $pedido->estado < 1){
						$this->where('id', $_SESSION['id_cliente']);
						$this->update('bio_clientes', array(
								"estado" => 1
						));
						$this->reset();
						
						//Cogemos contenido de la alerta segun idioma
						$this->select('id, titulo_popup, contenido_popup, email');
						$this->limit(1);
						$this->where('id_idioma', $this->lang_id);
						$alerta_compra = $this->get('bio_alert_compra');
						if(!$alerta_compra) $alerta_compra=false;
						$this->reset();
						
					}else{
						$alerta_compra=0;
					}
				}else{
					$alerta_compra=0;
				}
			}else{
				$alerta_compra = 0;
			}
						
			$this->select('id, imagen, color, texto');
			$this->where('id_idioma', $this->lang_id);
			$cabezera = $this->getArray('bio_cabezera');
			if(!$cabezera) $cabezera=array();
			$this->reset();
			
			$this->select('id, imagen, texto, enlace, color, color2, color3');
			$this->where('id_producto', 0);
			$this->where('id_idioma', $this->lang_id);
			$submenu = $this->getArray('bio_submenu');
			if(!$submenu) $submenu=array();
			$this->reset();
			
			$this->select('id, texto, imagen, precio, but_menu_text1, but_menu_text2, form_button_paypal, texto_compra_trans, texto_compra_contra, text_compra_realizada');
			$this->where('id_idioma', $this->lang_id);
			$productos = $this->getArray('bio_productos');
			for($i=0;$i<count($productos);$i++){
				$productos[$i]->col = 12/count($productos);
			}
			if(!$productos) $productos=array();
			$this->reset();
			$menucolsize = round(4/count($productos));
			
			$this->select('id, texto1, texto2, imagen, texto_cabecera, color');
			$this->where('id_idioma', $this->lang_id);
			$quees = $this->getArray('bio_quees');
			if(!$quees) $quees=array();
			$this->reset();
			
			$this->select('id, imagen, color, texto');
			$this->where('id_idioma', $this->lang_id);
			$aunmas = $this->getArray('bio_aunmas');
			if(!$aunmas) $aunmas=array();
			$this->reset();
			
			$this->select('id,texto1, texto2');
			$this->where('id_producto', 0);
			$this->where('id_idioma', $this->lang_id);
			$preguntas = $this->getArray('bio_preguntas');
			if(!$preguntas) $preguntas=array();
			$this->reset();
			
			$this->select('id, texto, color');
			$this->where('id_idioma', $this->lang_id);
			$pie = $this->getArray('bio_piedepagina');
			if(!$pie) $pie=array();
			$this->reset();
			
			$this->select('aunmas_color, preguntas_color,productos_color');
			$colores = $this->getArray('bio_back_colors');
			if(!$colores) $colores=array();
			$this->reset();
			
			
			$this->parseStore('home', array('colores' => $colores, 'alerta_compra' => $alerta_compra, 'menucol' => $menucolsize, 'cabezera' => $cabezera, 'submenu' => $submenu, 'productos' => $productos, 'quees' => $quees, 'aunmas' => $aunmas, 'preguntas' => $preguntas, 'piedepagina' => $pie));
		
		}
	}
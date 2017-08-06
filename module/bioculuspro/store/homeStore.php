<?php
	
	class Home {
		
		public function __construct($CB, $data = array())
		{	
			if(!$_SESSION['lang_id']){
				$_SESSION['lang_id'] = 1;
				$this->lang_id = 1;
			}else{
				$this->lang_id = $_SESSION['lang_id'];
			}
			
			if($data['p']){
				
				$CB->db->select('titulo, texto, color');
				$CB->db->where('id_idioma', $this->lang_id);
				$CB->db->where("url", "%p=".$data['p'], "LIKE");
				$p = $CB->db->get_array('bio_paginas');
				
				$CB->parseStore('p', $p);
				
			}
			
			if(is_numeric($_SESSION['id_cliente'])){
				$CB->db->select('estado');
				$CB->db->where('id', $_SESSION['id_cliente']);
				$pedido = $CB->db->get('bio_clientes');
				$CB->db->reset();
				
				if($pedido){
					
					//Checkea si se ha pagado con redsys
					$CB->db->select('estado');
					$CB->db->where(array(
							"tabla" => "bio_clientes",
							"celda" => "id_redsys",
							"id_fila" => $_SESSION['id_cliente']
					));
					$pago = $CB->db->get('redsys');
					$CB->db->reset();
					$pagado = false;
					if($pago->estado == '0000'){
						$pagado = true;
					}
					
					//Si se ha pagado realmente y no esta marcado aun como pagado
					if($pagado && (int) $pedido->estado < 1){
						$CB->db->where('id', $_SESSION['id_cliente']);
						$CB->db->update('bio_clientes', array(
								"estado" => 1
						));
						$CB->db->reset();
						
						//Cogemos contenido de la alerta segun idioma
						$CB->db->select('id, titulo_popup, contenido_popup, email');
						$CB->db->limit(1);
						$CB->db->where('id_idioma', $this->lang_id);
						$alerta_compra = $CB->db->get('bio_alert_compra');
						if(!$alerta_compra) $alerta_compra=false;
						$CB->db->reset();
						
					}else{
						$alerta_compra=0;
					}
				}else{
					$alerta_compra=0;
				}
			}else{
				$alerta_compra = 0;
			}
						
			$CB->db->select('id, imagen, color, texto');
			$CB->db->where('id_idioma', $this->lang_id);
			$cabezera = $CB->db->get_array('bio_cabezera');
			if(!$cabezera) $cabezera=array();
			$CB->db->reset();
			
			$CB->db->select('id, imagen, texto, enlace, color, color2, color3');
			$CB->db->where('id_producto', 0);
			$CB->db->where('id_idioma', $this->lang_id);
			$submenu = $CB->db->get_array('bio_submenu');
			if(!$submenu) $submenu=array();
			$CB->db->reset();
			
			$CB->db->select('id, texto, imagen, precio, but_menu_text1, but_menu_text2, form_button_paypal, texto_compra_trans, texto_compra_contra, text_compra_realizada');
			$CB->db->where('id_idioma', $this->lang_id);
			$productos = $CB->db->get_array('bio_productos');
			for($i=0;$i<count($productos);$i++){
				$productos[$i]->col = 12/count($productos);
			}
			if(!$productos) $productos=array();
			$CB->db->reset();
			$menucolsize = round(4/count($productos));
			
			$CB->db->select('id, texto1, texto2, imagen, texto_cabecera, color');
			$CB->db->where('id_idioma', $this->lang_id);
			$quees = $CB->db->get_array('bio_quees');
			if(!$quees) $quees=array();
			$CB->db->reset();
			
			$CB->db->select('id, imagen, color, texto');
			$CB->db->where('id_idioma', $this->lang_id);
			$aunmas = $CB->db->get_array('bio_aunmas');
			if(!$aunmas) $aunmas=array();
			$CB->db->reset();
			
			$CB->db->select('id,texto1, texto2');
			$CB->db->where('id_producto', 0);
			$CB->db->where('id_idioma', $this->lang_id);
			$preguntas = $CB->db->get_array('bio_preguntas');
			if(!$preguntas) $preguntas=array();
			$CB->db->reset();
			
			$CB->db->select('id, texto, color');
			$CB->db->where('id_idioma', $this->lang_id);
			$pie = $CB->db->get_array('bio_piedepagina');
			if(!$pie) $pie=array();
			$CB->db->reset();
			
			$CB->db->select('aunmas_color, preguntas_color,productos_color');
			$colores = $CB->db->get_array('bio_back_colors');
			if(!$colores) $colores=array();
			$CB->db->reset();
			
			
			$CB->parseStore('home', array('colores' => $colores, 'alerta_compra' => $alerta_compra, 'menucol' => $menucolsize, 'cabezera' => $cabezera, 'submenu' => $submenu, 'productos' => $productos, 'quees' => $quees, 'aunmas' => $aunmas, 'preguntas' => $preguntas, 'piedepagina' => $pie));
		
		}
	}
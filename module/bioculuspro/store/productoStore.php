<?php
	
	class Producto {
		
		public function __construct($data = array())
		{
			if(!$_SESSION['lang_id']){
				$_SESSION['lang_id'] = 1;
				$this->lang_id = 1;
			}else{
				$this->lang_id = $_SESSION['lang_id'];
			}
			
			$this->select('id, imagen, texto, precio, but_menu_text1, but_menu_text2, landing_html, but_buy_text, video_titulo, video_html, whatis_titulo, whatis_html, whatis_but_buy_text, install_imagen, install_html, install_titulo, caract_titulo, color_back_landing, color_back_video, color_text_video, color_back_install, color_back_caract, color_back_question, color_back_footer, form_button_paypal, texto_compra_trans, texto_compra_contra, text_compra_realizada');
			$this->where('id', $data['id']);
			$this->where('id_idioma', $this->lang_id);
			$productos = $this->get_array('bio_productos');
			if(!$productos)$productos=array();
			$this->reset();
			
			$this->select('id, imagen, texto, enlace, color, color2, color3');
			$this->where('id_producto', $data['id']);
			$this->where('id_idioma', $this->lang_id);
			$submenu = $this->get_array('bio_submenu');
			if(!$submenu) $submenu=array();
			$this->reset();
			
			$this->select('id, titulo, imagen');
			$this->where('id_producto', $data['id']);
			$imagenes = $this->get_array('bio_product_images');
			if(!$imagenes) $imagenes=array();
			$this->reset();
			
			$this->select('id, texto1, texto2, imagen, texto_cabecera, color');
			$this->where('id_producto', $data['id']);
			$this->where('id_idioma', $this->lang_id);
			$quees = $this->get_array('bio_quees');
			if(!$quees) $quees=array();
			$this->reset();
			
			$this->select('id, imagen, color, texto');
			$this->where('id_producto', $data['id']);
			$this->where('id_idioma', $this->lang_id);
			$aunmas = $this->get_array('bio_product_aunmas');
			if(!$aunmas) $aunmas=array();
			$this->reset();
			
			$this->select('id,texto1, texto2');
			$this->where('id_producto', $data['id']);
			$this->where('id_idioma', $this->lang_id);
			$preguntas = $this->get_array('bio_preguntas');
			if(!$preguntas) $preguntas=array();
			$this->reset();
			
			$this->select('id, texto, color');
			$this->where('id_idioma', $this->lang_id);
			$pie = $this->get_array('bio_piedepagina');
			if(!$pie) $pie=array();
			$this->reset();
			
			
			$this->parseStore('producto', array('productos' => $productos, 'submenu' => $submenu, 'imagenes' => $imagenes, 'quees' => $quees, 'caracteristicas' => $aunmas, 'preguntas' => $preguntas, 'piedepagina' => $pie));
		}

	}
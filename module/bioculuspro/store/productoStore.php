<?php
	
	class Producto {
		
		public function __construct($CB, $data = array())
		{
			if(!$_SESSION['lang_id']){
				$_SESSION['lang_id'] = 1;
				$this->lang_id = 1;
			}else{
				$this->lang_id = $_SESSION['lang_id'];
			}
			
			$CB->db->select('id, imagen, texto, precio, but_menu_text1, but_menu_text2, landing_html, but_buy_text, video_titulo, video_html, whatis_titulo, whatis_html, whatis_but_buy_text, install_imagen, install_html, install_titulo, caract_titulo, color_back_landing, color_back_video, color_text_video, color_back_install, color_back_caract, color_back_question, color_back_footer, form_button_paypal, texto_compra_trans, texto_compra_contra, text_compra_realizada');
			$CB->db->where('id', $data['id']);
			$CB->db->where('id_idioma', $this->lang_id);
			$productos = $CB->db->get_array('bio_productos');
			if(!$productos)$productos=array();
			$CB->db->reset();
			
			$CB->db->select('id, imagen, texto, enlace, color, color2, color3');
			$CB->db->where('id_producto', $data['id']);
			$CB->db->where('id_idioma', $this->lang_id);
			$submenu = $CB->db->get_array('bio_submenu');
			if(!$submenu) $submenu=array();
			$CB->db->reset();
			
			$CB->db->select('id, titulo, imagen');
			$CB->db->where('id_producto', $data['id']);
			$imagenes = $CB->db->get_array('bio_product_images');
			if(!$imagenes) $imagenes=array();
			$CB->db->reset();
			
			$CB->db->select('id, texto1, texto2, imagen, texto_cabecera, color');
			$CB->db->where('id_producto', $data['id']);
			$CB->db->where('id_idioma', $this->lang_id);
			$quees = $CB->db->get_array('bio_quees');
			if(!$quees) $quees=array();
			$CB->db->reset();
			
			$CB->db->select('id, imagen, color, texto');
			$CB->db->where('id_producto', $data['id']);
			$CB->db->where('id_idioma', $this->lang_id);
			$aunmas = $CB->db->get_array('bio_product_aunmas');
			if(!$aunmas) $aunmas=array();
			$CB->db->reset();
			
			$CB->db->select('id,texto1, texto2');
			$CB->db->where('id_producto', $data['id']);
			$CB->db->where('id_idioma', $this->lang_id);
			$preguntas = $CB->db->get_array('bio_preguntas');
			if(!$preguntas) $preguntas=array();
			$CB->db->reset();
			
			$CB->db->select('id, texto, color');
			$CB->db->where('id_idioma', $this->lang_id);
			$pie = $CB->db->get_array('bio_piedepagina');
			if(!$pie) $pie=array();
			$CB->db->reset();
			
			
			$CB->parseStore('producto', array('productos' => $productos, 'submenu' => $submenu, 'imagenes' => $imagenes, 'quees' => $quees, 'caracteristicas' => $aunmas, 'preguntas' => $preguntas, 'piedepagina' => $pie));
		}

	}
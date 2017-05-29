<?php
	
	class Producto {
		
		public function __construct($CB, $data = array())
		{			
			$CB->db->select('id, imagen, texto, precio, but_menu_text1, but_menu_text2, landing_html, but_buy_text, video_titulo, video_html, whatis_titulo, whatis_html, whatis_but_buy_text, install_imagen, install_html, install_titulo, caract_titulo, color_back_landing, color_back_video, color_text_video, color_back_install, color_back_caract, color_back_question, color_back_footer');
			$productos = $CB->db->get_array('bio_productos');
			if(!$productos)$productos=array();
			$CB->db->reset();
			
			$CB->db->select('id, imagen, texto, enlace, color, color2, color3');
			$submenu = $CB->db->get_array('bio_submenu');
			if(!$submenu) $submenu=array();
			$CB->db->reset();
			
			$CB->db->select('id, titulo, imagen,');
			$imagenes = $CB->db->get_array('bio_product_images');
			if(!$imagenes) $imagenes=array();
			$CB->db->reset();
			
			$CB->db->select('id, texto1, texto2, imagen, texto_cabecera, color');
			$quees = $CB->db->get_array('bio_quees');
			if(!$quees) $quees=array();
			$CB->db->reset();
			
			$CB->db->select('id, imagen, color, texto');
			$aunmas = $CB->db->get_array('bio_product_aunmas');
			if(!$aunmas) $aunmas=array();
			$CB->db->reset();
			
			$CB->db->select('id,texto1, texto2');
			$preguntas = $CB->db->get_array('bio_preguntas');
			if(!$preguntas) $preguntas=array();
			$CB->db->reset();
			
			$CB->db->select('id, texto');
			$pie = $CB->db->get_array('bio_piedepagina');
			if(!$pie) $pie=array();
			$CB->db->reset();
			
			
			$CB->parseStore('producto', array('productos' => $productos, 'submenu' => $submenu, 'imagenes' => $imagenes, 'quees' => $quees, 'aunmas' => $aunmas, 'preguntas' => $preguntas, 'piedepagina' => $pie));
		}

	}
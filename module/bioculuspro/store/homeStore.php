<?php
	
	class Home {
		
		public function __construct($CB, $data = array())
		{			
			$CB->db->select('id, imagen, color, texto');
			$cabezera = $CB->db->get_array('bio_cabezera');
			if(!$cabezera) $cabezera=array();
			$CB->db->reset();
			
			$CB->db->select('id, imagen, texto, enlace, color, color2, color3');
			$submenu = $CB->db->get_array('bio_submenu');
			if(!$submenu) $submenu=array();
			$CB->db->reset();
			
			$CB->db->select('id, texto, imagen, precio, but_menu_text1, but_menu_text2');
			$productos = $CB->db->get_array('bio_productos');
			if(!$productos) $productos=array();
			$CB->db->reset();
			$menucolsize = round(6/count($productos));
			
			$CB->db->select('id, texto1, texto2, imagen, texto_cabecera, color');
			$quees = $CB->db->get_array('bio_quees');
			if(!$quees) $quees=array();
			$CB->db->reset();
			
			$CB->db->select('id, imagen, color, texto');
			$aunmas = $CB->db->get_array('bio_aunmas');
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
			
			
			$CB->parseStore('home', array('menucol' => $menucolsize, 'cabezera' => $cabezera, 'submenu' => $submenu, 'productos' => $productos, 'quees' => $quees, 'aunmas' => $aunmas, 'preguntas' => $preguntas, 'piedepagina' => $pie));
		}

	}
<?php 
    class main extends Store {
        function __construct($data) {
            $action = $data['action'];
            $this->$action($data['data']);
        }
        function get_texts ($data) {
            $this->parseStore('texts', array(
                'title' => 'Comparativa de productos',
                'create_new' => 'Crear nuevo',
                'search' => 'Buscar...'
            ));
        }
        function get_products ($search) {
            $this->select('id, product, shop, price, quality');
			if ($search) {
                $this->where('product COLLATE UTF8_GENERAL_CI', '%'.$search.'%', 'like');
                $this->orWhere('shop COLLATE UTF8_GENERAL_CI', '%'.$search.'%', 'like');
            }
            $this->orderBy('id', 'desc');
            $this->limit(10);
			$res = $this->getArray('compare_shop');
			if(!$res) $res=array();
            $this->parseStore('products', $res);
        }

        function delete_product ($id) {
            $this->where('id', $id);
            if ($this->delete('compare_shop')) {
                $this->reset();
                $this->get_products();
            }
        }

        function add_list ($id) {
            $res = $this->insert('compare_shop_list', array(
                'id_product' => $id
            ));

            if ($res) {
                $this->load_list();
            } else {
                echo $this->error();
            }
        }

        function load_list () {
            $this->select('compare_shop_list.id as id, product, shop, price, quality');
            $this->from('compare_shop_list');
			$this->join('compare_shop', 'compare_shop_list.id_product = compare_shop.id');
            $this->orderBy('compare_shop_list.id', 'asc');
            $res = $this->getArray();
            $this->parseStore('products_list', array('products' => $res));
        }

        function delete_list ($id) {
            $this->where('id', $id);
            if ($this->delete('compare_shop_list')) {
                $this->reset();
                $this->load_list();
            }
        }
    }
?>
            	
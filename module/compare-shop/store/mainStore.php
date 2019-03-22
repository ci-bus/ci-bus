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
    }
?>
            	
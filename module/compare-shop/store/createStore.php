<?php 
    class create extends Store {
        function __construct($data) {
            $this->create($data);
        }

        function create($data) {
            if (is_numeric($data['id'])) {
                $this->where('id', $data['id']);
				$res = $this->update('compare_shop', array(
                    'product' => $data['product'],
                    'shop' => $data['shop'],
                    'price' => $data['price'],
                    'quality' => $data['quality']
                ));
            } else {
                $res = $this->insert('compare_shop', array(
                    'product' => $data['product'],
                    'shop' => $data['shop'],
                    'price' => $data['price'],
                    'quality' => $data['quality']
                ));
            }
            
            if ($res) {
                $this->reset();
                $this->get_products($data['search']);
            } else {
                echo $this->error();
            }
        }

        function get_products ($search) {
            $this->select('id, product, shop, price, quality');
			if ($search) {
                $this->where('product COLLATE UTF8_GENERAL_CI', '%'.$search.'%', 'like');
                $this->orWhere('shop COLLATE UTF8_GENERAL_CI', '%'.$search.'%', 'like');
            } else {
                $this->limit(10);
            }
            $this->orderBy('id', 'desc');
            $res = $this->getArray('compare_shop');
			if(!$res) $res=array();
            $this->parseStore('products', $res);
        }
    }
?>
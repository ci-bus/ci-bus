<?php 
    class main extends Store {
        function __construct($data) {
            $action = $data['action'];
            $this->$action($data['data']);
        }
        function get_texts ($data) {
            $this->parseStore('texts', array(
                'main' => array(
            	    'title' => 'Main view webtesting project'
            	)
            ));
        }
    }
?>
            	
<?php 
    class dev extends Store {
        function __construct($data) {
            $action = $data['action'];
            $this->$action($data['data']);
        }
        
        public function create_folders ($data) {
            $project = $data['name'];
            $module_folder = __DIR__ . '/../../';
            $created = 0;
            if (!is_dir($module_folder . $project)) {
                mkdir($module_folder . $project);
                $created ++;
            }
            if (!is_dir($module_folder . $project . '/controller')) {
                mkdir($module_folder . $project . '/controller');
                $created ++;
            }
            if (!is_dir($module_folder . $project . '/view')) {
                mkdir($module_folder . $project . '/view');
                $created ++;
            }
            if (!is_dir($module_folder . $project . '/view/component')) {
                mkdir($module_folder . $project . '/view/component');
                $created ++;
            }
            if (!is_dir($module_folder . $project . '/store')) {
                mkdir($module_folder . $project . '/store');
                $created ++;
            }
            if (!$created) {
                echo "cb.ctr('devtools', 'alert', 'Project current exists');";
            } else {
                echo "cb.ctr('devtools', 'alert', 'Created " . $created . " folders');";
            }
        }
    }
?>
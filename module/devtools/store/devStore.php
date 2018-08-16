<?php 
    class dev extends Store {
        function __construct($data) {
            $action = $data['action'];
            $this->$action($data['data']);
        }
        
        public function create_folders ($data) {
            $project = $data['name'];
            $module_folder = __DIR__ . '/../../';
            
            if (!is_dir($module_folder . $project)) {
                if (mkdir($module_folder . $project)) {
                    $created = 'Created '.$project.' folder<br>';
                } else {
                    $created = '<span style="color:red;">Fail creating '.$project.' folder</span><br>';
                }
                
            } else {
                $created = 'Project folder current exists<br>';
            }
            if (!is_dir($module_folder . $project . '/controller')) {
                if (mkdir($module_folder . $project . '/controller')){
                    $created .= 'Created '.$project.'/controller folder<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating '.$project.'/controller folder</span><br>';
                }
            }
            if (!is_dir($module_folder . $project . '/view')) {
                if (mkdir($module_folder . $project . '/view')) {
                    $created .= 'Created '.$project.'/view folder<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating '.$project.'/view folder</span><br>';
                }
            }
            if (!is_dir($module_folder . $project . '/view/component')) {
                if (mkdir($module_folder . $project . '/view/component')) {
                    $created .= 'Created '.$project.'/view/component folder<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating '.$project.'/view/component folder</span><br>';
                }
            }
            if (!is_dir($module_folder . $project . '/store')) {
                if (mkdir($module_folder . $project . '/store')) {
                    $created .= 'Created '.$project.'/store folder<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating '.$project.'/store folder</span><br>';
                }
            }
            
            echo "cb.ctr('devtools', 'alert', ['" . $created . "', 'success']);";
        }
        
        public function create_files ($data) {
            $project = $data['name'];
            $module_folder = __DIR__ . '/../../';
            $created = '';
            
            if (!file_exists($module_folder . $project . '/controller/' . $project . '.js')) {
                if (file_put_contents($module_folder . $project . '/controller/' . $project . '.js', "cb.define({
    xtype: 'controller',
    name: '".$project."',
    
    onload: function () {
        alert('Controller loaded!')
        cb.loadAll([
            ['view', 'common', 'base'],
            ['store', '".$project."', 'main', {action: 'get_texts'}],
            ['view', '".$project."', 'main']
        ], function () {
            
        });
    }
});")) {
                    $created .= 'Created ' . $project . '/controller/' . $project . '.js<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating ' . $project . '/controller/' . $project . '.js</span><br>';
                }
            }
            
            if (!file_exists($module_folder . $project . '/view/mainView.js')) {
                if (file_put_contents($module_folder . $project . '/view/mainView.js', "cb.define({
    xtype: 'view',
    name: 'main',
    renderTo: '#content',
    onRender: function () {
        alert('Main view rendered!');
    },
    items: [{
        xtype: 'container',
        store: 'texts',
        field: 'main',
        items: [{
            xtype: 'h3',
            text: '{title}'
        }]
    }]
});")) {
                    $created .= 'Created ' . $project . '/view/mainView.js<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating ' . $project . '/view/mainView.js</span><br>';
                }
            }
            
            if (!file_exists($module_folder . $project . '/store/mainStore.php')) {
            	if (file_put_contents($module_folder . $project . '/store/mainStore.php', "<?php 
    class main extends Store {
        function __construct(\$data) {
            \$action = \$data['action'];
            \$this->\$action(\$data['data']);
        }
        function get_texts (\$data) {
            \$this->parseStore('texts', array(
                'main' => array(
            	    'title' => 'Main view ".$project." project'
            	)
            ));
        }
    }
?>
            	")) {
                    $created .= 'Created ' . $project . '/store/mainStore.php<br>';
            	} else {
            		$created .= '<span style="color:red;">Fail creating ' . $project . '/store/mainStore.php</span><br>';
            	}
            }
            
            if ($created != '') {
                echo "cb.ctr('devtools', 'alert', ['" . $created . "', 'success']);";
            } else {
                echo "cb.ctr('devtools', 'alert', ['No file created', 'warning']);";
            }
        }
    }
?>
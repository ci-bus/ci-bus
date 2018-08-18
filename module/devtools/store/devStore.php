<?php 
    class dev extends Store {
        function __construct($data) {
            $server_ip = $_SERVER['SERVER_ADDR'];
            foreach($this->getConfig('local_ips') as $conf_ip) {
                if ($conf_ip == $server_ip) {
                    $action = $data['action'];
                    $this->$action($data['data']);
                    return;
                }
            }
            echo "cb.ctr('devtools', 'alert', ['Only local access', 'danger']);";
        }
        
        private function get_list_modules () {
            $modules = array_diff(scandir(__DIR__ . '/../../'), array('..', '.'));
            $res = array();
            foreach($modules as $mod) {
                if (is_dir(__DIR__ . '/../../'.$mod)) {
                    array_push($res, array(
                        'name' => $mod,
                        'files' => $this->scanFiles(__DIR__ . '/../../'.$mod.'/')
                    ));
                }
            }
            $this->parseStore('modules', $res);
        }
        
        private function get_list_files () {
            $files = $this->scanFiles(__DIR__ . '/../../');
            $this->parseStore('list_files', $files);
        }
        
        private function create_folders ($data) {
            $module = $data['name'];
            $modules_folder = __DIR__ . '/../../';
            
            if (!is_dir($modules_folder . $module)) {
                if (mkdir($modules_folder . $module)) {
                    $created = 'Created '.$module.' folder<br>';
                } else {
                    $created = '<span style="color:red;">Fail creating '.$module.' folder</span><br>';
                }
                
            } else {
                $created = 'Project folder current exists<br>';
            }
            if (!is_dir($modules_folder . $module . '/controller')) {
                if (mkdir($modules_folder . $module . '/controller')){
                    $created .= 'Created '.$module.'/controller folder<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating '.$module.'/controller folder</span><br>';
                }
            }
            if (!is_dir($modules_folder . $module . '/view')) {
                if (mkdir($modules_folder . $module . '/view')) {
                    $created .= 'Created '.$module.'/view folder<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating '.$module.'/view folder</span><br>';
                }
            }
            if (!is_dir($modules_folder . $module . '/view/component')) {
                if (mkdir($modules_folder . $module . '/view/component')) {
                    $created .= 'Created '.$module.'/view/component folder<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating '.$module.'/view/component folder</span><br>';
                }
            }
            if (!is_dir($modules_folder . $module . '/store')) {
                if (mkdir($modules_folder . $module . '/store')) {
                    $created .= 'Created '.$module.'/store folder<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating '.$module.'/store folder</span><br>';
                }
            }
            $this->get_list_modules();
            echo "cb.ctr('devtools', 'alert', ['" . $created . "', 'default']);";
        }
        
        private function create_file ($data) {
            $modules_folder = __DIR__ . '/../../';
            $module = $data['module'];
            $type = $data['type'];
            $name = $name['name'];
            $created = '';
            
            if ($type == 'view' || $type == 'component') {
                if (!is_dir($modules_folder . $module.'/view')) {
                    if (mkdir($modules_folder . $module.'/view')) {
                        $created = 'Created '.$module.'/view folder<br>';
                    } else {
                        $created = '<span style="color:red;">Fail creating '.$module.'/view folder</span><br>';
                    }
                }
            }
            // View //
            if ($type == 'view') {
                if (!file_exists($modules_folder . $module .'/view/'.$name.'View.js')) {
                    if (file_put_contents($modules_folder . $module .'/view/'.$name.'View.js', "cb.define({
    xtype: 'view',
    name: '".$name."',
    renderTo: 'body',
    items: [{
        xtype: 'container'
    }]
});")) {
                        $created .= 'Created '.$module.'/view/'.$name.'View.js<br>';
                    } else {
                        $created .= '<span style="color:red;">Fail creating '.$module.'/view/'.$name.'View.js</span><br>';
                    }
                } else {
                    $created .= '<span style="color:red;">The view '.$name.'View.js current exists</span><br>';
                }
            // Component //
            } else if ($type == 'component') {
                if (!is_dir($modules_folder . $module.'/view/component')) {
                    if (mkdir($modules_folder . $module.'/view/component')) {
                        $created = 'Created '.$module.'/view/component folder<br>';
                    } else {
                        $created = '<span style="color:red;">Fail creating '.$module.'/view/component folder</span><br>';
                    }
                }
                if (!file_exists($modules_folder . $module .'/view/component/'.$name.'Component.js')) {
                    if (file_put_contents($modules_folder . $module .'/view/component/'.$name.'Component.js', "cb.define({
    xtype: 'component',
    name: '".$name."',
    items: [{
        xtype: 'container'
    }]
});")) {
                $created .= 'Created '.$module.'/view/component/'.$name.'Component.js<br>';
                    } else {
                        $created .= '<span style="color:red;">Fail creating '.$module.'/view/component/'.$name.'Component.js</span><br>';
                    }
                } else {
                    $created .= '<span style="color:red;">The component '.$name.'Component.js current exists</span><br>';
                }
            // Controller //
            } else if ($type == 'controller') {
                if (!is_dir($modules_folder . $module.'/controller')) {
                    if (mkdir($modules_folder . $module.'/controller')) {
                        $created = 'Created '.$module.'/controller folder<br>';
                    } else {
                        $created = '<span style="color:red;">Fail creating '.$module.'/controller folder</span><br>';
                    }
                }
                if (!file_exists($modules_folder . $module . '/controller/' . $name . '.js')) {
                    if (file_put_contents($modules_folder . $module . '/controller/' . $name . '.js', "cb.define({
    xtype: 'controller',
    name: '".$name."',
                
    onload: function () {
        
    }
});")) {
                $created .= 'Created ' . $module . '/controller/' . $name . '.js<br>';
                    } else {
                        $created .= '<span style="color:red;">Fail creating ' . $module . '/controller/' . $name . '.js</span><br>';
                    }
                } else {
                    $created .= '<span style="color:red;">The controller '.$name.'.js current exists</span><br>';
                }
            // Store //
            } else if ($type == 'store') {
                if (!is_dir($modules_folder . $module.'/store')) {
                    if (mkdir($modules_folder . $module.'/store')) {
                        $created = 'Created '.$module.'/store folder<br>';
                    } else {
                        $created = '<span style="color:red;">Fail creating '.$module.'/store folder</span><br>';
                    }
                }
                if (!file_exists($modules_folder . $module . '/store/'.$name.'Store.php')) {
                    if (file_put_contents($modules_folder . $module . '/store/'.$name.'Store.php', "<?php
    class '.$name.' extends Store {
        function __construct(\$data) {
        
        }
    }
?>
            	")) {
                        $created .= 'Created ' . $module . '/store/'.$name.'Store.php<br>';
                    } else {
                        $created .= '<span style="color:red;">Fail creating ' . $module . '/store/'.$name.'Store.php</span><br>';
                    }
                } else {
                    $created .= '<span style="color:red;">The store '.$name.'Store.php current exists</span><br>';
                }
            }
            
            echo "cb.ctr('devtools', 'alert', ['" . $created . "', 'default']);";
        }
        
        private function create_files ($data) {
            $module = $data['name'];
            $modules_folder = __DIR__ . '/../../';
            $created = '';
            
            if (!file_exists($modules_folder . $module . '/controller/' . $module . '.js')) {
                if (file_put_contents($modules_folder . $module . '/controller/' . $module . '.js', "cb.define({
    xtype: 'controller',
    name: '".$module."',
    
    onload: function () {
        alert('Controller loaded!')
        cb.loadAll([
            ['view', 'common', 'base'],
            ['store', '".$module."', 'main', {action: 'get_texts'}],
            ['view', '".$module."', 'main']
        ], function () {
            
        });
    }
});")) {
                    $created .= 'Created ' . $module . '/controller/' . $module . '.js<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating ' . $module . '/controller/' . $module . '.js</span><br>';
                }
            }
            
            if (!file_exists($modules_folder . $module . '/view/mainView.js')) {
                if (file_put_contents($modules_folder . $module . '/view/mainView.js', "cb.define({
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
                    $created .= 'Created ' . $module . '/view/mainView.js<br>';
                } else {
                    $created .= '<span style="color:red;">Fail creating ' . $module . '/view/mainView.js</span><br>';
                }
            }
            
            if (!file_exists($modules_folder . $module . '/store/mainStore.php')) {
            	if (file_put_contents($modules_folder . $module . '/store/mainStore.php', "<?php 
    class main extends Store {
        function __construct(\$data) {
            \$action = \$data['action'];
            \$this->\$action(\$data['data']);
        }
        function get_texts (\$data) {
            \$this->parseStore('texts', array(
                'main' => array(
            	    'title' => 'Main view ".$module." project'
            	)
            ));
        }
    }
?>
            	")) {
                    $created .= 'Created ' . $module . '/store/mainStore.php<br>';
            	} else {
            		$created .= '<span style="color:red;">Fail creating ' . $module . '/store/mainStore.php</span><br>';
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
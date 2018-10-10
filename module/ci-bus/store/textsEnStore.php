<?php 

	class TextsEn extends Store {
			
		public function __construct($data = array())
		{
		    
		    $this->parseStore('texts', array(
		        'general' => array (
		            'tx1' => 'Test code',
		            'tx2' => 'Select',
		            'tx3' => 'Methods'
		        ),
		        'menu' => array (
		            'tx0' => 'Documentation',
		            'tx1' => 'Create module',
		            'tx2' => 'Controllers',
		            'tx3' => 'Views',
		            'tx4' => 'Items',
		            'tx5' => 'Ci-bus Methods',
		            'tx6' => 'Properties items',
		            'tx7' => 'Store PHP y JavaScript',
		            'tx8' => 'Installation'
			    ),
		        'menu-items' => array (
		            array(
		                'tx' => 'Button',
		                'st' => '#item-button'
		            ),
		            array(
		                'tx' => 'Navigation bar',
		                'st' => '#item-navbar'
		            ),
		            array(
		                'tx' => 'Deployable',
		                'st' => '#item-dropdown'
		            ),
		            array(
		                'tx' => 'Container',
		                'st' => '#item-container'
		            ),
		            array(
		                'tx' => 'Progress Bar',
		                'st' => '#item-progress'
		            ),
		            array(
		                'tx' => 'Table',
		                'st' => '#item-table'
		            ),
		            array(
		                'tx' => 'Icon',
		                'st' => '#item-icon'
		            ),
		            array(
		                'tx' => 'Thumbnail',
		                'st' => '#item-thumbnail'
		            ),
		            array(
		                'tx' => 'Alert',
		                'st' => '#item-alert'
		            ),
		            array(
		                'tx' => 'Badge',
		                'st' => '#item-badge'
		            ),
		            array(
		                'tx' => 'Group',
		                'st' => '#item-group'
		            ),
		            array(
		                'tx' => 'Toolbar',
		                'st' => '#item-toolbar'
		            ),
		            array(
		                'tx' => 'Callout',
		                'st' => '#item-callout'
		            ),
		            array(
		                'tx' => 'Panel',
		                'st' => '#item-panel'
		            ),
		            array(
		                'tx' => 'Tab panel',
		                'st' => '#item-tabpanel'
		            ),
		            array(
		                'tx' => 'Row and Col',
		                'st' => '#item-rowcol'
		            ),
		            array(
		                'tx' => 'Form',
		                'st' => '#item-form'
		            ),
		            array(
		                'tx' => 'Toggle',
		                'st' => '#item-toggle'
		            ),
		            array(
		                'tx' => 'Svg polyline',
		                'st' => '#item-polyline'
		            ),
		            array(
		                'tx' => 'Grid',
		                'st' => '#item-grid'
		            )
		        ),
		        'menu-php-methods' => array (
		            'getAllConfigs', 'getConfig', 'setConfig', 'setSubConfig', 'separator', 'parseStore', 'parseVar', 'parseConfig', 'separator', 'getTimeExe', 'showCode', 'utf8Converter', 'minArray',
		            'mergePlusObject', 'imageResize', 'extractUrls', 'embedMultimedia', 'separator', 'insert', 'select', 'update', 'delete', 'where', 'orWhere', 'join', 'get', 'getArray',
		            'groupBy', 'orderBy', 'limit', 'from'
		        ),
		        'menu-javascript-methods' => array (
		            'getStore', 'getData', 'setData', 'removeData', 'addData', 'extendData',
		            'mergeData', 'getName', 'sort', 'addFilter', 'getFilters', 'removeFilter',
		            'removeAllFilters'
		        ),
		        'menu-ci-bus-methods' => array (
		            'autoname', 'autoid', 'ctr', 'get', 'getCmp', 'send', 'load', 'loadAll',
		            'loadLineal', 'define', 'setDinamicValue', 'setMissingDinamicValue', 'setValue', 'setConfig', 'getConfig', 'delConfig',
		            'render', 'extend', 'clone', 'commonProp', 'strpos', 'enable', 'disable', 'sto',
		            'popup', 'verticalCenter', 'effect', 'isNode', 'isElement', 'getStore', 'getView', 'getController',
		            'getComponent', 'fetchFromObject', 'putToObject', 'deleteToObject', 'isURL'
		        ),
		        'install' => array(
		            'tx1' => 'Installation of the framework',
		            'tx2' => 'Step 1',
		            'tx3' => 'Download Ci-bus from repository <a target="_blank" href="https://github.com/ci-bus/ci-bus">https://github.com/ci-bus/ci-bus</a> or executing the command in a terminal',
		            'tx4' => 'git clone https://github.com/ci-bus/ci-bus.git',
		            'tx5' => 'If you do not have git you can download it from <a target="_blank" href="https://git-scm.com/downloads">https://git-scm.com/downloads</a>',
		            'tx6' => 'Step 2',
		            'tx7' => 'Put the files on your web or local apache server',
		            'tx8' => 'Step 3',
		            'tx9' => 'Open a terminal in the folder that you have put the Ci-bus files and run to install jQuery, Bootstrap and other necessary libraries',
		            'tx10' => 'bower install',
		            'tx11' => 'If you do not have a bower you can get it from <a target="_blank" href="https://bower.io/">https://bower.io/</a>',
		            'tx12' => 'Step 4',
		            'tx13' => 'If your folder is not called ci-bus edit the file .htacces and change the word ci-bus by the name of your folder in the line',
		            'tx14' => 'RewriteRule ^(.*)$ /ci-bus/index.php?/$1 [L]',
		            'tx15' => 'Step 5',
		            'tx16' => 'If you are going to use a mysql database you must configure the connection in the file',
		            'tx17' => 'core/config.php'
		        ),
		        'home' => array (
		            'tx1' => 'What is Ci-bus Framework?',
		            'tx2' => 'Ci-bus is a cogent of tools JavaScript and PHP that will allow you to create applications webs of an easy and intuitive way with the newest technologies of programming',
		            'tx3' => 'What have been my motivations?',
		            'tx4' => 'Developing Apps with Extjs for big companies I could find deficiencies and aspects of the framework that were turning out to be troublesome, the worst of all was Angular, with the absurd and enormous complexity at the moment of making simple tasks, I think firmly that the \'minimalist code\' is the way to go, when a framework is more complex coming to the point of giving more work instead of removing it, for my it loses the sense of being. On the other hand there are projects like jQuery that have managed to maintain the simplicity and the flexibility.<br>Day to day I had small ideas and found better ways of making things, like applying styles, attaching event listeners, creating elements, loading information... up to coming to the day in which all that became condensed, I knew that it would use jQuery and I thought in Bootstrap for the styles and layouts, I got to work and it was like recreating ExtJS, it wrote several hundreds of lines of code which were creating html elements based on definitions of objects JavaScript (JSON), Ci-bus, my second framework, was taking his first steps of life.',
		            'tx5' => 'What is the objetive?',
		            'tx6' => 'To leave a witness of my abilities as software architect creating a framework very easy to use, simplicity first, versatility and agility, to make developers enjoy their work doing that make you think and that work. This is going to explode.',
		            'tx7' => 'Contact information',
		            'tx8' => 'Donations',
		            'tx9' => 'If you like Ci-bus click here to make a donation supporting the development',
		            'tx10' => 'Where can I get it?',
		            'tx11' => 'You can download Ci-bus from github <a target="_blank" href="https://github.com/ci-bus/ci-bus">https://github.com/ci-bus/ci-bus</a>'
		        ),
		        'stores' => array(
		            'tx1' => 'Information for the creation of stores in PHP and the use of stores in JavaScript',
		            'tx2' => 'PHP Stores',
		            'tx3' => 'The stores in PHP are used to query the database and return a JavaScript store, variable or configuration',
		            'tx4' => 'Example taking tags from the database',
		            'tx5' => 'Available functions class Store',
		            'tx6' => 'PHP Configuration methods',
		            'methods1' => array(
		                array(
		                    'method' => 'getAllConfigs',
		                    'action' => 'Returns all configurations',
		                    'example' => '$configs = $this->getAllConfigs();'
		                ),
		                array(
		                    'method' => 'getConfig',
		                    'param' => '1. Name of the configuration, 2. Name of the sub configuration (Optional)',
		                    'action' => 'Returns the value of a configuration',
		                    'example' => '$db_charset = $this->getConfig("db", "charset");'
		                ),
		                array(
		                    'method' => 'setConfig',
		                    'param' => '1. Configuration name, 2. Value',
		                    'action' => 'Set a configuration',
		                    'example' => '$this->setConfig("custom", "oks");'
		                ),
		                array(
		                    'method' => 'setSubConfig',
		                    'param' => '1. Configuration name, 2. Name sub configuration, 3. Value',
		                    'action' => 'Set a sub configuration',
		                    'example' => '$this->setConfig("db", "db_prefix", "val_");'
		                )
		            ),
		            'tx7' => 'PHP Methods for JavaScript',
		            'methods2' => array(
		                array(
		                    'method' => 'parseStore',
    		                'param' => '1. Name of the store, 2. Values',
    		                'action' => 'Create a store with the values',
    		                'example' => '$this->parseStore("letters", array("a", "b", "c"));'
		                ),
		                array(
		                    'method' => 'parseVar',
		                    'param' => '1. Name of the variable, 2. Value',
		                    'action' => 'Create a variable with a value',
		                    'example' => '$this->parseVar("numbers", array(1, 2, 3));'
		                ),
		                array(
		                    'method' => 'parseConfig',
		                    'param' => '1. Name of the configuration, 2. Value',
		                    'action' => 'Set a configuration',
		                    'example' => '$this->parseConfig("time", "08:15");'
		                )
		            ),
		            'tx8' => 'PHP Utilities methods',
		            'methods3' => array(
		                array(
		                    'method' => 'getTimeExe',
		                    'param' => '1. true to reset the time (Optional)',
		                    'action' => 'Returns the execution time',
		                    'example' => '$exe_time = $this->getTimeExe();',
		                    'info' => 'It is necessary to execute <strong>parent::__construct();</strong> in the constructor of our class to initialize the time'
		                ),
		                array(
		                    'method' => 'showCode',
		                    'param' => '1. Any code assumable by <strong>print_r()</strong>',
		                    'action' => 'Paint a code between pre tags',
		                    'example' => '$this->showCode(array("a" => 1, "b" => 2));'
		                ),
		                array(
		                    'method' => 'utf8Converter',
		                    'param' => '1. Array of values',
		                    'action' => 'Encode utf8 an array of values',
		                    'example' => '$this->utf8Converter(array("name" => "Miguel Ángel", "address" => "C/Agüero Nº18"));'
		                ),
		                array(
		                    'method' => 'minArray',
		                    'param' => '1. Array of values',
		                    'action' => 'Simplify the values ​​sent with <strong>cb.send</strong>',
		                    'example' => '$values = $this->minArray(array(array("name" => "user", "value" => "admin"), array("name" => "password", "value" => "pass1234")));'
		                ),
		                array(
		                    'method' => 'mergePlusObject',
		                    'param' => '1. stdClass object, 2. stdClass object',
		                    'action' => 'Merge of two Objects',
		                    'example' => '$merged_obj = $this->mergePlusObject($obj1, $obj2);'
		                ),
		                array(
		                    'method' => 'imageResize',
		                    'param' => '1. image url, 2. Width in pixels, 3. Height in pixels (optional)',
		                    'action' => 'Resize an image',
		                    'example' => '$this->imageResize("test_img.jpg", 1024);'
		                ),
		                array(
		                    'method' => 'extractUrls',
		                    'param' => '1. Text',
		                    'action' => 'Returns the urls of a text',
		                    'example' => '$urls = $this->extractUrls("Google: https://www.google.com Youtube: https://www.youtube.com");'
		                ),
		                array(
		                    'method' => 'embedMultimedia',
		                    'param' => '1. text',
		                    'action' => 'It links the urls and in case of youtube inserts a video image',
		                    'example' => '$this->embedMultimedia("Esto es un enlace a un video https://www.youtube.com/watch?v=iDkeRAx_wqg");'
		                )
		            ),
		            'tx9' => 'Method',
		            'tx10' => 'PHP Methods SQL queries',
		            'methods4' => array(
		                array(
		                    'method' => 'insert',
		                    'param' => '1. Name table, 2. Array of values',
		                    'action' => 'Insert data in a table',
		                    'example' => '$this->insert("user", array("name" => "admin", "password" => "pass1234"));',
		                    'info' => 'Returns true if inserted correctly'
		                ),
		                array(
		                    'method' => 'select',
		                    'param' => '1. Fields separated by comma or array (Optional)',
		                    'action' => 'Set the fields that are going to be selected',
		                    'example' => '$this->select("id, name, password");
$users = $this->get("user");',
		                    'info' => 'If nothing is passed by default, select all the fields with *'
		                ),
		                array(
		                    'method' => 'update',
		                    'param' => '1. Name table, 2. Array of values ​​to modify',
		                    'action' => 'Updates values ​​in the rows of a table',
		                    'example' => '$this->where("user.id", 1);
$this->update("user", array("password" => "new1234"));',
		                    'info' => 'Returns true if successfully updated'
		                ),
		                array(
		                    'method' => 'delete',
		                    'param' => '1. Name table',
		                    'action' => 'Delete rows from a table',
		                    'example' => '$this->where("review.row_id", 5);
$this->where("review.user_id", 1);
$this->delete("review");'
		                ),
		                array(
		                    'method' => 'where',
		                    'param' => '1. Field or array of values, 2. Value (Optional) by default false, 3. Operator (Optional) by default =',
		                    'action' => 'Apply a where',
		                    'example' => '$this->where("name LIKE \'%Miguel%\'");
$this->where(array("name" => "%Miguel%", false, "LIKE"));
$this->where("name", "%Miguel%", "LIKE");',
		                    'info' => 'The three examples would have the same result'
		                ),
		                array(
		                    'method' => 'orWhere',
		                    'info' => 'Similar to where but applying an OR'
		                ),
		                array(
		                    'method' => 'join',
		                    'param' => '1. Table name, 2. Condition ON, 3. Type of join (Optional)',
		                    'action' => 'Join two tables to select data from both',
		                    'example' => '$this->select("user.*, review.*");
$this->from("review");
$this->join("user", "review.user_id = user.id");
$reviews = $this->getArray();'
		                ),
		                array(
		                    'method' => 'get',
		                    'param' => '1. Name table (Optional)',
		                    'action' => 'Returns data from a select query',
		                    'example' => '$this->select("id, name, password");
$users = $this->get("user");'
		                ),
		                array(
		                    'method' => 'getArray',
		                    'info' => 'Same as getting but returning the values ​​always in array'
		                ),
		                array(
		                    'method' => 'groupBy',
		                    'param' => '1. Field',
		                    'action' => 'Group the records by a specific field',
		                    'example' => '$this->groupBy("type");'
		                ),
		                array(
		                    'method' => 'orderBy',
		                    'param' => '1. Field, 2. Type (Optional) by default DESC',
		                    'action' => 'Sort records in a query',
		                    'example' => '$this->orderBy("date", "ASC");'
		                ),
		                array(
		                    'method' => 'limit',
		                    'param' => '1. Record limit',
		                    'action' => 'Apply a limit to the query',
		                    'example' => '$this->limit(10);'
		                ),
		                array(
		                    'method' => 'from',
		                    'param' => '1. Name of the table',
		                    'action' => 'Set the table to which the query will be made',
		                    'example' => '$this->from("user");'
		                )
		            ),
		            'tx11' => 'PHP Methods',
		            'tx12' => 'JavaScript Stores',
		            'tx13' => 'When a PHP Store returns a JavaScript Store it is used to feed the views',
		            'tx14' => 'JavaScript Methods',
		            'methods5' => array(
		                array(
		                    'method' => 'getStore',
		                    'param' => '1. Name of the store',
		                    'action' => 'Returns a store if there is one',
		                    'example' => "var str = cb.getStore('name_store');"
		                ),
	                    array(
                            'method' => 'getData',
                            'param' => '1. Field name (Optional)',
                            'action' => 'Returns store values',
                            'example' => "var user_name = cb.getStore('user').getData('name');"
	                    ),
	                    array(
                            'method' => 'setData',
                            'param' => '1. Data, 2. Field name (Optional)',
                            'action' => 'Sequence values ​​to the store',
                            'example' => "cb.getStore('user').setData('Miguel', 'name');"
	                    ),
	                    array(
                            'method' => 'removeData',
                            'param' => '1. Position of the data to be deleted, 2. Name of the field (Optional)',
                            'action' => 'Delete a value in a data array',
                            'example' => "cb.getStore('global').removeData(2, 'tags');"
	                    ),
	                    array(
                            'method' => 'addData',
                            'param' => '1. Value to add, 2. Name of the field (Optional), 3. Position of the array where it is added (Optional)',
                            'action' => 'Add a value',
                            'example' => "cb.getStore('global').addData('Smartphone', 'tags', 2);"
	                    ),
	                    array(
                            'method' => 'extendData',
                            'param' => '1. Value to extend, 2. Name of the field (Optional)',
                            'action' => 'Extend the data of a store',
                            'example' => "cb.getStore('global').extendData(['Computer', 'Tablet'], 'tags');"
	                    ),
	                    array(
                            'method' => 'mergeData',
                            'param' => '1. Value to be mixed, 2. Name of the field (Optional)',
                            'action' => 'Mix the data of a store',
                            'example' => "cb.getStore('global').mergeData(['Computer', 'Tablet'], 'tags');"
	                    ),
	                    array(
                            'method' => 'getName',
                            'action' => 'Returns the name of the store',
                            'example' => "var name_store = store.getName();"
	                    ),
	                    array(
                            'method' => 'sort',
                            'param' => '1. Field or object with order definitions, 2. Order type or function for custom sorting (Optional)',
                            'action' => 'Sort the values ​​of a store',
                            'example' => "cb.getStore('global').sort('tags', 'desc');            
cb.getStore('global').sort({data: 'tags', order: 'asc'});
cb.getStore('global').sort('tags', function(a, b){
    return a.length - b.length;
});"
	                    ),
	                    array(
                            'method' => 'addFilter',
                            'param' => '1. Function that travels the data, 2. Name of the field (Optional)',
                            'action' => 'Add a filter to the store',
                            'example' => "cb.getStore('global').addFilter(function (r) {
    if (r.name == 'Miguel') {
        return true;
    } else {
        return false;
    }
}, 'users');"
	                    ),
	                    array(
                            'method' => 'getFilters',
                            'action' => 'Returns an array with the filter settings',
                            'example' => "var filters = cb.getStore('global').getFilters();"
	                    ),
	                    array(
                            'method' => 'removeFilter',
                            'param' => '1. Position of the filter in the array',
                            'action' => 'Remove a filter',
                            'example' => "cb.getStore('global').removeFilter(0);"
	                    ),
	                    array(
                            'method' => 'removeAllFilters',
                            'param' => '1. Field name (Optional)',
                            'action' => 'Remove all filters',
                            'example' => "cb.getStore('global').removeAllFilters('users');"
	                    )
		            )
		        ),
			    'createmodule' => array(
			        'tx1' => 'Information to create a new module called test',
			        'tx2' => 'Creating folders and files',
			        'tx3' => '1. Create a folder called <em>test</em> in ',
			        'tx4' => '2. Create the <em>controller</em>, <em>view</em> and <em>store</em> folders in ',
			        'tx5' => ' and the <em>component</em> folder in ',
			        'tx6' => 'Controller',
			        'tx7' => '3. Inside the folder ',
			        'tx8' => ' create a file <em>test.js</em> that will be the controller, it will contain all the necessary JavaScript functions and will take care of tasks such as loading views, stores, sending form data, etc. By default, the driver that loads the call equal to the module',
			        'tx9' => 'View',
			        'tx10' => '4. Inside the folder ',
			        'tx11' => ' create a file <em>testView.js</em> that will be a view, it will contain the definitions of components that will be converted into html elements when they are rendered',
			        'tx12' => 'Store',
			        'tx13' => '5. Inside the folder ',
			        'tx14' => ' create a file <em>testStore.php</em> that will be a store, you can make queries to the database and return the data to be read by the controller and the views',
			        'tx15' => 'The <em>$this->parseStore</em> function paints what is necessary to define a store in JavaScript with the data, the <em>$this->parseConfig</em> function passes a configuration',
			        'tx16' => 'Component',
			        'tx17' => '6. Inside the folder ',
			        'tx18' => ' create a <em>testComponent.js</em> file that will be a component, this is useful for creating custom and reusable components'
			            
			    ),
			    'controllers' => array (
			        'tx1' => 'General information on controllers, their functions and configurations',
			        'tx2' => 'Controllers',
			        'tx3' => 'By default, the driver that is called the same as the module is loaded, the module that is loaded by default is configured in ',
			        'tx4' => 'The <em>onload</em> function is usually used to load stores, views and components',
			        'tx5' => 'The <em>cb.loadAll</em> function loads several views, stores and components in a single ajax call',
			        'tx6' => 'To see how to create a driver, visit the section: ',
			        'tx7' => 'Default',
			        'tx8' => 'onload',
			        'tx9' => ' to load another module we can do it by adding to the url <em>/nombre_del_modulo</em>',
			        'tx10' => 'Parameters',
			        'tx11' => '1. <em>type</em> view, controller, store o component',
			        'tx12' => '2. <em>module</em> Name of the module',
			        'tx13' => '3. <em>file</em> File name',
			        'tx14' => '4. <em>callback</em> Callback function',
			        'tx15' => 'If no parameter is passed for the file name (Parameter 3) it takes the name of the module by default.',
			        'tx16' => 'Funciones',
			        'tx17' => 'Within the controller you can define all the functions you want',
			        'tx18' => 'To execute a function of a controller use <em>cb.ctr</em>',
			        'tx19' => '1. Controller name',
			        'tx20' => '2. Function name',
			        'tx21' => '3. Parameter, array or object',
			        'tx22' => 'Routes',
			        'tx23' => 'The routes are used to execute functions that load views or perform other actions, this happens when the hash of the url changes, it is a fundamental piece to load content dynamically and the button works to go behind the browser and when reloading the page keep maintaining what we were seeing',
			        'tx24' => 'You can test the operation in the module: ',
			        'tx25' => 'Examples'
			    ),
		        'views' => array (
		            'tx1' => 'General information about views and their configurations',
		            'tx2' => 'Views',
		            'tx3' => 'To see how to create a view visit the section: ',
		            'tx4' => 'Configurations',
		            'tx5' => 'View name',
		            'tx6' => 'Element pointer where the view will be rendered',
		            'tx7' => 'By default the views are rendered when loaded, defining this variable to <em>false</em> we avoid it',
		            'tx8' => 'Property',
		            'tx9' => 'Value',
		            'tx10' => 'Description',
		            'tx11' => 'Text',
		            'tx12' => 'Function',
		            'tx13' => 'Function that executes after rendering',
		            'tx14' => 'Boolean',
		            'tx15' => 'Function that is executed when the view is loaded',
		            'tx16' => 'Items',
		            'tx17' => 'The items property accepts an object or array of objects that will be the components, when they are rendered they will become html elements, to see all the available items, visit the section: '
		        ),
		        'items' => array (
		            'tx1' => 'General information about available items and basic examples',
                    'tx2' => 'Items',
		            'tx3' => 'There are 3 types of items, on the one hand there are bootstrap items that will be created with specific attributes according to their documentation and that may have some peculiarities, there are also Ci-bus own items and those created based on custom components',
		            'tx4' => 'Examples',
		            'tx5' => 'To see several examples of items you can visit the module: ',
		            'tx6' => 'Examples',
		            'tx7' => 'Component buttons',
		            'tx8' => 'Key',
		            'tx9' => 'Value',
		            'tx10' => 'Peculiarities',
		            'tx11' => 'Optional',
		            'tx12' => 'Sample code',
		            'tx13' => 'Navigation bars components',
		            'tx14' => 'Type',
		            'tx15' => 'Expanding component',
		            'tx16' => 'Component methods',
		            'tx17' => 'Parameters',
		            'tx18' => 'Action',
		            'tx19' => "1. Items, 2. Record (optional), 3. Callback event name by default 'changeItems' (optional)",
		            'tx20' => 'Add options to the drop-down',
		            'tx21' => "1. Array with options positions (negative numbers are allowed), 2. Callback event name by default 'changeItems' (optional)",
		            'tx22' => 'Remove options from the drop-down',
		            'tx23' => 'Remove all options and then add the new ones',
		            'tx24' => 'Any',
		            'tx25' => 'Open the options in the dropdown',
		            'tx26' => 'Close the dropdown options',
		            'tx27' => 'Container component',
		            'tx28' => 'Minimum value in number',
		            'tx29' => 'Maximum value in number',
		            'tx30' => 'Value in number',
		            'tx31' => 'Component progress bars',
		            'tx32' => '1. Position of the bar in number',
		            'tx33' => 'Returns component bar',
		            'tx34' => '1. Object or array of objects with bar definitions',
		            'tx35' => 'Add bars to progress',
		            'tx36' => 'Remove a bar',
		            'tx37' => '1. Value in number',
		            'tx38' => 'Change the value of the bar, the maximum or the minimum',
		            'tx39' => '1. Text, flat html or element',
		            'tx40' => 'Change the text of a bar',
		            'tx41' => '1. Boolean true or false',
		            'tx42' => 'Pone o quita stripe a la barra',
		            'tx43' => 'Activate or deactivate the stripe animation',
		            'tx44' => 'Component tables',
		            'tx45' => 'Component icons',
		            'tx46' => 'Type html element, by default it is div',
		            'tx47' => 'Thumbnail component',
		            'tx48' => 'Alerts component',
		            'tx49' => 'Component badges',
		            'tx50' => 'Component toolbar',
		            'tx51' => 'Text for the aria-label attribute',
		            'tx52' => 'Component groups',
		            'tx53' => 'Component highlights',
		            'tx54' => 'Text for the title',
		            'tx55' => 'Component panels',
		            'tx56' => 'Component tab panels',
		            'tx57' => 'Component rows and columns',
		            'tx58' => 'Number from 1 to 12 or object',
		            'tx59' => 'Number from 1 to 12',
		            'tx60' => 'Form component',
		            'tx61' => 'Switch component',
		            'tx62' => 'Object with properties',
		            'tx63' => 'Text',
		            'tx64' => 'Number or text',
		            'tx65' => 'Destroy, turn on, turn off, change, activate, deactivate',
		            'tx66' => 'Component svg polyline',
		            'tx67' => 'Number',
		            'tx68' => 'Color',
		            'tx69' => 'true (need to have a store) this makes the store\'s data always synchronized with the view',
		            'tx70' => 'Grid component',
		            'tx71' => 'Column object with the minimum properties name and text or field',
		            'tx72' => 'Position in number',
		            'tx73' => 'Add a column',
		            'tx74' => 'Remove a column',
		            'tx75' => 'Object or array of objects with data (record)',
		            'tx76' => 'Add a row',
		            'tx77' => 'Delete a row'
		        ),
		        'propTxt' => array(
		            'tx1' => 'General information about the properties available for the items',
		            'tx2' => 'Properties',
		            'tx3' => 'Similarity'
		        ),
	            'funcTxt' => array(
	                    'tx1' => 'General information about the ci-bus JavaScript functions',
	                    'tx2' => 'Parameters',
	                    'tx3' => 'Action',
	                    'tx4' => 'Return',
	                    'tx5' => 'Example',
	                    'tx6' => 'More information',
	                    'tx7' => 'information',
	                    'tx8' => 'Select'
	            ),
		        'properties' => array(
		            array(
		                'prop' => 'Properties css',
		                'action' => 'Applies a style property',
		                'props' => 'css margin padding color border float shadow size weight align height width display cursor background overflow',
		                'example' => "css: {
    color: 'RED',
    'font-weight': 600,
    border: '3px double #AAA'
}",
		                'simil' => 'https://api.jquery.com/css/'
		            ),
	                array(
	                        'prop' => 'Html attributes',
	                        'action' => 'Applies attributes to the main html element',
	                        'props' => 'attr id disable disabled name type href value src placeholder reload target',
	                        'example' => "attr: {
    method: 'post',
    width: '200',
    custom: '1234'
}",
	                        'simil' => 'http://api.jquery.com/attr/'
	                ),
		            array(
		                'prop' => 'Events',
		                'props' => 'click dblclick mouseover mouseout focus blur',
		                'example' => "click: function () { alert('clicked!'); }",
		                'simil' => 'https://api.jquery.com/click/ https://api.jquery.com/dblclick/ https://api.jquery.com/mouseover/ https://api.jquery.com/mouseout/ https://api.jquery.com/focus/ https://api.jquery.com/blur/'
		            ),
		            array(
		                'prop' => 'cls',
		                'param' => '1. Classes in plain text separated by spaces',
		                'action' => 'Apply the classes to the class attribute of the element',
		                'example' => "cls: 'form-control'",
		                'simil' => 'https://api.jquery.com/addClass/'
		            ),
		            array(
		                'prop' => 'html',
		                'param' => '1. Plain html, Object or element',
		                'action' => 'Applies an html as content of the element',
		                'example' => "html: '<p>Test</p>'",
		                'simil' => 'http://api.jquery.com/html/'
		            ),
		            array(
		                'prop' => 'text',
		                'param' => '1. Plain html, Object or elemnto',
		                'action' => 'Add plain text or html to the content of the element',
		                'example' => "text: 'Plain text'",
		                'simil' => 'http://api.jquery.com/append/'
		            ),
		            array(
		                'prop' => 'glyphicon',
		                'param' => '1. Text icon name',
		                'action' => 'Add a bootstrap icon',
		                'example' => "glyphicon: 'plus'",
		                'simil' => 'https://glyphicons.bootstrapcheatsheets.com/'
		            ),
		            array(
		                'prop' => 'hidden',
		                'param' => '1. true or false',
		                'action' => 'Hide or show the item',
		                'example' => 'hidden: true',
		                'simil' => 'http://api.jquery.com/hide/ http://api.jquery.com/show/'
		            ),
		            array(
		                'prop' => 'badge',
		                'param' => '1. Text for the badge',
                        'example' => "badge: 'text'",
		                'action' => 'Add a badge to the element with the defined text'
		            ),
		            array(
		                'prop' => 'pull',
		                'param' => '1. Text left or right',
		                'example' => "pull: 'left'",
		                'action' => 'Add the pull-left or pull-right class to the element'
		            ),
		            array(
		                'prop' => 'listeners',
		                'param' => '1. Object with definitions of events',
		                'example' => "listeners: {
    click: function () { alert('clicked!'); }
}",
		                'simil' => 'http://api.jquery.com/on/'
		            )
		        ),
	            'functions' => array(
		            array(
		                'fun' => 'autoname',
		                'param' => "1. Prefix (optional) by default is 'autoname'",
		                'return' => "Returns a unique string formed by prefix, '_' and a number"
		            ),
		            array(
		                'fun' => 'autoid',
		                'param' => "1. Prefix (optional) by default is 'autoid'",
		                'return' => "Returns a unique string formed by prefix, '_' and a number"
		            ),
	                array(
	                    'fun' => 'ctr',
	                    'action' => 'Execute a function of a controller',
	                    'param' => '1. Name of the controller, 2. Name of the function, 3. Parameter',
	                    'example' => "cb.ctr('test_controller', 'test_function', {a: 1, b: 2, c: 'tres'});"
	                ),
	                array(
	                    'fun' => 'get',
	                    'param' => "1. Type = 'view', 'store', 'controller' or 'component', 2. Name, 3. Data to take (optional)",
	                    'return' => "You can return an object, array or function according to the parameters that you pass",
	                    'example' => "cb.get('view', 'test_view', 'items');"
	                ),
	                array(
	                    'fun' => 'getCmp',
	                    'param' => "1. Pointer, xtype or element, 2. index (optional)",
	                    'return' => "Returns the element with the jQuery functions and the component functions",
	                    'example' => "cb.getCmp('button');"
	                ),
	                array(
	                    'fun' => 'send',
	                    'param' => "1. Name form html, 2. Name module, 3. Name store, 4. Callback function",
	                    'action' => "Send the data of a form to a store",
	                    'example' => "cb.send('form_name', 'test_module', 'test_store', function(){ alert('Formulario enviado'); })"
	                ),
	                array(
	                    'fun' => 'load',
	                    'param' => "1. Type = 'view', 'store', 'controller' or 'component', 2. Module name, 3. File name, 4. Variable to pass (optional), 5. Callback function (optional)",
	                    'action' => "Load a file from the module",
	                    'example' => "cb.load('store', 'test_module', 'test_filename', {id: 3}, function(){ alert('Archivo cargado') })",
	                    'more' => "The subfile View, Component or Store is not put in the name of the file"
	                ),
	                array(
	                    'fun' => 'loadAll',
	                    'more' => "The operation is the same as cb.load(), with the difference that you can load more than one file in a single call",
	                    'example' => "cb.loadAll([
    ['store', 'test_module', 'test_filename'],
    ['store', 'test_module', 'test_filename2']
], function(){ alert('Everything loaded'); });"
	                ),
	                array(
	                    'fun' => 'loadLineal',
	                    'info' => "The operation is the same as cb.loadAll(), with the difference that it will make an ajax query for each file"
	                ),
	                array(
	                    'fun' => 'define',
	                    'param' => "1. Object with definitions",
	                    'action' => "Create a driver, store, view, or view component"
	                ),
	                array(
	                    'fun' => 'setDinamicValue',
	                    'param' => "1. Object to be modified, 2. Attribute name, 3. Attribute value, 4. Levels",
	                    'action' => "Modify a value in an object, to it and its items up to X defined levels",
	                    'example' => "cb.setDinamicValue({
    xtype: 'div',
    items: {
        xtype: 'div',
        items: {
            xtype: 'div'
        }
    }
}, 'padding', 20, 1)",
		                    'return' => "{
    xtype: 'div',
    padding: 20,
    items: {
        xtype: 'div',
        padding: 20,
        items: {
            xtype: 'div'
        }
    }
}"
	                ),
	                array(
	                    'fun' => 'setMissingDinamicValue',
	                    'info' => "This function is equal to cb.setDinamicValue() with the difference that it does not replace values ​​already assigned"
	                ),
	                array(
	                    'fun' => 'setValue',
	                    'param' => "1. Html element or pointer, 2. Value or html element",
	                    'action' => "If it is an input, apply the value as value but, apply it as html",
	                    'example' => "cb.storeSet('#id-ele', 'example');"
	                ),
	                array(
	                    'fun' => 'setConfig',
	                    'param' => "1. Name config, 2. Value config",
	                    'action' => "Saves a configuration value until the page is reloaded",
	                    'example' => "cb.setConfig('lang', {title: 'Español', sg: 'es'});"
	                ),
	                array(
	                    'fun' => 'getConfig',
	                    'param' => "1. Name config, 2. Name subconfig (optional)",
	                    'action' => "Returns a configuration value",
	                    'example' => "cb.getConfig('lang', 'sg');"
	                ),
	                array(
	                    'fun' => 'delConfig',
	                    'param' => "1. Name config, 2. Name subconfig (optional)",
	                    'action' => "Remove a configuration value",
	                    'example' => "cb.delConfig('lang');"
	                ),
	                array(
	                    'fun' => 'render',
	                    'param' => "1. Object (view), 2. Callback function",
	                    'action' => "Render the definitions of the items and execute the callback function upon completion",
	                    'example' => "cb.render({items: {renderTo: 'body', text: 'Prueba'}}, function(){ alert('rendered');})"
	                ),
	                array(
	                    'fun' => 'extend',
	                    'param' => "1. Object, 2. Object",
	                    'action' => "Extend an object to only 1 level",
	                    'example' => "cb.extend({a: 1, b: 1}, {b: 2});",
	                    'return' => "{a: 1, b: 2}"
	                ),
	                array(
	                    'fun' => 'clone',
	                    'param' => "1. Object or array",
	                    'action' => "Clone an object or array",
	                    'example' => "cb.clone({xtype: 'button', text: 'Search'});",
	                    'return' => "The same object or cloned array"
	                ),
	                array(
	                    'fun' => 'commonProp',
	                    'param' => "1. Html element or pointer, 2. Object (properties)",
	                    'action' => "Apply properties to an element such as border, padding, listeners, etc.",
	                    'example' => "cb.commonProp('#id-ele', {background: 'red', click: function(){alert('oks');}});",
	                    'return' => "The element or pointer",
	                    'info' => '<a href="#loadview/properties">Click to see the common properties available</a>'
	                ),
	                array(
	                    'fun' => 'strpos',
	                    'param' => "1. Text, 2. Word",
	                    'action' => "Search for a word in a text",
	                    'example' => "cb.strpos('Esto es un texto', 'un');",
	                    'return' => "Position of the word in the text or false if it is not found"
	                ),
	                array(
	                    'fun' => 'enable',
	                    'param' => "1. HTML element or pointer",
	                    'action' => "Remove the attribute disable",
	                    'example' => "cb.enable('#input-test');"
	                ),
	                array(
	                    'fun' => 'disable',
	                    'param' => "1. HTML element or pointer",
	                    'action' => "Add the attributo disable",
	                    'example' => "cb.enable('#input-test');"
	                ),
	                array(
	                    'fun' => 'sto',
	                    'param' => "1. function, 2. time (millisecond)",
	                    'action' => "setTimeout()",
	                    'example' => "cb.sto(function(){alert('oks')}, 2000);"
	                ),
	                array(
	                    'fun' => 'popup',
	                    'param' => "1. Object (Definitions for the popup)",
	                    'action' => "Create a panel as a popup",
	                    'example' => "cb.popup({
    type: 'success',
    effect: {
        type: 'flipin',
        vel: 'fast',
        dire: 'down'
    },
    offsetTop: 100,
    css: {
        'max-width': 400
    },
    items: [{
        xtype: 'head',
        css: {'min-height': 40},
        items: [{
            xtype: 'span',
            glyphicon: 'remove',
            cls: 'pull-right',
            css: {
        cursor: 'pointer',
                'padding-top': 4
            },
            listeners: {
                click: function(){
                    cb.effect($(this).parent().parent(), {
                        type: 'flipout',
                        dire: 'up',
                        fn: function(){
                            $(this).parent().remove();
                        }
                    });
                }
            }
        },{
            xtype: 'div',
            size: 19,
            html: 'Titulo popup',
            cls: 'text-center'
        }]
    },{
        xtype: 'body',
        html: 'Contenido popup'
    }]
});"
	                ),
	                array(
	                    'fun' => 'verticalCenter',
	                    'param' => "1. Html element or pointer, 2. Offset number",
	                    'action' => "Apply a margin-top so that the object shows vertically centered",
	                    'example' => "cb.verticalCenter('#id-capa-test', 100);"
	                ),
	                array(
	                    'fun' => 'effect',
	                    'param' => "1. Html element or pointer, 2. Object with configuration",
	                    'action' => "Apply an input or output effect according to the configuration",
	                    'example' => "cb.effect('#id-capa-a-animar', {
    type: 'flipout',
    dire: 'down',
    fn: function(){
        $(this).remove();
    }
});",
		                    'configs' => "type : 'fadein', 'fadeout', 'flipin' o 'flipout'
dire : 'up', 'right', 'down' o 'left'
vel : 'fast', 'slow' o Milisegundos
fun : function(){ alert('end'); }"
	                ),
	                array(
	                    'fun' => 'isNode',
	                    'param' => "1. Object",
	                    'return' => "True if it is a node, false if it is not"
	                ),
	                array(
	                    'fun' => 'isElement',
	                    'param' => "1. Object",
	                    'return' => "True if it is an html element, false if it is not"
	                ),
	                array(
	                    'fun' => 'getStore',
	                    'param' => "1. Name of the store, 2. Name of the field (optional)",
	                    'return' => "Without field returns the store with its functions, with field returns the data"
	                ),
	                array(
	                    'fun' => 'getView',
	                    'param' => "1. Name of the view, 2. Name of the property (optional)",
	                    'return' => "Returns the view or its property"
	                ),
	                array(
	                    'fun' => 'getController',
	                    'param' => "1. Name of the controller, 2. Name of the property or function (optional)",
	                    'return' => "Returns the controller or its property"
	                ),
	                array(
	                    'fun' => 'getComponent',
	                    'param' => "1. Name of the custom component, 2. Name of the property (optional)",
	                    'return' => "Returns the component or its property"
	                ),
	                array(
	                    'fun' => 'fetchFromObject',
	                    'param' => "1. Object, 2. String Properties",
	                    'return' => "Returns the property of an object",
	                    'example' => "cb.fetchFromObject({a: {b: {c: 'test'}}}, 'a.b.c');"
	                ),
	                array(
	                    'fun' => 'putToObject',
	                    'param' => "1. Object, 2. Data, 3. String Properties",
	                    'return' => "Returns the object with the data set",
	                    'example' => "cb.putToObject({a: {b: {c: null}}}, 'test', 'a.b.c');"
	                ),
	                array(
	                    'fun' => 'deleteToObject',
	                    'param' => "1. Object, 2. String Properties",
	                    'return' => "Returns the object with the property deleted",
	                    'example' => "cb.deleteToObject({a: {b: {c: 'test'}}}, 'a.b.c');"
	                ),
	                array(
	                    'fun' => 'isURL',
	                    'param' => '1. Url',
	                    'return' => 'Returns true if it is a valid url or false if it is not',
	                    'example' => "cb.isUrl('https://www.ci-bus.com');"
	                )
		        )
		    ));
		}
	}
?>
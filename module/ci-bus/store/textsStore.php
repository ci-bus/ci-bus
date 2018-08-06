<?php 

	class Texts extends Store {
			
		public function __construct($data = array())
		{
		    
		    $this->parseStore('texts', array(
		        'general' => array (
		            'tx1' => 'Probar código',
		            'tx2' => 'Seleccionar',
		            'tx3' => 'Métodos'
		        ),
		        'menu' => array (
		            'tx0' => 'Documentación ',
		            'tx1' => 'Crear módulo',
		            'tx2' => 'Controladores',
		            'tx3' => 'Vistas',
		            'tx4' => 'Items',
		            'tx5' => 'Ci-bus Métodos',
		            'tx6' => 'Propiedades items',
		            'tx7' => 'Store PHP y JavaScript'
			    ),
		        'menu-items' => array (
		            array(
		                'tx' => 'Botones',
		                'st' => '#item-button'
		            ),
		            array(
		                'tx' => 'Barras de navegación',
		                'st' => '#item-navbar'
		            ),
		            array(
		                'tx' => 'Desplegables',
		                'st' => '#item-dropdown'
		            ),
		            array(
		                'tx' => 'Contenedores',
		                'st' => '#item-container'
		            ),
		            array(
		                'tx' => 'Barras de progreso',
		                'st' => '#item-progress'
		            ),
		            array(
		                'tx' => 'Tablas',
		                'st' => '#item-table'
		            ),
		            array(
		                'tx' => 'Iconos',
		                'st' => '#item-icon'
		            ),
		            array(
		                'tx' => 'Miniaturas',
		                'st' => '#item-thumbnail'
		            ),
		            array(
		                'tx' => 'Alertas',
		                'st' => '#item-alert'
		            ),
		            array(
		                'tx' => 'Insignias',
		                'st' => '#item-badge'
		            ),
		            array(
		                'tx' => 'Grupos',
		                'st' => '#item-group'
		            ),
		            array(
		                'tx' => 'Barra de herramientas',
		                'st' => '#item-toolbar'
		            ),
		            array(
		                'tx' => 'Textos destacados',
		                'st' => '#item-callout'
		            ),
		            array(
		                'tx' => 'Paneles',
		                'st' => '#item-panel'
		            ),
		            array(
		                'tx' => 'Paneles de pestañas',
		                'st' => '#item-tabpanel'
		            ),
		            array(
		                'tx' => 'Filas y columnas',
		                'st' => '#item-rowcol'
		            ),
		            array(
		                'tx' => 'Formularios',
		                'st' => '#item-form'
		            ),
		            array(
		                'tx' => 'Interruptor',
		                'st' => '#item-toggle'
		            ),
		            array(
		                'tx' => 'Svg polyline',
		                'st' => '#item-polyline'
		            ),
		            array(
		                'tx' => 'Cuadrícula',
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
		        'home' => array (
		            'tx1' => '¿Qué es Ci-bus Framework?',
		            'tx2' => 'Ci-bus es un cojunto de herramientas JavaScript y php que te permitirá crear aplicaciones webs de manera fácil e intuitiva con las más novedosas técnicas de programación',
		            'tx3' => '¿Cuáles han sido mis motivaciones?',
		            'tx4' => 'Desarrollando Apps con Extjs para grandes compañias como el banco ING, Volskwagen, Curanum, ICIS+, Lufthansa entre otras pude apreciar cadencias '
		                      .'y aspectos del framework que me resultaban molestos, el peor de todos al igual que Angular es la absurda y desmesurada complejidad a la hora de hacer simples tareas, '
		                      .'creo firmemente que el \'código minimalista\' es el camino correcto, no me vale eso de... es que es muy potente... cuando un framework va ganando en complejidad '
		                      .'llegando al punto de dar más trabajo en vez de quitarlo para mi pierde el sentido, existen proyectos como jQuery que han sabido mantenerse en la simplicidad y la flexibilidad.<br>'
		                      .'Días tras día se me fueron ocurriendo pequeñas ideas y mejores modos de hacer cosas como aplicar estilos, listeners, crear elementos, cargar datos... '
                              .'hasta llegar al día en que todo eso se condensó, sabía que usaría jQuery y pensé en bootstrap para los estilos, me puse manos a la obra y como si lo estuviera recreando '
		                      .'solté varios cientos de lineas de códigos las cuales creaban elementos html en base a definiciones en objetos JavaScript, ci-bus mi segundo framework daba '
		                      .'sus primeros pasos de vida.',
		            'tx5' => '¿Cuál es el objetivo?',
		            'tx6' => 'Dejar constancia de mis capacidades como arquitecto de software creando un framework muy fácil de usar, simplicidad ante todo, versatilidad y ligereza, '
		                      .'hacer que los programadores disfruten trabajando haciendo cosas de las que te hacen pensar... esto va a explotar... y que funcione.',
		            'tx7' => 'Datos de contacto',
		            'tx8' => 'Donativos',
		            'tx9' => 'Si te gusta Ci-bus haz click aquí para hacer un donativo apoyando al desarrollo',
		            'tx10' => '¿Dónde puedo conseguirlo?',
		            'tx11' => 'Puedes descargar Ci-bus desde github <a target="_blank" href="https://github.com/ci-bus/ci-bus">https://github.com/ci-bus/ci-bus</a>'
		        ),
		        'stores' => array(
		            'tx1' => 'Información para la creación de stores en PHP y la utilización de stores en JavaScript',
		            'tx2' => 'PHP Stores',
		            'tx3' => 'Los stores en PHP se utilizan para hacer consultas a la base de datos y devolver un store JavaScript, variable o configuración',
		            'tx4' => 'Ejemplo cogiendo tags de la base de datos',
		            'tx5' => 'Funciones disponibles class Store',
		            'tx6' => 'PHP Métodos de configuración',
		            'methods1' => array(
		                array(
		                    'method' => 'getAllConfigs',
		                    'action' => 'Devuelve todas las configuraciones',
		                    'example' => '$configs = $this->getAllConfigs();'
		                ),
		                array(
		                    'method' => 'getConfig',
		                    'param' => '1. Nombre de la configuración, 2. Nombre de la sub configuración (Opcional)',
		                    'action' => 'Devuelve el valor de una configuración',
		                    'example' => '$db_charset = $this->getConfig("db", "charset");'
		                ),
		                array(
		                    'method' => 'setConfig',
		                    'param' => '1. Nombre configuración, 2. Valor',
		                    'action' => 'Setea una configuración',
		                    'example' => '$this->setConfig("custom", "oks");'
		                ),
		                array(
		                    'method' => 'setSubConfig',
		                    'param' => '1. Nombre configuración, 2. Nombre sub configuración, 3. Valor',
		                    'action' => 'Setea una sub configuración',
		                    'example' => '$this->setConfig("db", "db_prefix", "val_");'
		                )
		            ),
		            'tx7' => 'PHP Métodos para JavaScript',
		            'methods2' => array(
		                array(
		                    'method' => 'parseStore',
    		                'param' => '1. Nombre del store, 2. Valores',
    		                'action' => 'Crea un store con los valores',
    		                'example' => '$this->parseStore("letters", array("a", "b", "c"));'
		                ),
		                array(
		                    'method' => 'parseVar',
		                    'param' => '1. Nombre de la variable, 2. Valor',
		                    'action' => 'Crea una variable con un valor',
		                    'example' => '$this->parseVar("numbers", array(1, 2, 3));'
		                ),
		                array(
		                    'method' => 'parseConfig',
		                    'param' => '1. Nombre de la configuración, 2. Valor',
		                    'action' => 'Setea una configuración',
		                    'example' => '$this->parseConfig("time", "08:15");'
		                )
		            ),
		            'tx8' => 'PHP Métodos utilidades',
		            'methods3' => array(
		                array(
		                    'method' => 'getTimeExe',
		                    'param' => '1. true para resetear el tiempo (Opcional)',
		                    'action' => 'Devuelve el tiempo de ejecución',
		                    'example' => '$exe_time = $this->getTimeExe();',
		                    'info' => 'Es necesario ejecutar <strong>parent::__construct();</strong> en el constructor de nuestra clase para inicializar el tiempo'
		                ),
		                array(
		                    'method' => 'showCode',
		                    'param' => '1. Cualquier código asumible por <strong>print_r()</strong>',
		                    'action' => 'Pinta un código entre etiquetas pre',
		                    'example' => '$this->showCode(array("a" => 1, "b" => 2));'
		                ),
		                array(
		                    'method' => 'utf8Converter',
		                    'param' => '1. Array de valores',
		                    'action' => 'Codifica en utf8 un array de valores',
		                    'example' => '$this->utf8Converter(array("name" => "Miguel Ángel", "address" => "C/Agüero Nº18"));'
		                ),
		                array(
		                    'method' => 'minArray',
		                    'param' => '1. Array de valores',
		                    'action' => 'Simplifica los valores enviados con <strong>cb.send</strong>',
		                    'example' => '$values = $this->minArray(array(array("name" => "user", "value" => "admin"), array("name" => "password", "value" => "pass1234")));'
		                ),
		                array(
		                    'method' => 'mergePlusObject',
		                    'param' => '1. Objeto stdClass, 2. Objeto stdClass',
		                    'action' => 'Hace merge de dos Objetos',
		                    'example' => '$merged_obj = $this->mergePlusObject($obj1, $obj2);'
		                ),
		                array(
		                    'method' => 'imageResize',
		                    'param' => '1. imagen url, 2. Anchura en pixeles, 3. Altura en pixeles (opcional)',
		                    'action' => 'Redimensiona una imagen',
		                    'example' => '$this->imageResize("test_img.jpg", 1024);'
		                ),
		                array(
		                    'method' => 'extractUrls',
		                    'param' => '1. Texto',
		                    'action' => 'Devuelve las urls de un texto',
		                    'example' => '$urls = $this->extractUrls("Google: https://www.google.com Youtube: https://www.youtube.com");'
		                ),
		                array(
		                    'method' => 'embedMultimedia',
		                    'param' => '1. texto',
		                    'action' => 'Hace enlaces las urls y en caso de youtube inserta una imagen del video',
		                    'example' => '$this->embedMultimedia("Esto es un enlace a un video https://www.youtube.com/watch?v=iDkeRAx_wqg");'
		                )
		            ),
		            'tx9' => 'Método',
		            'tx10' => 'PHP Métodos consultas SQL',
		            'methods4' => array(
		                array(
		                    'method' => 'insert',
		                    'param' => '1. Nombre tabla, 2. Array de valores',
		                    'action' => 'Inserta datos en una tabla',
		                    'example' => '$this->insert("user", array("name" => "admin", "password" => "pass1234"));',
		                    'info' => 'Devuelve true si se ha insertado correctamente'
		                ),
		                array(
		                    'method' => 'select',
		                    'param' => '1. Fields separados por coma o array (Opcional)',
		                    'action' => 'Setea los fields que van a ser seleccionados',
		                    'example' => '$this->select("id, name, password");
$users = $this->get("user");',
		                    'info' => 'Si no se pasa nada por defecto selecciona todos los campos con *'
		                ),
		                array(
		                    'method' => 'update',
		                    'param' => '1. Nombre tabla, 2. Array de valores a modificar',
		                    'action' => 'Actualiza valores de las filas de una tabla',
		                    'example' => '$this->where("user.id", 1);
$this->update("user", array("password" => "new1234"));',
		                    'info' => 'Devuelve true si se ha actualizado correctamente'
		                ),
		                array(
		                    'method' => 'delete',
		                    'param' => '1. Nombre tabla',
		                    'action' => 'Elimina filas de una tabla',
		                    'example' => '$this->where("review.row_id", 5);
$this->where("review.user_id", 1);
$this->delete("review");'
		                ),
		                array(
		                    'method' => 'where',
		                    'param' => '1. Field o array de valores, 2. Valor (Opcional) por defecto false, 3. Operador (Opcional) por defecto =',
		                    'action' => 'Aplica un where',
		                    'example' => '$this->where("name LIKE \'%Miguel%\'");
$this->where(array("name" => "%Miguel%", false, "LIKE"));
$this->where("name", "%Miguel%", "LIKE");',
		                    'info' => 'Los tres ejemplos tendrían el mismo resultado'
		                ),
		                array(
		                    'method' => 'orWhere',
		                    'info' => 'Semejante a where pero aplicando un OR'
		                ),
		                array(
		                    'method' => 'join',
		                    'param' => '1. Nombre tabla, 2. Condición ON, 3. Tipo de join (Opcional)',
		                    'action' => 'Une dos tablas para seleccionar datos de ambas',
		                    'example' => '$this->select("user.*, review.*");
$this->from("review");
$this->join("user", "review.user_id = user.id");
$reviews = $this->getArray();'
		                ),
		                array(
		                    'method' => 'get',
		                    'param' => '1. Nombre tabla (Opcional)',
		                    'action' => 'Devuelve datos de una consulta select',
		                    'example' => '$this->select("id, name, password");
$users = $this->get("user");'
		                ),
		                array(
		                    'method' => 'getArray',
		                    'info' => 'Igual que get pero devolviendo los valores siempre en array'
		                ),
		                array(
		                    'method' => 'groupBy',
		                    'param' => '1. Field',
		                    'action' => 'Agrupa los registros por un field específico',
		                    'example' => '$this->groupBy("type");'
		                ),
		                array(
		                    'method' => 'orderBy',
		                    'param' => '1. Field, 2. Tipo (Opcional) por defecto DESC',
		                    'action' => 'Ordena los registros en una consulta',
		                    'example' => '$this->orderBy("date", "ASC");'
		                ),
		                array(
		                    'method' => 'limit',
		                    'param' => '1. Límite de registros',
		                    'action' => 'Aplica un límite a la consulta',
		                    'example' => '$this->limit(10);'
		                ),
		                array(
		                    'method' => 'from',
		                    'param' => '1. Nombre de la tabla',
		                    'action' => 'Setea la tabla a la que se le va hacer la consulta',
		                    'example' => '$this->from("user");'
		                )
		            ),
		            'tx11' => 'PHP Métodos',
		            'tx12' => 'JavaScript Stores',
		            'tx13' => 'Cuando un PHP Store devuelve un JavaScript Store éste se utiliza para alimentar a las vistas',
		            'tx14' => 'JavaScript Métodos',
		            'methods5' => array(
		                array(
		                    'method' => 'getStore',
		                    'param' => '1. Nombre del store',
		                    'action' => 'Devuelve un store en caso de que exista',
		                    'example' => "var str = cb.getStore('name_store');"
		                ),
	                    array(
                            'method' => 'getData',
                            'param' => '1. Nombre del field (Opcional)',
                            'action' => 'Devuelve valores del store',
                            'example' => "var user_name = cb.getStore('user').getData('name');"
	                    ),
	                    array(
                            'method' => 'setData',
                            'param' => '1. Datos, 2. Nombre del field (Opcional)',
                            'action' => 'Setea valores al store',
                            'example' => "cb.getStore('user').setData('Miguel', 'name');"
	                    ),
	                    array(
                            'method' => 'removeData',
                            'param' => '1. Posición del dato a borrar, 2. Nombre del field (Opcional)',
                            'action' => 'Borra un valor en un array de datos',
                            'example' => "cb.getStore('global').removeData(2, 'tags');"
	                    ),
	                    array(
                            'method' => 'addData',
                            'param' => '1. Valor a añadir, 2. Nombre del field (Opcional), 3. Posición del array donde se añade (Opcional)',
                            'action' => 'Añade un valor',
                            'example' => "cb.getStore('global').addData('Smartphone', 'tags', 2);"
	                    ),
	                    array(
                            'method' => 'extendData',
                            'param' => '1. Valor a extender, 2. Nombre del field (Opcional)',
                            'action' => 'Extiende los datos de un store',
                            'example' => "cb.getStore('global').extendData(['Computer', 'Tablet'], 'tags');"
	                    ),
	                    array(
                            'method' => 'mergeData',
                            'param' => '1. Valor a mezclar, 2. Nombre del field (Opcional)',
                            'action' => 'Mezcla los datos de un store',
                            'example' => "cb.getStore('global').mergeData(['Computer', 'Tablet'], 'tags');"
	                    ),
	                    array(
                            'method' => 'getName',
                            'action' => 'Devuelve el nombre del store',
                            'example' => "var name_store = store.getName();"
	                    ),
	                    array(
                            'method' => 'sort',
                            'param' => '1. Field u objeto con definiciones de orden, 2. Tipo de orden o función para ordenación personalizada (Opcional)',
                            'action' => 'Ordena los valores de un store',
                            'example' => "cb.getStore('global').sort('tags', 'desc');            
cb.getStore('global').sort({data: 'tags', order: 'asc'});
cb.getStore('global').sort('tags', function(a, b){
    return a.length - b.length;
});"
	                    ),
	                    array(
                            'method' => 'addFilter',
                            'param' => '1. Función que recorre los datos, 2. Nombre del field (Opcional)',
                            'action' => 'Añade un filtro al store',
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
                            'action' => 'Devuelve un array con las configuraciónes de los filtros',
                            'example' => "var filters = cb.getStore('global').getFilters();"
	                    ),
	                    array(
                            'method' => 'removeFilter',
                            'param' => '1. Posición del filtro en el array',
                            'action' => 'Elimina un filtro',
                            'example' => "cb.getStore('global').removeFilter(0);"
	                    ),
	                    array(
                            'method' => 'removeAllFilters',
                            'param' => '1. Nombre del field (Opcional)',
                            'action' => 'Elimina todos los filtros',
                            'example' => "cb.getStore('global').removeAllFilters('users');"
	                    )
		            )
		        ),
			    'createmodule' => array(
			        'tx1' => 'Información para crear un módulo nuevo llamado test',
			        'tx2' => 'Creación de carpetas y archivos',
			        'tx3' => '1. Crear una carpeta llamada <em>test</em> en ',
			        'tx4' => '2. Crea las carpetas <em>controller</em>, <em>view</em> y <em>store</em> en ',
			        'tx5' => ' y la carpeta <em>component</em> en ',
			        'tx6' => 'Controller',
			        'tx7' => '3. Dentro de la carpeta ',
			        'tx8' => ' crea un archivo <em>test.js</em> que será el controlador, éste contendrá todas las funciones JavaScript necesarias y se ocupará de tareas como cargar '
			                 .'vistas, stores, enviar datos de formularios etc, por defecto se carga el controlador que se llama igual al módulo',
			        'tx9' => 'View',
			        'tx10' => '4. Dentro de la carpeta ',
			        'tx11' => ' crea un archivo <em>testView.js</em> que será una vista, ésta contendrá las definiciones de componentes que al ser renderizada se convertirán en elementos html',
			        'tx12' => 'Store',
			        'tx13' => '5. Dentro de la carpeta ',
			        'tx14' => ' crea un archivo <em>testStore.php</em> que será un store, podrá hacer consultas a la base de datos y devolver los datos para ser leídos por el controlador y las vistas',
			        'tx15' => 'La función <em>$this->parseStore</em> pinta lo necesario para definir un store en JavaScript con los datos, la función <em>$this->parseConfig</em> pasa una configuración',
			        'tx16' => 'Component',
			        'tx17' => '6. Dentro de la carpeta ',
			        'tx18' => ' crea un archivo <em>testComponent.js</em> que será un component, esto nos vale para crear componentes personalizados y reutilizables'
			            
			    ),
			    'controllers' => array (
			        'tx1' => 'Información general sobre controladores, sus funciones y configuraciones',
			        'tx2' => 'Controladores',
			        'tx3' => 'Por defecto se carga el controlador que se llama igual que el módulo, el módulo que se carga por defecto se configura en ',
			        'tx4' => 'Se suele usar la funcion <em>onload</em> para cargar los stores, vistas y componentes',
			        'tx5' => 'La función <em>cb.loadAll</em> carga varias vistas, stores y componentes en una sola llamada ajax',
			        'tx6' => 'Para ver como crear un controlador visita el apartado: ',
			        'tx7' => 'Por defecto',
			        'tx8' => 'onload',
			        'tx9' => ' para cargar otro móduclo podemos hacerlo añadiendo a la url <em>/nombre_del_modulo</em>',
			        'tx10' => 'Parámetros',
			        'tx11' => '1. <em>type</em> view, controller, store o component',
			        'tx12' => '2. <em>module</em> Nombre del módulo',
			        'tx13' => '3. <em>file</em> Nombre del archivo',
			        'tx14' => '4. <em>callback</em> Función callback',
			        'tx15' => 'Si no se pasa ningún parámetro para el nombre del archivo (Parámetro 3) por defecto toma el nombre del modulo.',
			        'tx16' => 'Funciones',
			        'tx17' => 'Dentro del controlador puedes definir todas las funciones que quieras',
			        'tx18' => 'Para ejecutar una función de un controlador usa <em>cb.ctr</em>',
			        'tx19' => '1. Nombre del controlador',
			        'tx20' => '2. Nombre de la función',
			        'tx21' => '3. Parámetro, array u objeto',
			        'tx22' => 'Rutas',
			        'tx23' => 'Las rutas se utilizan para ejecutar funciones que carguen vistas o realicen otras acciones, esto ocurre cuando el hash de la url cambia, es una pieza fundamental '
			                 .'para cargar contenido dinamicamente y que funcione el botón de ir atrás del navegador y al recargar la página siga manteniendose lo que estabamos viendo',
			        'tx24' => 'Puedes provar el funcionamiento en el módulo: ',
			        'tx25' => 'Ejemplos'
			    ),
		        'views' => array (
		            'tx1' => 'Información general sobre vistas y sus configuraciones',
		            'tx2' => 'Vistas',
		            'tx3' => 'Para ver como crear una vista visita el apartado: ',
		            'tx4' => 'Configuraciones',
		            'tx5' => 'Nombre de la vista',
		            'tx6' => 'Puntero del elemento donde será renderizada la vista',
		            'tx7' => 'Por defecto la vistas se renderizan al ser cargadas, definiendo esta variable a <em>false</em> lo evitamos',
		            'tx8' => 'Propiedad',
		            'tx9' => 'Valor',
		            'tx10' => 'Descripción',
		            'tx11' => 'Texto',
		            'tx12' => 'Función',
		            'tx13' => 'Función que se ejecuta después de renderizar',
		            'tx14' => 'Booleano',
		            'tx15' => 'Función que se ejecuta cuando se carga la vista',
		            'tx16' => 'Items',
		            'tx17' => 'La propiedad items acepta un objeto o array de objetos que serán los componentes, al ser renderizados se convertirán en elementos html, para ver todos los items disponibles visita el apartado: '
		        ),
		        'items' => array (
		            'tx1' => 'Información general sobre items disponibles y ejemplos básicos',
                    'tx2' => 'Items',
		            'tx3' => 'Existen 3 tipos de items, por un lado están los items de bootstrap que se crearán con los atributos específicos según su documentación y que pueden tener algunas peculiaridades, '
		                      .'también existen items propios de Ci-bus y los creados en base a componentes personalizados',
		            'tx4' => 'Ejemplos',
		            'tx5' => 'Para ver varios ejemplos de items puedes visitar el módulo: ',
		            'tx6' => 'examples',
		            'tx7' => 'Componente botones',
		            'tx8' => 'Clave',
		            'tx9' => 'Valor',
		            'tx10' => 'Peculiaridades',
		            'tx11' => 'Opcional',
		            'tx12' => 'Código de ejemplo',
		            'tx13' => 'Componentes barras de navegación',
		            'tx14' => 'Tipo',
		            'tx15' => 'Componente desplegables',
		            'tx16' => 'Métodos del componente',
		            'tx17' => 'Parámetros',
		            'tx18' => 'Acción',
		            'tx19' => "1. Items, 2. Record (opcional), 3. Nombre evento callback por defecto 'changeItems' (opcional)",
		            'tx20' => 'Añade opciones al desplegable',
		            'tx21' => "1. Array con posiciones de opciones (se permiten números negativos), 2. Nombre evento callback por defecto 'changeItems' (opcional)",
		            'tx22' => 'Elimina opciones del desplegable',
		            'tx23' => 'Elimina todas las opciones y después añade las nuevas',
		            'tx24' => 'Ninguno',
		            'tx25' => 'Abre las opciones del desplegable',
		            'tx26' => 'Cierra las opciones del desplegable',
		            'tx27' => 'Componente contenedores',
		            'tx28' => 'Valor mínimo en número',
		            'tx29' => 'Valor máximo en número',
		            'tx30' => 'Valor en número',
		            'tx31' => 'Componente barras de progreso',
		            'tx32' => '1. Posición de la barra en número',
		            'tx33' => 'Devuelve componente barra',
		            'tx34' => '1. Objeto o array de objetos con definiciones de barras',
		            'tx35' => 'Añade barras al progreso',
		            'tx36' => 'Elimina una barra',
		            'tx37' => '1. Valor en número',
		            'tx38' => 'Cambia el valor de la barra, el máximo o el mínimo',
		            'tx39' => '1. Texto, html plano o elemento',
		            'tx40' => 'Cambia el texto de una barra',
		            'tx41' => '1. Booleano true o false',
		            'tx42' => 'Pone o quita stripe a la barra',
		            'tx43' => 'Activa o desactiva la animación del stripe',
		            'tx44' => 'Componente tablas',
		            'tx45' => 'Componente iconos',
		            'tx46' => 'Tipo elemento html, por defecto es div',
		            'tx47' => 'Componente miniaturas',
		            'tx48' => 'Componente alertas',
		            'tx49' => 'Componente insignias',
		            'tx50' => 'Componente barra de herramientas',
		            'tx51' => 'Texto para el atributo aria-label',
		            'tx52' => 'Componente grupos',
		            'tx53' => 'Componente textos destacados',
		            'tx54' => 'Texto para el título',
		            'tx55' => 'Componente paneles',
		            'tx56' => 'Componente paneles de pestañas',
		            'tx57' => 'Componente filas y columnas',
		            'tx58' => 'Número del 1 al 12 u objeto',
		            'tx59' => 'Número del 1 al 12',
		            'tx60' => 'Componente formularios',
		            'tx61' => 'Componente interruptor',
		            'tx62' => 'Objeto con propiedades',
		            'tx63' => 'Texto',
		            'tx64' => 'Número o texto',
		            'tx65' => 'Destruir, encender, apagar, cambiar, activar, desactivar',
		            'tx66' => 'Componente svg polyline',
		            'tx67' => 'Número',
		            'tx68' => 'Color',
		            'tx69' => 'true (necesite tener un store) esto hace que los datos del store siempre estén sincronizados con la vista',
		            'tx70' => 'Componente cuadrícula',
		            'tx71' => 'Objeto columna con las propiedades mínimas name y text o field',
		            'tx72' => 'Posición en número',
		            'tx73' => 'Añade una columna',
		            'tx74' => 'Elimina una columna',
		            'tx75' => 'Objeto o array de objetos con datos (record)',
		            'tx76' => 'Añade una fila',
		            'tx77' => 'Elimina una fila'
		        ),
		        'propTxt' => array(
		            'tx1' => 'Información general sobre las propiedades disponibles para los items',
		            'tx2' => 'Propiedades',
		            'tx3' => 'Similitud'
		        ),
	            'funcTxt' => array(
	                    'tx1' => 'Información general sobre las funciones JavaScript de ci-bus',
	                    'tx2' => 'Parámetros',
	                    'tx3' => 'Acción',
	                    'tx4' => 'Return',
	                    'tx5' => 'Ejemplo',
	                    'tx6' => 'Más información',
	                    'tx7' => 'Información',
	                    'tx8' => 'Seleccionar'
	            ),
		        'properties' => array(
		            array(
		                'prop' => 'Propiedades css',
		                'action' => 'Aplica una propiedades de estilo',
		                'props' => 'css margin padding color border float shadow size weight align height width display cursor background',
		                'example' => "css: {
    color: 'RED',
    'font-weight': 600,
    border: '3px double #AAA'
}",
		                'simil' => 'https://api.jquery.com/css/'
		            ),
	                array(
	                        'prop' => 'Atributos html',
	                        'action' => 'Aplica atributos al elemento html principal',
	                        'props' => 'attr id disable disabled name type href value src placeholder reload target',
	                        'example' => "attr: {
    method: 'post',
    width: '200',
    custom: '1234'
}",
	                        'simil' => 'http://api.jquery.com/attr/'
	                ),
		            array(
		                'prop' => 'Eventos',
		                'props' => 'click dblclick mouseover mouseout focus blur',
		                'example' => "click: function () { alert('clicked!'); }",
		                'simil' => 'https://api.jquery.com/click/ https://api.jquery.com/dblclick/ https://api.jquery.com/mouseover/ https://api.jquery.com/mouseout/ https://api.jquery.com/focus/ https://api.jquery.com/blur/'
		            ),
		            array(
		                'prop' => 'require',
		                'param' => '1. Objeto con las propiedades xtype, module, name y data (opcional)',
		                'action' => 'Similar a la función cb.load',
		                'example' => "require: {xtype: 'store', module: 'test', name: 'test', data: {action: 'dotest'}}"
		            ),
		            array(
		                'prop' => 'cls',
		                'param' => '1. Las clases en texto plano separadas por espacios',
		                'action' => 'Aplica las clases al atributo class del elemento',
		                'example' => "cls: 'form-control'",
		                'simil' => 'https://api.jquery.com/addClass/'
		            ),
		            array(
		                'prop' => 'html',
		                'param' => '1. Plain html, Objeto o elemento',
		                'action' => 'Aplica un html como contenido del elemento',
		                'example' => "html: '<p>Test</p>'",
		                'simil' => 'http://api.jquery.com/html/'
		            ),
		            array(
		                'prop' => 'text',
		                'param' => '1. Plain html, Objeto o elemnto',
		                'action' => 'Añade un texto plano o html al contenido del elemento',
		                'example' => "text: 'Plain text'",
		                'simil' => 'http://api.jquery.com/append/'
		            ),
		            array(
		                'prop' => 'glyphicon',
		                'param' => '1. Texto nombre del icono',
		                'action' => 'Añade un icono de bootstrap',
		                'example' => "glyphicon: 'plus'",
		                'simil' => 'https://glyphicons.bootstrapcheatsheets.com/'
		            ),
		            array(
		                'prop' => 'hidden',
		                'param' => '1. true o false',
		                'action' => 'Oculta o muestra el elemento',
		                'example' => 'hidden: true',
		                'simil' => 'http://api.jquery.com/hide/ http://api.jquery.com/show/'
		            ),
		            array(
		                'prop' => 'badge',
		                'param' => '1. Texto para el badge',
                        'example' => "badge: 'texto'",
		                'action' => 'Añade un badge al elemento con el texto definido'
		            ),
		            array(
		                'prop' => 'pull',
		                'param' => '1. Texto left o right',
		                'example' => "pull: 'left'",
		                'action' => 'Añade la clase pull-left o pull-right al elemento'
		            ),
		            array(
		                'prop' => 'listeners',
		                'param' => '1. Objeto con definiciones de eventos',
		                'example' => "listeners: {
    click: function () { alert('clicked!'); }
}",
		                'simil' => 'http://api.jquery.com/on/'
		            )
		        ),
	            'functions' => array(
		            array(
		                'fun' => 'autoname',
		                'param' => "1. Prefijo (opcional) por defecto es 'autoname'",
		                'return' => "Devuelve un string único formado por prefijo, '_' y un número"
		            ),
		            array(
		                'fun' => 'autoid',
		                'param' => "1. Prefijo (opcional) por defecto es 'autoid'",
		                'return' => "Devuelve un string único formado por prefijo, '_' y un número"
		            ),
	                array(
	                    'fun' => 'ctr',
	                    'action' => 'Ejecuta una función de un controlador',
	                    'param' => '1. Nombre del controlador, 2. Nombre de la función, 3. Parámetro',
	                    'example' => "cb.ctr('test_controller', 'test_function', {a: 1, b: 2, c: 'tres'});"
	                ),
	                array(
	                    'fun' => 'get',
	                    'param' => "1. Tipo = 'view', 'store', 'controller' o 'component', 2. Nombre, 3. Dato a coger(opcional)",
	                    'return' => "Puede devolver un objeto, array o función según los parámetros que le pasemos",
	                    'example' => "cb.get('view', 'test_view', 'items');"
	                ),
	                array(
	                    'fun' => 'getCmp',
	                    'param' => "1. Puntero, xtype o elemento, 2. index (opcional)",
	                    'return' => "Devuelve el elemento con las funciones jQuery y las funciones del componente",
	                    'example' => "cb.getCmp('button');"
	                ),
	                array(
	                    'fun' => 'send',
	                    'param' => "1. Nombre formulario html, 2. Nombre module, 3. Nombre store, 4. Callback function",
	                    'action' => "Envía los datos de un formulario a un store",
	                    'example' => "cb.send('form_name', 'test_module', 'test_store', function(){ alert('Formulario enviado'); })"
	                ),
	                array(
	                    'fun' => 'load',
	                    'param' => "1. Tipo = 'view', 'store', 'controller' o 'component', 2. Nombre del modulo, 3. Nombre del archivo, 4. Variable para pasarle(opcional), 5. Callback function(opcional)",
	                    'action' => "Carga un archivo del modulo",
	                    'example' => "cb.load('store', 'test_module', 'test_filename', {id: 3}, function(){ alert('Archivo cargado') })",
	                    'more' => "En el nombre del archivo no se pone el subfijo View, Component o Store"
	                ),
	                array(
	                    'fun' => 'loadAll',
	                    'more' => "El funcionamiento es el mismo que cb.load(), con la diferencia que puedes cargar mas de un archivo en una sola llamada",
	                    'example' => "cb.loadAll([
    ['store', 'test_module', 'test_filename'],
    ['store', 'test_module', 'test_filename2']
], function(){ alert('Todo cargado'); });"
	                ),
	                array(
	                    'fun' => 'loadLineal',
	                    'info' => "El funcionamiento es el mismo que cb.loadAll(), con la diferencia de que hará una consulta ajax por cada archivo"
	                ),
	                array(
	                    'fun' => 'define',
	                    'param' => "1. Objeto con definiciones",
	                    'action' => "Crea un controlador, store, vista o componente de vista"
	                ),
	                array(
	                    'fun' => 'setDinamicValue',
	                    'param' => "1. Objeto a modificar, 2. Nombre atributo, 3. Valor atributo, 4. Niveles",
	                    'action' => "Modifica un valor en un objeto, a él y a sus items hasta X niveles definidos",
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
	                    'info' => "Esta función es igual a cb.setDinamicValue() con la diferencia de que no reemplaza valores ya asignados"
	                ),
	                array(
	                    'fun' => 'setValue',
	                    'param' => "1. Elemento html o puntero, 2. Valor o elemento html",
	                    'action' => "Si es un input aplica el valor como value sino, lo aplica como html",
	                    'example' => "cb.storeSet('#id-ele', 'example');"
	                ),
	                array(
	                    'fun' => 'setConfig',
	                    'param' => "1. Nombre config, 2. Valor config",
	                    'action' => "Guarda un valor de configuración hasta que se recarga la página",
	                    'example' => "cb.setConfig('lang', {title: 'Español', sg: 'es'});"
	                ),
	                array(
	                    'fun' => 'getConfig',
	                    'param' => "1. Nombre config, 2. Nombre subconfig (opcional)",
	                    'action' => "Devuelve un valor de configuración",
	                    'example' => "cb.getConfig('lang', 'sg');"
	                ),
	                array(
	                    'fun' => 'delConfig',
	                    'param' => "1. Nombre config, 2. Nombre subconfig (opcional)",
	                    'action' => "Elimina un valor de configuración",
	                    'example' => "cb.delConfig('lang');"
	                ),
	                array(
	                    'fun' => 'render',
	                    'param' => "1. Objeto (view), 2. Callback function",
	                    'action' => "Renderiza las definiciones de los items y ejecuta la callback function al terminar",
	                    'example' => "cb.render({items: {renderTo: 'body', text: 'Prueba'}}, function(){ alert('rendered');})"
	                ),
	                array(
	                    'fun' => 'extend',
	                    'param' => "1. Objeto , 2. Objeto",
	                    'action' => "Extiende un objeto a solo 1 nivel",
	                    'example' => "cb.extend({a: 1, b: 1}, {b: 2});",
	                    'return' => "{a: 1, b: 2}"
	                ),
	                array(
	                    'fun' => 'clone',
	                    'param' => "1. Objeto o array",
	                    'action' => "Clona un objeto o array",
	                    'example' => "cb.clone({xtype: 'button', text: 'Search'});",
	                    'return' => "El mismo objeto o array clonado"
	                ),
	                array(
	                    'fun' => 'commonProp',
	                    'param' => "1. Elemento html o puntero, 2. Objeto (propiedades)",
	                    'action' => "Aplica propiedades a un elemento como border, padding, listeners etc",
	                    'example' => "cb.commonProp('#id-ele', {background: 'red', click: function(){alert('oks');}});",
	                    'return' => "El elemento o puntero",
	                    'info' => '<a href="#loadview/properties">Haz click para ver las propiedades comunes disponibles</a>'
	                ),
	                array(
	                    'fun' => 'strpos',
	                    'param' => "1. Texto, 2. Palabra",
	                    'action' => "Busca una palabra en un texto",
	                    'example' => "cb.strpos('Esto es un texto', 'un');",
	                    'return' => "Posición de la palabra en el texto o false si no la encuentra"
	                ),
	                array(
	                    'fun' => 'enable',
	                    'param' => "1. Elemento html o puntero",
	                    'action' => "Elimina el attributo disable",
	                    'example' => "cb.enable('#input-test');"
	                ),
	                array(
	                    'fun' => 'disable',
	                    'param' => "1. Elemento html o puntero",
	                    'action' => "Añade el attributo disable",
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
	                    'param' => "1. Objeto (Definiciones para el popup)",
	                    'action' => "Crea un panel como un popup",
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
	                    'param' => "1. Elemento html o puntero, 2. Numero Offset",
	                    'action' => "Aplica un margin-top para que el objeto se muestre centrado verticalmente",
	                    'example' => "cb.verticalCenter('#id-capa-test', 100);"
	                ),
	                array(
	                    'fun' => 'effect',
	                    'param' => "1. Elemento html o puntero, 2. Objeto con configuración",
	                    'action' => "Aplica un efecto de entrada o salida según la configuración",
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
	                    'param' => "1. Objeto",
	                    'return' => "True si es un nodo, false si no lo es"
	                ),
	                array(
	                    'fun' => 'isElement',
	                    'param' => "1. Objeto",
	                    'return' => "True si es un elemento html, false si no lo es"
	                ),
	                array(
	                    'fun' => 'getStore',
	                    'param' => "1. Nombre del store, 2. Nombre del field (opcional)",
	                    'return' => "Sin field devuelve el store con sus funciones, con field devuelve los datos"
	                ),
	                array(
	                    'fun' => 'getView',
	                    'param' => "1. Nombre de la vista, 2. Nombre de la propiedad (opcional)",
	                    'return' => "Devuelve la vista o su propiedad"
	                ),
	                array(
	                    'fun' => 'getController',
	                    'param' => "1. Nombre del controlador, 2. Nombre de la propiedad o función (opcional)",
	                    'return' => "Devuelve el controlador o su propiedad"
	                ),
	                array(
	                    'fun' => 'getComponent',
	                    'param' => "1. Nombre del componente personalizado, 2. Nombre de la propiedad (opcional)",
	                    'return' => "Devuelve el componente o su propiedad"
	                ),
	                array(
	                    'fun' => 'fetchFromObject',
	                    'param' => "1. Objeto, 2. String Propiedades",
	                    'return' => "Devuelve la propiedad de un objeto",
	                    'example' => "cb.fetchFromObject({a: {b: {c: 'test'}}}, 'a.b.c');"
	                ),
	                array(
	                    'fun' => 'putToObject',
	                    'param' => "1. Objeto, 2. Datos, 3. String Propiedades",
	                    'return' => "Devuelve el objeto con los datos seteados",
	                    'example' => "cb.putToObject({a: {b: {c: null}}}, 'test', 'a.b.c');"
	                ),
	                array(
	                    'fun' => 'deleteToObject',
	                    'param' => "1. Objeto, 2. String Propiedades",
	                    'return' => "Devuelve el objeto con la propiedad eliminada",
	                    'example' => "cb.deleteToObject({a: {b: {c: 'test'}}}, 'a.b.c');"
	                ),
	                array(
	                    'fun' => 'isURL',
	                    'param' => '1. Url',
	                    'return' => 'Devuelve true si es una url válida o false si no lo es',
	                    'example' => "cb.isUrl('https://www.ci-bus.com');"
	                )
		        )
		    ));
		}
	}
?>
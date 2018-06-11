<?php 

	class Texts {
			
		public function __construct($CB, $data = array())
		{
		    
		    $CB->parseStore('texts', array(
		        'menu' => array(
		            'tx0' => 'Documentación',
		            'tx1' => 'Crear módulo',
		            'tx2' => 'Controladores'
			    ),
			    'createmodule' => array(
			        'tx1' => 'Instrucciones para crear un módulo nuevo llamado test',
			        'tx2' => 'Creación de carpetas y archivos',
			        'tx3' => '1. Crear una carpeta llamada <em>test</em> en ',
			        'tx4' => '2. Crea las carpetas <em>controller</em>, <em>view</em> y <em>store</em> en ',
			        'tx5' => ' y la carpeta <em>component</em> en ',
			        'tx6' => 'Controller',
			        'tx7' => '3. Dentro de la carpeta ',
			        'tx8' => ' crea un archivo <em>test.js</em> que será el controlador, éste contendrá todas las funciones javascript necesarias y se ocupará de tareas como cargar vistas, stores, enviar datos de formularios etc, por defecto se carga el controlador que se llama igual al módulo',
			        'tx9' => 'View',
			        'tx10' => '4. Dentro de la carpeta ',
			        'tx11' => ' crea un archivo <em>testView.js</em> que será una vista, ésta contendrá las definiciones de componentes que al ser renderizada se convertirán en elementos html',
			        'tx12' => 'Store',
			        'tx13' => '5. Dentro de la carpeta ',
			        'tx14' => ' crea un archivo <em>testStore.php</em> que será un store, podrá hacer consultas a la base de datos y devolver los datos para ser leídos por el controlador y las vistas',
			        'tx15' => 'La función <em>$this->parseStore</em> pinta lo necesario para definir un store en javascript con los datos, la función <em>$this->parseConfig</em> pasa una configuración',
			        'tx16' => 'Component',
			        'tx17' => '6. Dentro de la carpeta ',
			        'tx18' => ' crea un archivo <em>testComponent.js</em> que será un component, esto nos vale para crear componentes personalizados y reutilizables'
			            
			    ),
			    'controllers' => array(
			        'tx1' => 'Información general sobre controladores, sus funciones y configuraciones',
			        'tx2' => 'Controladores',
			        'tx3' => 'Por defecto se carga el controlador que se llama igual que el módulo, el módulo que se carga por defecto se configura en ',
			        'tx4' => 'Se suele usar la funcion <em>onload</em> para cargar los stores, vistas y componentes',
			        'tx5' => 'La función <em>cb.loadAll</em> carga varias vistas, stores y componentes en una sola llamada ajax',
			        'tx6' => 'Para ver como crear un controlador visita el apartado: ',
			        'tx7' => 'Por defecto',
			        'tx8' => 'onload',
			        'tx9' => ' para cargar otro móduclo podemos hacerlo añadiendo a la url <em>/nombre_del_modulo</em>'
			    )
		    ));
		}
	}
?>
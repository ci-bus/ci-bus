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
		        'home' => array(
		            'tx1' => '¿Qué es Ci-bus Framework?',
		            'tx2' => 'Ci-bus es un cojunto de herramientas javascript y php que te permitirá crear aplicaciones webs de manera fácil e intuitiva con las más novedosas técnicas de programación',
		            'tx3' => '¿Cuáles han sido mis motivaciones?',
		            'tx4' => 'Desarrollando Apps con Extjs para grandes compañias como el banco ING, Volskwagen, Curanum, ICIS+, Lufthansa entre otras pude apreciar grandes cadencias '
		                      .'y aspectos del framework que me resultaban odiosos, el peor de todos al igual que Angular es la absurda y desmesurada complejidad a la hora de hacer simples tareas, '
		                      .'creo firmemente que el \'código minimalista\' es el camino correcto, no me vale eso de... es que es muy potente... cuando un framework va ganando en complejidad '
		                      .'llegando al punto de dar más trabajo en vez de quitarlo para mi pierde el sentido, existen proyectos como jQuery que han sabido mantenerse en la simplicidad y la flexibilidad.<br>'
		                      .'Días tras día se me fueron ocurriendo pequeñas ideas y mejores modos de hacer las cosas, a la hora de aplicar estilos, listeners, crear elementos, aplicar datos... '
                              .'hasta llegar al día en que todo eso se condensó, sabía que usaría jQuery y pensé en bootstrap para los estilos me puse manos a la obra y como si lo estuviera recreando '
		                      .'solté más de mil lineas de códigos en a penas unas horas las cuales creaban elementos html en base a definiciones en objetos javascript, ci-bus mi segundo framework daba '
		                      .'sus primeros coletazos de vida :)',
		            'tx5' => '¿Cuál es el objetivo?',
		            'tx6' => 'Dejar constancia de mis capacidades como arquitecto de software creando un framework muy fácil de usar, simplicidad ante todo, versatilidad y ligereza, '
		                      .'hacer que los programadores disfruten trabajando, que hagan cosas locas de las que te hacen pensar... esto va a explotar... y que funcione :D',
		            'tx7' => 'Datos de contacto',
		            'tx8' => 'Donativos',
		            'tx9' => 'Si te ha gustado Ci-bus haz un donativo de la cantidad que tu quieras apoyando al desarrollo haciendo click aquí'
		        ),
			    'createmodule' => array(
			        'tx1' => 'Instrucciones para crear un módulo nuevo llamado test',
			        'tx2' => 'Creación de carpetas y archivos',
			        'tx3' => '1. Crear una carpeta llamada <em>test</em> en ',
			        'tx4' => '2. Crea las carpetas <em>controller</em>, <em>view</em> y <em>store</em> en ',
			        'tx5' => ' y la carpeta <em>component</em> en ',
			        'tx6' => 'Controller',
			        'tx7' => '3. Dentro de la carpeta ',
			        'tx8' => ' crea un archivo <em>test.js</em> que será el controlador, éste contendrá todas las funciones javascript necesarias y se ocupará de tareas como cargar '
			                 .'vistas, stores, enviar datos de formularios etc, por defecto se carga el controlador que se llama igual al módulo',
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
			        'tx9' => ' para cargar otro móduclo podemos hacerlo añadiendo a la url <em>/nombre_del_modulo</em>',
			        'tx10' => 'Parámetros',
			        'tx11' => "1. Texto 'view', 'controller', 'store' o 'component'",
			        'tx12' => '2. Nombre del módulo',
			        'tx13' => '3. Nombre del archivo',
			        'tx14' => '4. Función callback',
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
			    )
		    ));
		}
	}
?>
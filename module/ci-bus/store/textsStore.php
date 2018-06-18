<?php 

	class Texts {
			
		public function __construct($CB, $data = array())
		{
		    
		    $CB->parseStore('texts', array(
		        'general' => array (
		            'tx1' => 'Probar código'
		        ),
		        'menu' => array (
		            'tx0' => 'Documentación ',
		            'tx1' => 'Crear módulo',
		            'tx2' => 'Controladores',
		            'tx3' => 'Vistas',
		            'tx4' => 'Items'
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
		        ),
		        'home' => array (
		            'tx1' => '¿Qué es Ci-bus Framework?',
		            'tx2' => 'Ci-bus es un cojunto de herramientas javascript y php que te permitirá crear aplicaciones webs de manera fácil e intuitiva con las más novedosas técnicas de programación',
		            'tx3' => '¿Cuáles han sido mis motivaciones?',
		            'tx4' => 'Desarrollando Apps con Extjs para grandes compañias como el banco ING, Volskwagen, Curanum, ICIS+, Lufthansa entre otras pude apreciar grandes cadencias '
		                      .'y aspectos del framework que me resultaban odiosos, el peor de todos al igual que Angular es la absurda y desmesurada complejidad a la hora de hacer simples tareas, '
		                      .'creo firmemente que el \'código minimalista\' es el camino correcto, no me vale eso de... es que es muy potente... cuando un framework va ganando en complejidad '
		                      .'llegando al punto de dar más trabajo en vez de quitarlo para mi pierde el sentido, existen proyectos como jQuery que han sabido mantenerse en la simplicidad y la flexibilidad.<br>'
		                      .'Días tras día se me fueron ocurriendo pequeñas ideas y mejores modos de aplicar estilos, listeners, crear elementos, cargar datos... '
                              .'hasta llegar al día en que todo eso se condensó, sabía que usaría jQuery y pensé en bootstrap para los estilos, me puse manos a la obra y como si lo estuviera recreando '
		                      .'solté más de mil lineas de códigos en a penas unas horas las cuales creaban elementos html en base a definiciones en objetos javascript, ci-bus mi segundo framework daba '
		                      .'sus primeros coletazos de vida',
		            'tx5' => '¿Cuál es el objetivo?',
		            'tx6' => 'Dejar constancia de mis capacidades como arquitecto de software creando un framework muy fácil de usar, simplicidad ante todo, versatilidad y ligereza, '
		                      .'hacer que los programadores disfruten trabajando haciendo cosas locas de las que te hacen pensar... esto va a explotar... y que funcione',
		            'tx7' => 'Datos de contacto',
		            'tx8' => 'Donativos',
		            'tx9' => 'Si te ha gustado Ci-bus haz click aquí para hacer un donativo apoyando al desarrollo'
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
		            'tx17' => 'La propiedad items acepta un objeto o array de objetos que serán los componentes que al ser renderizados se convertirán en elementos html, para ver todos los items disponibles visita el apartado: '
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
		            'tx31' => 'Componente barras de progreso'
		        )
		    ));
		}
	}
?>
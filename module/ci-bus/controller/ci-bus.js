cb.define({
	xtype: 'controller',
	name: 'ci-bus',
	
	route: {
		'#loadview/:str': 'loadview',
		'#home': 'loadhome'
	},
	
	loadview: function (hash) {
		cb.render(cb.getView(hash[1]));
		$('pre code').each(function(i, block) {
		    hljs.highlightBlock(block);
		});
	},
	
	loadhome: function () {
		cb.render(cb.getView('ci-bus'));
	},
	
	onload: function () {
		
		cb.define({
            xtype: 'store',
            name: 'texts',
            data: {
            	menu: {
            		tx0: 'Documentación',
            		tx1: 'Crear módulo'
            	},
            	createmodule: {
            		tx1: 'Instrucciones para crear un módulo nuevo llamado test',
                	tx2: 'Creación de carpetas',
                	tx3: '1. Crear una carpeta llamada <em>test</em> en ',
                	tx4: '2. Crea las carpetas <em>controller</em>, <em>view</em> y <em>store</em> en ',
                	tx5: ' y la carpeta <em>component</em> en ',
                	tx6: 'Controller',
                	tx7: '3. Dentro de la carpeta ',
                	tx8: ' crea un archivo <em>test.js</em> que será el controlador, éste contendrá todas las funciones javascript necesarias y se ocupará de tareas como cargar vistas, stores, enviar datos de formularios etc'
            	}
            }
		});
		
		$.cachedScript("libraries/highlight/styles/tomorrow.css", "css");
		$.cachedScript("libraries/highlight/highlight.pack.js", "js").done(function () {
			cb.loadAll([
			    //['component', 'gotorave', 'review'],
				['store', 'ci-bus', 'code'],
				['view', 'common', 'base'],
				['view', 'ci-bus', 'mainmenu'],
				['view', 'ci-bus', 'doc/createmodule'],
				['view', 'ci-bus', 'ci-bus']
			], function () {
				console.log('loaded');
				cb.router.hashchange();
			});
		});
	}
});
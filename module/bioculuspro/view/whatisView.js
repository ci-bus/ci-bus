cb.define({

	xtype: 'view',
	name: 'whatis',
	appendTo: '#content',

	items: [{
		xtype: 'row',
		css: {'max-width': '980px'},
		margin: 'auto',
			
		items: [{
			xtype: 'col',
			size: 12,
			text: "¿Qué es?",
			margin: '50px 0px 10px 0px',
			css: {"text-align":"center",'font-size': 32, 'font-weight': 100}

		}]
	},{
		xtype:'row',
		css: {'max-width': '980px'},
		margin: 'auto',
				
		items: [{
			xtype: 'col',
			size: 6,
			
			items: [{
				xtype: 'div',
				text: "¿Que es bioculus?",
				css: {"text-align":"center",'font-size': 24}
			},{
				xtype: 'div',
				padding: '0px 10%',
				margin: '10px 0px 0px 0px',
				text: "Bioculus es un sistema de comunicación diseñado para copiar en los exámenes. Monorean consiste en un pinganillo invisible del tamaño de una lenteja que deberás de introducir en tu oído. Por el pinganillo podrás escuchar a tu compañero alto y claro de manera totalmente discreta.",
			}]
		},{
			xtype: 'col',
			size: 6,
			
			items: [{
				xtype: 'div',
				text: "¿Como funciona?",
				css: {"text-align":"center",'font-size': 24},
			},{
				xtype: 'div',
				padding: '0px 10%',
				margin: '10px 0px 0px 0px',
				text: "Conecta tu modelo de Bioculus con tu teléfono móvil, colócate el anillo inductor en el cuello e introduce el pinganillo en tu oído.",
			}]
		}]
	},{
		xtype: 'div',
		css: {'text-align': 'center'},
		items: {
			xtype: 'img',
			src: 'https://www.monorean.com/assets/I18n/es/infography_what_is-46e48b439a92d8a37913ef47ee8277f3.png'
		}
	}]
});
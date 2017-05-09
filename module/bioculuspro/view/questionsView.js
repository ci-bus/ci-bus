cb.define({

	xtype: 'view',
	name: 'questions',
	appendTo: '#content',
	
	items: [{
		xtype: 'div',
		css: {"background-color": "#013b6f", "padding": "110px 10px 35px 10px" },
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			items: [{
				xtype: 'col',
				color: 'white',
				size: 12,
				text: "Preguntas frecuentes",
				css: {'font-size': 32, padding: 0, 'font-weight': 100, 'padding-bottom': '15px','text-align':'center'}
			}]
		},{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			items: [{
				xtype: 'col',
				size: 12,
				items:[{
					xtype: 'group',
					type: 'vertical',
					width: "100%",
					items: [{
						xtype: 'button',
						text: '¡Lo necesito ya!',
						glyphicon: 'chevron-down',
						attr: {
							'data-toggle': "collapse",
							'data-paren': "#accordion"
						},
						href: "#collapse1"
						
					},{
						xtype: 'div',
						cls: 'panel-collapse collapse',
						id: 'collapse1',
						background: 'white',
						text: 'No hay problema, los pinganillos de nuestra tienda se mandan mediante envío 24 horas y el paquete se despacha el mismo día que se recibe el pago. Por lo tanto el pinganillo para exámenes te llegará al día siguiente de hacer el pedido.<br><br>Nota: Los tiempos de envío podrían variar según el país de envío, cuando realices el pedido de tu pinganillo a través de la página web se indicará el tiempo de envío según el tipo de envío.',
						padding: 20
					},{
						xtype: 'button',
						text: '¿Envío gratuito?',
						attr: {
							'data-toggle': "collapse",
							'data-paren': "#accordion"
						},
						href: "#collapse2"
					},{
						xtype: 'div',
						cls: 'panel-collapse collapse',
						id: 'collapse2',
						background: 'white',
						text: 'No hay problema, los pinganillos de nuestra tienda se mandan mediante envío 24 horas y el paquete se despacha el mismo día que se recibe el pago. Por lo tanto el pinganillo para exámenes te llegará al día siguiente de hacer el pedido.<br><br>Nota: Los tiempos de envío podrían variar según el país de envío, cuando realices el pedido de tu pinganillo a través de la página web se indicará el tiempo de envío según el tipo de envío.',
						padding: 20
					}]
				}]
			}]
		}]
	}]
		
});
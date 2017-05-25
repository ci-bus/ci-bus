cb.define({

	xtype: 'view',
	name: 'questions',
	appendTo: '#content',
	
	items: [{
		xtype: 'div',
		id: 'preguntas',
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
					store:"home",
					type: 'vertical',
					width: "100%",
					items: [{
						xtype: 'button',
						field:"preguntas",
						items: [{
							xtype: 'div',
							text: '{texto1}',
							glyphicon: 'chevron-down',
							attr: {
								'data-toggle': "collapse",
								'data-paren': "#accordion"
							},
							href: "#colla{id}"
							
						},{
							xtype: 'div',
							css: {'word-wrap': 'break-word'},
							cls: 'panel-collapse collapse',
							id: 'colla{id}',
							background: 'white',
							text: '{texto2}',
							padding: 20
						}]
					}]
				}]
			}]
		}]
	}]
		
});
cb.define({

	xtype: 'view',
	name: 'moreinfo',
	appendTo: '#content',
	
	items: [{
		xtype: 'div',
		id: 'caracteristicas',
		store: 'producto',
		field: 'productos',
		css: {"background-color": "#{color_back_caract}", "padding": "90px 10px 20px 10px" },
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			items: [{
				xtype: 'col',
				size: 12,
				text: "{caract_titulo}",
				css: {'font-size': 32, padding: 0, 'font-weight': 100, 'text-align':'center', 'padding-bottom': 10}
			}]
		},{
			xtype: 'thumbnail',
			css: {'max-width': '980px','margin-bottom':'100px'},
			background: 'none',
			padding: 10,
			margin: 'auto',
			items: {
				xtype: 'row',
				css: {'max-width': '980px'},
				margin: 'auto',
				items: [{
					xtype: 'col',
					store:"producto",
					field:"caracteristicas",
					css: {"background-color": "#{color}", "padding": 30},
					cls: 'caract',
					size: 6,
					items: {
						xtype: 'row',
						css: {'max-width': '980px'},
						margin: 'auto',
						color: '#AAA',
						items: [{
							xtype: 'col',
							size: 3,
							items: [{
								xtype: 'img',
								width: '100%',
								src: "sistema/{imagen}"
							}]
						},{
							xtype: 'col',
							size: 9,
							text: "{texto}"
						}]
					}
				}]
			}
		}]
	}]
});
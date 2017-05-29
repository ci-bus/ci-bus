cb.define({

	xtype: 'view',
	name: 'moreinfo',
	appendTo: '#content',
	
	items: [{
		xtype: 'div',
		id: 'aunmas',
		css: {"background-color": "#e5ebdc", "padding": "110px 10px 35px 10px" },
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			items: [{
				xtype: 'col',
				size: 12,
				text: "Características técnicas del pinganillo BioculusPro",
				css: {'font-size': 32, padding: 0, 'font-weight': 100, 'padding-bottom': '50px','text-align':'center'}
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
					field:"aunmas",
					css: {"background-color": "#{color}", "padding": 30, 'max-height': 250, 'min-height': 250},
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
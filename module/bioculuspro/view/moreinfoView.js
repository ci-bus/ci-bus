cb.define({

	xtype: 'view',
	name: 'moreinfo',
	appendTo: '#content',
	
	items: [{
		xtype: 'div',
		css: {"background-color": "#e5ebdc", "padding": "110px 10px 35px 10px" },
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			items: [{
				xtype: 'col',
				size: 12,
				text: "¿Aún más?",
				css: {'font-size': 32, padding: 0, 'font-weight': 100, 'padding-bottom': '15px'}
			}]
		},{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			color: '#AAA',
			items: [{
				xtype: 'col',
				store:"home",
				field:"aunmas",
				css: {"background-color": "#fff", "padding": 30, "border-right":"1px solid #e5ebdc", "border-bottom": "1px solid #e5ebdc"},
				size: 6,
				items: {
					xtype: 'row',
					css: {'max-width': '980px'},
					margin: 'auto',
					color: '#AAA',
					items: [{
						xtype: 'col',
						size: 2,
						items: [{
							xtype: 'img',
							width: '100%',
							src: "{imagen}"
						}]
					},{
						xtype: 'col',
						size: 10,
						text: "{texto}"
					}]
				}
			}]
		}]
	}]
});
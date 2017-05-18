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
				text: "Características técnicas del pinganillo BioculusPro",
				css: {'font-size': 32, padding: 0, 'font-weight': 100, 'padding-bottom': '50px','text-align':'center'}
			}]
		},{
			xtype: 'thumbnail',
			css: {'max-width': '980px','margin-bottom':'100px'},
			margin: 'auto',
			items: {
				xtype: 'row',
				css: {'max-width': '980px'},
				margin: 'auto',
				color: '#AAA',
				items: [{
					xtype: 'col',
					store:"home",
					field:"aunmas",
					css: {"background-color": "#fff", "padding": 30},
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
								src: "assets/img/anillo.png"
							}]
						},{
							xtype: 'col',
							size: 9,
							text: "La tecnología del pinganillo Monorean® Pro permite que el collar sea igual de fino que un papel. Si lo escondes debajo de una camiseta fina de algodón no se notará en absoluto."
						}]
					}
				}]
			}
		}]
	}]
});
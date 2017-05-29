cb.define({

	xtype: 'view',
	name: 'instalacion',
	appendTo: '#content',
	
	items: [{
		xtype: 'div',
		id: 'install',
		store: 'producto',
		field: 'productos',
		background:'#{color_back_install}',
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
				
			items: [{
				xtype: 'col',
				size: 12,
				text: "{install_titulo}",
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
					xtype: 'img',
					width: '100%',
					src: 'sistema/{install_imagen}',
					
				}]
			},{
				xtype: 'col',
				size: 6,
				//hacer lista aqui
				items: [{
					xtype: 'div',
					padding: '0px 10%',
					margin: '10px 0px 0px 0px',
					text: "{install_html}",
				}]
			}]
		}]
	}]
});


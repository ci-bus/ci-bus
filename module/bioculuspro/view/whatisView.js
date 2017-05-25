cb.define({

	xtype: 'view',
	name: 'whatis',
	appendTo: '#content',

	items: [{
		xtype: 'div',
		store: 'home',
		field: 'quees',
		id: 'quees',
		background: '#{color}',
		
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			
			items: [{
				xtype: 'col',
				size: 12,
				text: "{texto_cabecera}",
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
					text: "{texto1}",
					css: {"text-align":"center",'font-size': 24}
				}]
			},{
				xtype: 'col',
				size: 6,
				
				items: [{
					xtype: 'div',
					text: "{texto2}",
					css: {"text-align":"center",'font-size': 24},
				}]
			}]
		},{
			xtype: 'div',
			css: {'text-align': 'center'},
			items: {
				xtype: 'img',
				src: 'sistema/{imagen}',
				css: {'margin-top': 50, 'margin-bottom': 50}
			}
		}]
	}]
});
cb.define({

	xtype: 'view',
	name: 'whatis',
	appendTo: '#content',
	items: [{
		store:'producto',
		field:'productos',
		xtype: 'row',
		css: {'max-width': '980px'},
		margin: 'auto',
			
		items: [{
			xtype: 'col',
			size: 12,
			text: "{whatis_titulo}",
			margin: '50px 0px 10px 0px',
			css: {"text-align":"center",'font-size': 32, 'font-weight': 100}

		}]
	},{
		store:'producto',
		field:'productos',
		xtype:'row',
		css: {'max-width': '980px'},
		margin: 'auto',
				
		items: [{
			xtype: 'col',
			size: 6,
			defaults: {
				width: "40%",
				float:"left",
				margin:'5%',
			},
			items:[{
				xtype:'thumbnail',
				store: 'producto',
				field: 'imagenes',
				items: [{
					xtype: 'img',
					src: 'sistema/{imagen}',
				}]
			}]
		},{
			xtype: 'col',
			size: 6,
			
			items: [{
				xtype: 'div',
				padding: '0px 10%',
				margin: '30px 0px 0px 0px',
				text: "{whatis_html}",
			},{
					xtype: 'button',
					type: 'primary',
					text: '{whatis_but_buy_text}',
					margin: '30px 10px 0px 32px',
					width: '80%',
					height: '50px'
			}]
		}]
	}]
});


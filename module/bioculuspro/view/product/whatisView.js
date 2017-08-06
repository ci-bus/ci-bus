cb.define({

	xtype: 'view',
	name: 'whatis',
	appendTo: '#content',
	
	onLoad: function(){
		$('.gallery').featherlightGallery({
			gallery: {
				fadeIn: 300,
				fadeOut: 300
			},
			openSpeed:    300,
			closeSpeed:   300
		});
		$('.gallery2').featherlightGallery({
			gallery: {
				next: 'next »',
				previous: '« previous'
			},
			variant: 'featherlight-gallery2'
		});
	},
	
	items: [{
		store:'producto',
		field:'productos',
		xtype: 'row',
		id: 'whatis',
		css: {'max-width': '980px'},
		margin: 'auto',
			
		items: [{
			xtype: 'col',
			size: 12,
			text: "{whatis_titulo}",
			margin: '80px 0px 10px 0px',
			css: {"text-align":"center",'font-size': 32, 'font-weight': 100}

		}]
	},{
		store:'producto',
		field:'productos',
		xtype:'row',
		css: {'max-width': '980px', 'padding-bottom': '30px'},
		margin: 'auto',
				
		items: [{
			xtype: 'col',
			size: 6,
			css: {'padding-top': '50px'},
			defaults: {
				width: "40%",
				float:"left",
				margin:'5%',
			},
			items:[{
				store: 'producto',
				field: 'imagenes',
				xtype: 'a',
				href: 'sistema/{imagen}',
				cls: 'thumbnail gallery',
				items: {
					xtype: 'img',
					src: 'sistema/{imagen}'
				}
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
					height: '50px',
					click: function(){
						cb.ctr('bioculuspro', 'comprar', $(this).getRecord())
					}
			}]
		}]
	}]
});


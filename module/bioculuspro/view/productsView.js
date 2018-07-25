cb.define({

	xtype: 'view',
	name: 'products',
	appendTo: '#content',

	items: [{
		xtype: 'div',
		store: 'home',
		field: 'colores',
		css: {'background': '#{productos_color}'},
		padding: 10,
		id: 'productos',
		
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			color: '#AAA',
			
			items: [{
				xtype: 'col',
				size: 12,
				text: "Los productos de BioculusPro",
				css: {"text-align":"center", "font-size":"32px", "margin-top":"80px","margin-bottom":'15px',"font-weight":100},
				color: "#444"
			}]
		},{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			color: '#333',
			items: [{
				store: 'home',
				field: 'productos',
				xtype: 'col',
				cls: 'col-xs-{col}',
				items: [{
					xtype: 'div',
					margin: 10,
					css: {
						'background': '#fff',
						'-webkit-box-shadow': '0px 0px 15px 0px rgba(170,170,170,1)',
						'-moz-box-shadow': '0px 0px 15px 0px rgba(170,170,170,1)',
						'box-shadow': '0px 0px 15px 0px rgba(170,170,170,1)'
					},
					items: [{
						xtype: 'img', 
						src: 'sistema/{imagen}',
						css: {'width': '60%', cursor: 'pointer'},
						margin: '10% 20%',
						click: function(){
							cb.ctr('bioculuspro', 'load_product', $(this).getRecord())
						},
						listeners: {
							load: function(){
								cb.ctr('bioculuspro', 'adapt_products');
							}
						}
					},{
						xtype:'div',
						padding: '0px 30px 0px 30px',
						text:'{texto}'
					},{
						xtype: 'row',
						margin: '40px 10px 50px 10px',
						items: [{
							xtype: 'col',
							css: {'text-align':'center'},
							size: 5,
							items: [{
								xtype: 'h3',
								text: '{precio} €',
								css: {'margin-top': '0px', 'margin-bottom': '0px'}
							},{
								xtype:'small',
								text: 'iva incluido<br><br>',
								css: {'margin-bottom': '0px'}
							}]
							
						},{
							xtype: 'col',
							size: 7,
							items: [{
								xtype: 'button',
								type: 'primary',
								text: '¡CÓMPRALO AHORA!',
								width: '100%',
								height: '50px',
								click: function(){
									cb.ctr('bioculuspro','comprar',$(this).getRecord());
								}
								
							}] 
							
						}]
					}]
				}]
			}]
		}]	
	}]
});
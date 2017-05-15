cb.define({

	xtype: 'view',
	name: 'products',
	appendTo: '#content',

	items: [{
		xtype: 'div',
		css: {'background': '#f1f1f1'},
		padding: 10,
		
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			color: '#AAA',
			
			items: [{
				xtype: 'col',
				size: 12,
				text: "Los productos de BioculusPro",
				css: {"text-align":"center", "font-size":"32px", "margin-top":"60px","margin-bottom":'15px',"font-weight":100},
				color: "#444"
			}]
		},{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			color: '#333',
			
			items: [{
				xtype: 'col',
				css: {
					'background': '#fff',
					'-webkit-box-shadow': '0px 0px 15px 0px rgba(170,170,170,1)',
					'-moz-box-shadow': '0px 0px 15px 0px rgba(170,170,170,1)',
					'box-shadow': '0px 0px 15px 0px rgba(170,170,170,1)'
				},
				size: 4,
				items: [{
					xtype: 'img', 
					src: 'assets/img/producto1.png',
					css: {'width': '60%'},
					margin: '10% 20%'
				},{
					xtype: 'div',
					padding: '0px 30px 0px 30px',
					text: 'Bioculuspro',
					css: {'font-size': '24px'},
					color:'black',
				},{
					xtype:'div',
					padding: '0px 30px 0px 30px',
					text:'La versión avanzada de nuestro pinganillo para exámenes. <br><br>Mejores prestaciones para garantizar el aprobado en tus exámenes con nuestos pinganillos invisibles.'
				},{
					xtype: 'row',
					margin: '40px 0px 30px 0px',
					items: [{
						xtype: 'col',
						css: {'text-align':'right'},
						size: 5,
						items: [{
							xtype: 'h3',
							text: '1400€',
							css: {'margin-top': '0px'}
						},{
							xtype:'small',
							text: 'iva incluido'
						}]
						
					},{
						xtype: 'col',
						size: 7,
						items: [{
							xtype: 'button',
							type: 'primary',
							text: 'Comprar',
							width: '100%',
							height: '50px'
						}] 
						
					}]
				}]
				
			}]
		}]	
	}]
});
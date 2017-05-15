cb.define({

	xtype: 'view',
	name: 'landing',
	appendTo: '#content',

	items: [{
		xtype: 'div',
		css: {'position':'relative', 'height': '500px'},
		width: '100%',
		items: [{
			xtype: 'div',
			css:{'position':'absolute'},
			store: "home",
			background: '#cce8f6',
			width: '100%',
			items: [{
				xtype: 'row',
				css: {'max-width': '980px', 'height': '500px', 'background-size': 'cover'},
				margin: 'auto',
				
				items: [{
					xtype: 'col',
					size: 6,
					items: [{
						xtype: 'img', 
						src: 'assets/img/producto1.png',
						css: {'width': '60%'},
						margin: '100px 20% 0px 20%'
					},{
						xtype: 'row',
						margin: '40px 0px 30px 0px',
						items: [{
							xtype: 'col',
							css: {'text-align':'center'},
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
								width: 'calc(100% - 50px)',
								height: '50px',
								
							}] 
							
						}]
					}]
				},{
					xtype: 'col',
					size: 6,
					items: [{
						xtype: 'div',
						text: "BioculusPro",
						css: {"font-size":"32px", "font-weight":100, "text-align":"center","margin-top":"100px"},
						items: [{
							xtype:'div',
							text: "La versión básica de nuestro pinganillo para exámenes ¡la evolución de las clásicas chuletas para examen!",
							css: {"font-size":"22px", "font-weight":120, "text-align":"center", "margin-bottom":"120px" }
						}]
						
					}]
				}]
			}]
		},{
			xtype: 'div',
			css:{'position':'absolute', 'z-index': 888888},
			width: '100%',
			id: 'submenu',
			items: {
				xtype: 'row',
				css: {'max-width': '980px'},
				margin: 'auto',
				
				items: {
					xtype: 'col',
					size: 12,
					items: {
						xtype: 'group',
						width: '100%',
						css: {'margin-top': 20},
						defaults: {
							xtype: 'button',
							margin: 0,
							padding: '15px 0px',
							width: '20%',
							background: "#00a7ed",
							color: "#e1f6ff",
							css: {"border-color":"#0097dd"}
						},
						items: [{
							store:"home",
							field:"submenu",
							text: "{texto}",
							glyphicon: '{imagen}'
						}]
					}
				}
			}
		}]
	}]
});
cb.define({

	xtype: 'view',
	name: 'footer',
	appendTo: 'footer',

	items: [{
		xtype: 'div',
		text:'Se aceptan pagos por tarjeta de crédito <img src="assets/img/visa_icon.png"><img src="assets/img/master_ico.png"> de forma segura con pasarela de pago <img src="assets/img/redsys.png">',
		css: {'text-align':'center', 'padding': 30, 'font-size': '17px', "font-weight": 100, 'letter-spacing': '2px', "background-color": "#fff"},
		items: [{
			xtype: 'div',
			margin: "20px 0px 0px 0px",
			items: [{
				xtype:'a',
				text: "enlace 1",
				href: "#",	
			}]
		}]
	}] 
});
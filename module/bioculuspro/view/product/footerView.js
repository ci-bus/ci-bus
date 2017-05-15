cb.define({

	xtype: 'view',
	name: 'footer',
	appendTo: 'footer',

	items: [{
		xtype: 'div',
		store:"home",
		field:"piedepagina",
		text: "{texto}",
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
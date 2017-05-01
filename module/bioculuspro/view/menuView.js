cb.define({

	xtype: 'view',
	name: 'menu',
	appendTo: 'header',

	items: [{
		xtype: 'div',
		css: {'background': 'url(assets/img/backmenu.jpg)'},
		padding: 10,
		
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			color: '#AAA',
			
			items: [{
				xtype: 'col',
				size: 3,
				text: 'Columna 1'
			},{
				xtype: 'col',
				size: 3,
				text: 'Columna 2'
			},{
				xtype: 'col',
				size: 3,
				text: 'Columna 3'
			},{
				xtype: 'col',
				size: 3,
				text: 'Columna 4'
			}]
		}]
	}]
});
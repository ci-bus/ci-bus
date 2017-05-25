cb.define({

	xtype: 'view',
	name: 'menu',
	appendTo: 'header',
	store:'producto',
	field:'productos',
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
				items: [{
					xtype: 'img',
					src: 'assets/img/bioico.png'
				}]
			},{
				xtype: 'col',
				size: 3,
				text: 'Columna 2',
				click: function(){
					cb.ctr("bioculuspro","load_product")
				}
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
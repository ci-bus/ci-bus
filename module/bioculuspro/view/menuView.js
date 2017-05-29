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
			color: '#fff',
			
			items: [{
				xtype: 'col',
				size: 3,
				items: [{
					xtype: 'img',
					src: 'assets/img/bioico.png',
					cursor: 'pointer',
					click: function(){
						cb.ctr('bioculuspro', 'onload');
					}
				}]
			},{
				xtype: 'col',
				
				store: 'home',
				field: ['productos','menucol'],
				
				css: {'text-align': 'center', 'margin-top': 12},
				cursor: 'pointer',
				size: '{menucol}',
				click: function(){
					cb.ctr("bioculuspro","load_product", $(this).getRecord());
				},
				mouseover: function(){
					$(this).stop().animate({zoom: '120%', 'margin-top': 5}, 100);
				},
				mouseout: function(){
					$(this).stop().animate({zoom: '100%', 'margin-top': 12}, 100);
				},
				
				items: [{
					xtype: 'div',
					css: {'font-weight': 100},
					size: '13px',
					text: '{but_menu_text1}'
				},{
					xtype: 'div',
					css: {'font-weight': 600},
					size: '21px',
					text: '{but_menu_text2}'
				}]
			},{
				xtype: 'col',
				size: 1,
				css: {'margin-top': 10},
				defaults: {
					css: {'text-align': 'center'},
				},
				mouseover: function(){
					$(this).stop().animate({zoom: '120%', 'margin-top': 2}, 100);
				},
				mouseout: function(){
					$(this).stop().animate({zoom: '100%', 'margin-top': 10}, 100);
				},
				click: function(){
					cb.load('view', 'bioculuspro', 'contacto');
				},
				items: [{
					xtype: 'div',
					width: '100%',
					color: 'white',
					items: [{
						xtype: 'glyphicon',
						size: 27,
						type: 'envelope'
					}]
				},{
					xtype: 'div',
					text: 'Contacto'
				}]
			}]
		}]
	}]
});
cb.define({

	xtype: 'view',
	name: 'menu',
	appendTo: 'header',

	items: [{
		xtype: 'div',
		css: {
			'background': '#fff',
			'-webkit-box-shadow': '0px 2px 10px 0px rgba(47, 159, 213,0.2)', 
			'-moz-box-shadow': '0px 2px 10px 0px rgba(47, 159, 213,0.2)',
			'box-shadow': '0px 2px 10px 0px rgba(47, 159, 213,0.2)',
			'border-bottom': '1px solid #2f9fd5'
		},
		padding: '10px 10px 0px 10px',
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			color: '#000',
			
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
					var record = $(this).getRecord();
					location.href = '/?producto='+record.but_menu_text1+'-'+record.but_menu_text2;
					//cb.ctr("bioculuspro","load_product", $(this).getRecord());
				},
				mouseover: function(){
					$(this).stop().animate({zoom: '120%', 'margin-top': 5}, 100);
				},
				mouseout: function(){
					$(this).stop().animate({zoom: '100%', 'margin-top': 12}, 100);
				},
				
				items: [{
					xtype: 'div',
					color: '#2f9fd5',
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
				size: 3,
				items: {
					xtype: 'div',
					padding: '5px 0 0 0',
					defaults: {
						margin: '0 0 5px 0'
					},
					items: [{
						xtype: 'p',
						items: {
							xtype: 'a',
							href: 'tel:+34911231212',
							text: '<img width="16" src="assets/img/phone.png"> (+34) 91 123 12 12',
							color: 'black'
						},
						css: {
							'text-align': 'center'
						}
					},{
						xtype: 'p',
						items: {
							xtype: 'a',
							href: 'tel:+34654656534',
							text: '<img width="16" src="assets/img/WhatsApp.png"> (+34) 654 65 65 34',
							color: 'black'
						},
						css: {
							'text-align': 'center'
						}
					},{
						xtype: 'p',
						text: 'Tu tienda online de confianza',
						color: 'rgb(47, 159, 213)',
						css: {
							'text-align': 'center'
						}
					}]
				}
			},{
				xtype: 'col',
				size: 2,
				css: {'margin-top': 10},
				cursor: 'pointer',
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
					color: '#2f9fd5',
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
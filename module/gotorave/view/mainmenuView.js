
cb.define({
	xtype: 'view',
	name: 'mainmenu',
	items: [{
		xtype: 'div',
		appendTo: 'header',
		css: {'text-align': 'center', 'background-color': 'black'},
		items: [{
			xtype: 'img',
			src: 'uploads/cabecera.jpg',
			css: {width: '100%', 'max-width': '1200px', margin: 'auto'}
		}]
	},{
		xtype: 'nav',
		type: 'default static-top',
		color: '#454b49',
		items: [{
			xtype: 'header',
			items: [{
				xtype: 'a',
				css: {cursor: 'pointer'},
				cls: 'navbar-brand',
				glyphicon: 'home',
				text: ' Inicio',
				listener: {
					click: function(){
						cb.ctr('gotorave', 'home');
					}
				}
			}]
		},{
			xtype: 'collapse',
			items: [{
				xtype: 'navbar',
				type: 'left',
				items: [{
					xtype: 'dropdown-menu',
					glyphicon: 'calendar',
					text: ' Eventos ',
					css: {'font-size': '17px'},
					id: 'main-event',
					items: [{
						xtype: 'a',
						text: 'Ver todas las fiestas',
						css: {'font-size': '16px'},
						listener: {
							'click': function(){
								cb.ctr('gotorave', 'load_events');
							}
						}
					},{
						xtype: 'divider'
					},{
						store: 'tags',
						field: 'event',
						xtype: 'a',
						text: '{name}',
						listener: {
							click: function(){
								cb.ctr('gotorave', 'load_events', $(this).getRecord()['id']);
							}
						}
					}]
				},{
					xtype: 'dropdown-menu',
					glyphicon: 'user',
					text: ' Usuarios ',
					css: {'font-size': '17px'},
					id: 'main-users',
					items: [{
						xtype: 'a',
						text: 'Ver todos los usuarios',
						css: {'font-size': '16px'},
						listener: {
							'click': function(){
								cb.ctr('gotorave', 'load_users');
							}
						}
					},{
						xtype: 'divider'
					},{
						store: 'tags',
						field: 'user',
						xtype: 'a',
						text: '{name}',
						listener: {
							click: function(){
								cb.ctr('gotorave', 'load_users', $(this).getRecord()['id']);
							}
						}
					}]
				},{
					xtype: 'dropdown-menu',
					glyphicon: 'music',
					text: ' Música ',
					css: {'font-size': '17px'},
					id: 'main-music',
					items: [{
						xtype: 'a',
						text: 'Ver toda la musica',
						css: {'font-size': '16px'},
						listener: {
							'click': function(){
								cb.ctr('gotorave', 'load_music');
							}
						}
					},{
						xtype: 'divider'
					},{
						store: 'tags',
						field: 'music',
						xtype: 'a',
						text: '{name}',
						listener: {
							click: function(){
								cb.ctr('gotorave', 'load_music', $(this).getRecord()['id']);
							}
						}
					}]
				}]
			},{
				xtype: 'navbar',
				type: 'right',
				items: [{
					xtype: 'dropdown-menu',
					text: ' Chat ',
					glyphicon: 'comment',
					css: {'font-size':'17px'},
					items: [{
						store: 'chat',
						field: 'salas',
						xtype: 'a',
						attr: {
							'data-id': '{id}'
						},
						text: '{name}',
						listener: {
							click: function(){
								cb.ctr('gotorave', 'changesala', $(this).getRecord());
							}
						}
					}]
				},{
					xtype: 'dropdown-menu',
					text: ' '+cb.getConfig('user_data')['name'],
					glyphicon: 'user',
					css: { 'font-size': 17 },
					caret: false,
					listener: {
						click: function(){
							cb.ctr('gotorave', 'load_user_panel');
						}
					}
				},{
					xtype: 'dropdown-menu',
					glyphicon: 'off',
					css: { 'font-size': 17 },
					color: 'RED',
					caret: false,
					listener: {
						click: function(){
							cb.ctr('gotorave', 'logout');
						}
					}
				}]
			}]
		}]
	}]
}); //cb.load('store', 'home', {'action':'home'})
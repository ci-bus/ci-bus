
cb.define({
	xtype: 'view',
	name: 'mainmenu',
	appendTo: 'header',
	items: [{
		xtype: 'div',
		css: {'text-align': 'center', 'background-color': 'black'},
		items: [{
			xtype: 'img',
			id: 'mainimg',
			src: 'uploads/cabecera.jpg',
			css: {width: '0px', 'max-width': '900px', margin: 'auto'}
		}]
	},{
		xtype: 'nav',
		type: 'default static-top',
		color: '#454b49',
		id: 'homenav',
		css: {opacity: 0},
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
					xtype: 'navbar-dropdown',
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
								cb.ctr('gotorave', 'load_events', this.getRecord()['id']);
							}
						}
					}]
				},{
					xtype: 'navbar-dropdown',
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
								cb.ctr('gotorave', 'load_users', this.getRecord()['id']);
							}
						}
					}]
				},{
					xtype: 'navbar-dropdown',
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
								cb.ctr('gotorave', 'load_music', this.getRecord()['id']);
							}
						}
					}]
				}]
			},{
				xtype: 'navbar',
				type: 'right',
				items: [{
					xtype: 'navbar-dropdown',
					text: ' Chat ',
					glyphicon: 'comment',
					css: {'font-size':'17px'},
					items: [{
						xtype: 'a',
						store: 'chat',
						field: 'salas',
						attr: {
							'data-id': '{id}'
						},
						text: '{name}',
						listener: {
							click: function(){
								cb.ctr('gotorave', 'changesala', this.getRecord());
							}
						}
					}]
				},{
					xtype: 'navbar-dropdown',
					text: ' Más ',
					id: 'main-menu-mas',
					glyphicon: 'certificate',
					css: {'font-size':'17px'},
					items: [{
						xtype: 'a',
						text: 'Escribir letra de canción',
						listener: {
							click: function(){
								cb.setConfig('no_refresh_chat', true);
								cb.load('controller', 'maderap');
							}
						}
					}]
				},{
					xtype: 'navbar-dropdown',
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
					xtype: 'navbar-dropdown',
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
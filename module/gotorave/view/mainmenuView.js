
cb.define({
	xtype: 'view',
	name: 'mainmenu',
	items: [{
		xtype: 'nav',
		type: 'default static-top',
		items: [{
			xtype: 'header',
			items: [{
				xtype: 'a',
				css: {cursor: 'pointer'},
				cls: 'navbar-brand',
				text: 'Go to Rave',
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
					}],
					storelink: {
						id: 'main-event-strlk',
						store: 'tags',
						field: 'event',
						appendTo: '#main-event ul',
						structure: {
							xtype: 'li',
							items: [{
								xtype: 'a',
								attr: {
									'data-id': btoa('id')
								},
								field: 'name',
								listener: {
									click: function(){
										cb.ctr('gotorave', 'load_events', $(this).attr('data-id'));
									}
								}
							}]
						}
					}
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
					}],
					storelink: {
						id: 'main-users-strlk',
						store: 'tags',
						field: 'user',
						appendTo: '#main-users ul',
						structure: {
							xtype: 'li',
							items: [{
								xtype: 'a',
								attr: {
									'data-id': btoa('id')
								},
								field: 'name',
								listener: {
									click: function(){
										cb.ctr('gotorave', 'load_users', $(this).attr('data-id'));
									}
								}
							}]
						}
					}
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
					}],
					storelink: {
						id: 'main-music-strlk',
						store: 'tags',
						field: 'music',
						appendTo: '#main-music ul',
						structure: {
							xtype: 'li',
							items: [{
								xtype: 'a',
								attr: {
									'data-id': btoa('id')
								},
								field: 'name',
								listener: {
									click: function(){
										cb.ctr('gotorave', 'load_music', $(this).attr('data-id'));
									}
								}
							}]
						}
					}
				}]
			},{
				xtype: 'navbar',
				type: 'right',
				items: [{
					
					xtype: 'dropdown-menu',
					text: ' Chat',
					glyphicon: 'comment',
					css: {'font-size':'17px'},
					id: 'chat-menu-button',
					
					storelink: {
						id: 'chat-links-sala',
						store: 'chat',
						field: 'salas',
						appendTo: '#chat-menu-button ul',
						structure: {
							xtype: 'li',
							items: [{
								xtype: 'a',
								attr: {
									'data-id': btoa('salas.id')
								},
								field: 'salas.name',
								listener: {
									click: function(){
										$('#chat-sala-name').html($(this).html());
										cb.ctr('gotorave', 'changesala', $(this).attr('data-id'));
									}
								}
							}]
						}
					}
				},{
					xtype: 'dropdown-menu',
					text: ' Perfil',
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
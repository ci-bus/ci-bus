cb.define({
	xtype: 'view',
	name: 'userpanel',
	renderTo: '#body-col2',
	items: [{
		xtype: 'panel',
		type: 'info',
		id: 'userpanel',
		items: [{
			xtype: 'head',
			title: 'Perfil de usuario'
		},{
			xtype: 'body',
			css: {'padding-bottom':'5px'},
			items: [{
				xtype: 'div',
				css: {'margin-bottom': '5px'},
				items: [{
					xtype: 'button',
					color: 'green',
					text: 'Eventos ',
					items: [{
						xtype: 'glyphicon',
						type: 'thumbs-up',
					}],
					listeners: {
						click: function(){
							cb.ctr('gotorave', 'load_events', 'like');
						}
					}
				},{
					xtype: 'button',
					color: 'green',
					text: 'Usuarios ',
					items: [{
						xtype: 'glyphicon',
						type: 'thumbs-up',
					}],
					listeners: {
						click: function(){
							cb.ctr('gotorave', 'load_users', 'like');
						}
					}
				},{
					xtype: 'button',
					color: 'green',
					text: 'Musica ',
					items: [{
						xtype: 'glyphicon',
						type: 'thumbs-up',
					}],
					listeners: {
						click: function(){
							cb.ctr('gotorave', 'load_music', 'like');
						}
					}
				},{
					xtype: 'hr',
					margin: 10,
					border: 0
				},{
					xtype: 'button',
					css: {'margin-bottom': 10},
					text: 'Tus eventos',
					listeners: {
						click: function(){
							cb.ctr('gotorave', 'load_events', 'me');
						}
					}
				},{
					xtype: 'button',
					css: {'margin-bottom': 10},
					text: 'Tu música',
					listeners: {
						click: function(){
							cb.ctr('gotorave', 'load_music', 'me');
						}
					}
				},{
					xtype: 'button',
					css: {'margin-bottom': 10},
					glyphicon: 'key',
					text: 'Tu contraseña',
					listeners: {
						click: function(){
							cb.ctr('gotorave', 'change_pass');
						}
					}
				}]
			},{
				xtype: 'form',
				id: 'formuserpanel',
				items: [{
					xtype: 'label',
					text: 'Nombre'
				},{
					xtype: 'input',
					type: 'text',
					id: 'usernameinput',
					name: 'name',
					value: cb.getConfig('user_data').name
				},{
					xtype: 'label',
					text: 'Imagen',
					margin: '10px 0 0 0'
				},{
					xtype: 'img',
					margin: '5px 0 0 0',
					id: 'userpanelimg',
					src: cb.getConfig('user_data').image,
					width: '100%'
				},{
					xtype: 'row',
					margin: '0px -5px',
					items: [{
						xtype: 'col',
						padding: '0px 0px 5px 5px',
						size: {
							xs: 12
						},
						id: 'add-music-tag',
						css: {'padding-top': 0}
					},{
						xtype: 'col',
						css: {'margin-top':'10px'},
						size: {
							xs: 6,
							sm: 4
						},
						items: [{
							xtype: 'input',
							type: 'file',
							pull: 'left',
							id: 'userimageinput',
							name: 'userimageinput',
							text: 'Cambiar imagen',
							size: 'small',
							listeners: {
								change: function(evt){
									var file = evt.target.files[0];
									if(file && file.type && file.type.substr(0, 5)=='image')
									{
										cb.setConfig('user_image_file', file);
										var tgt = evt.target || window.event.srcElement,
								        files = tgt.files;
										
									    if (FileReader && files && files.length) {
									        var fr = new FileReader();
									        fr.onload = function () {
									            $('#userpanelimg').attr('src', fr.result);
									        }
									        fr.readAsDataURL(files[0]);
									    }
									}else{
										alert('Imagen no válida');
									}
								}
							}
						}]
					},{
						xtype: 'col',
						css: {'margin-top':'10px'},
						size: {
							xs: 6,
							sm: 4
						},
						items: [{
							xtype: 'dropup',
							group: {
								cls: 'pull-right'
							},
							glyphicon: 'music',
							caret: false,
							text: ' A&ntilde;adir tag ',
							size: 'small',
							id: 'add-tag',
							items: {
								store: 'tags',
								field: 'user',
								xtype: 'a',
								attr: {
									'data-id': '{id}'
								},
								text: '{name}',
								listeners: {
									click: function(){
										cb.ctr('gotorave', 'add_tag', this);
									}
								}
							}
						}]
					},{
						xtype: 'col',
						css: {'margin-top':'10px'},
						size: {
							xs: 12,
							sm: 4
						},
						items: [{
							xtype: 'button',
							type: 'primary',
							cls: 'pull-center',
							text: 'Guardar cambios',
							width: '100%',
							listeners: {
								click: function(){
									cb.ctr('gotorave', 'saveuserinfo', this);
								}
							}
						}]
					}]
				}]
			}]
		},{
			xtype: 'footer',
			padding: 0,
			items: [{
				xtype: 'progress',
				id: 'prog_save_userpanel',
				css: {'margin-bottom': '0px'},
				display: 'none',
				items: {
					value: 0,
					striped: true,
					animated: true
				}
			}]
		}]
	}]
});
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
			title: 'Panel de usuario'
		},{
			xtype: 'body',
			css: {'padding-bottom':'5px'},
			items: [{
				xtype: 'div',
				css: {'margin-bottom': '5px'},
				defaults: {
					css: {'margin-bottom': '5px'}
				},
				items: [{
					xtype: 'button',
					color: 'green',
					text: 'Eventos ',
					items: [{
						xtype: 'glyphicon',
						type: 'thumbs-up',
					}],
					listener: {
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
					listener: {
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
					listener: {
						click: function(){
							cb.ctr('gotorave', 'load_music', 'like');
						}
					}
				},{
					xtype: 'button',
					text: 'Tus eventos',
					listener: {
						click: function(){
							cb.ctr('gotorave', 'load_events', 'me');
						}
					}
				},{
					xtype: 'button',
					text: 'Tu música',
					listener: {
						click: function(){
							cb.ctr('gotorave', 'load_music', 'me');
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
					margin: 0,
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
						padding: '5px 0px 5px 0px',
						size: {
							xs: 6,
							sm: 4
						},
						items: [{
							xtype: 'input',
							type: 'file',
							pull: 'left',
							css: {'margin-top':'10px'},
							id: 'userimageinput',
							name: 'userimageinput',
							text: 'Cambiar imagen',
							size: 'small',
							listener: {
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
						padding: '5px 0px 5px 0px',
						size: {
							xs: 6,
							sm: 4
						},
						items: [{
							xtype: 'dropup',
							group: {
								cls: 'pull-right'
							},
							glyphicon: 'user',
							caret: false,
							text: ' A&ntilde;adir tag ',
							size: 'small',
							css: {'margin-top':'10px'},
							id: 'add-tag',
							storelink: {
								id: 'du-add-tag-strlk',
								store: 'tags',
								field: 'user',
								appendTo: "ul[aria-labelledby='add-tag']",
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
												cb.ctr('gotorave', 'add_tag', this);
											}
										}
									}]
								}
							}
						}]
					},{
						xtype: 'col',
						padding: '5px 0px 5px 0px',
						size: {
							xs: 12,
							sm: 4
						},
						items: [{
							xtype: 'button',
							type: 'primary',
							css: {'margin-top':'10px'},
							cls: 'pull-center',
							text: 'Guardar cambios',
							width: '100%',
							listener: {
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
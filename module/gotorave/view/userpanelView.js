cb.define({
	xtype: 'view',
	name: 'userpanel',
	renderTo: '#body-col2',
	items: [{
		xtype: 'div',
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
			}]
		},{
			xtype: 'button',
			color: 'green',
			text: 'Usuarios ',
			items: [{
				xtype: 'glyphicon',
				type: 'thumbs-up',
			}]
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
		},{
			xtype: 'button',
			text: 'Tu música',
		}]
	},{
		xtype: 'panel',
		type: 'info',
		items: [{
			xtype: 'head',
			title: 'Panel de usuario'
		},{
			xtype: 'body',
			items: [{
				xtype: 'div',
				items: [{
					xtype: 'label',
					text: 'Nombre'
				},{
					xtype: 'input',
					type: 'text',
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
					xtype: 'input',
					type: 'file',
					margin: '10px 0 0 0',
					id: 'userimageinput',
					name: 'userimageinput',
					text: 'Cambiar imagen',
					listener: {
						change: function(evt){
							var tgt = evt.target || window.event.srcElement,
					        files = tgt.files;
							
						    if (FileReader && files && files.length) {
						        var fr = new FileReader();
						        fr.onload = function () {
						            $('#userpanelimg').attr('src', fr.result);
						        }
						        fr.readAsDataURL(files[0]);
						    }
						}
					}
				}]
			}]
		},{
			xtype: 'footer',
			padding: 0
		}]
	}]
});
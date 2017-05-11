cb.define({

	xtype: 'view',
	name: 'search',
	renderTo: '#content',

	items: [{
		xtype: 'input',
		type: 'text',
		css: {position: 'absolute', top: '-100px', left: '-100px'},
		id: 'keyboardopen'
	},{
		xtype: 'container',
		border: '1px solid #DDD',
		padding: 0,
		
		defaults: {
			css: {'padding-top': 5}
		},
		items: [{
			xtype: 'div',
			items: {
				xtype: 'button',
				text: 'Volver a Go to Rave',
				css: {'margin-left': 10},
				click: function(){
					cb.setConfig('no_refresh_chat', false);
					cb.ctr('gotorave', 'acceder');
				}
			}
		},{
			xtype: 'row',
			css: { 'padding-bottom': 10 },
			items: [{
				xtype: 'col',
				size: {
					xs: 12,
					sm: 6
				},
				items: [{
					xtype: 'h3',
					text: 'Pizarra'
				},{
					xtype: 'row',
					items: [{
						xtype: 'col',
						size: 12,
						text: 'Insertar palabra o frase'
					}]
				},{
					xtype: 'form',
					name: 'search_content',
					listener: {
						submit: function(e){
							e.preventDefault();
							cb.ctr('maderap', 'insert', $('input[name="insert"]').val());
							$('input[name="insert"]').val('');
						}
					},
					items: [{
						xtype: 'row',
						items: [{
							xtype: 'col',
							size: 6,
							items: [{
								xtype: 'div',
								id: 'csel'
							}]
						},{
							xtype: 'col',
							size: 2,
							items: {
								xtype: 'button',
								glyphicon: 'plus',
								width: '100%',
								click: function(){
									cb.ctr('maderap', 'new_letter');
								}
							}
						},{
							xtype: 'col',
							size: 2,
							items: {
								xtype: 'button',
								id: 'bsave',
								glyphicon: 'floppy-disk',
								width: '100%',
								color: 'blue',
								click: function(){
									cb.ctr('maderap', 'save');
								}
							}
						},{
							xtype: 'col',
							size: 2,
							items: {
								xtype: 'button',
								id: 'bremove',
								glyphicon: 'remove',
								width: '100%',
								color: 'red',
								click: function(){
									var r = $('select[name="letra"]').find('option:selected').getRecord();
									if(confirm('¿Eliminar letra de canción?')){
										cb.ctr('maderap', 'remove', r.id);
									}
								}
							}
						}]
					}]
				},{
					xtype: 'div',
					id: 'pizarra',
					height: 600,
					background: '#f2f5f7',
					css: { overflow: 'auto', 'margin-top': '15px' },
					padding: '5px 10px',
					listener: {
						click: function(){
							$('#keyboardopen').focus();
							if(!cb.getConfig('editing')){
								cb.setConfig('editing', setInterval(function(){
									$('#cursor').css('display', 'block');
									cb.ctr('maderap', 'animCursor');
								}, 500));
							}
						}
					},
					items: [{
						xtype: 'div',
						id: 'cursor',
						css: {'margin-top': 2},
						float: 'left',
						text: '&#9617;'
					}]
				}]
			},{
				xtype: 'col',
				size: {
					xs: 12,
					sm: 6
				},
				items: [{
					xtype: 'h3',
					text: 'Busqueda'
				},{
					xtype: 'row',
					items: [{
						xtype: 'col',
						size: 12,
						text: 'Buscar palabra que contenga <span style="color:RED;">%</span> para cualquier cosa, <span style="color:RED;">_</span> para cualquier letra'
					}]
				},{
					xtype: 'form',
					name: 'search_content',
					listener: {
						submit: function(e){
							e.preventDefault();
							cb.ctr('maderap', 'search');
						}
					},
					items: [{
						xtype: 'row',
						items: [{
							xtype: 'col',
							size: 8,
							items: [{
								xtype: 'input',
								type: 'text',
								name: 'search',
								listener: {
									focus: function(){
										cb.ctr('maderap', 'cursorOut');
									}
								}
							}]
						},{
							xtype: 'col',
							size: 4,
							items: {
								xtype: 'button',
								type: 'primary',
								text: 'Buscar',
								width: '100%',
								click: function(){
									cb.ctr('maderap', 'search');
								}
							}
						}]
					},{
						xtype: 'div',
						id: 'search_result',
						background: '#DDD',
						height: 600,
						css: {overflow: 'auto', 'margin-top': '15px'}
					}]
				}]
			}]
		}]
	}]
});
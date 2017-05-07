cb.define({

	xtype: 'view',
	name: 'search',
	renderTo: '#content',

	items: [{
		xtype: 'container',
		border: '1px solid #DDD',
		padding: 0,
		
		defaults: {
			css: {'padding-top': 5}
		},
		items: [{
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
								xtype: 'select',
								name: 'letra',
								listener: {
									change: function(){
										var record = $(this).find('option:selected').getRecord();
										cb.ctr('maderap', 'reset');
										cb.ctr('maderap', 'insert', record.text);
									}
								},
								items: [{
									store: 'letras',
									xtype: 'option',
									text: '{title}'
									
								}]
							}]
						},{
							xtype: 'col',
							size: 2,
							items: {
								xtype: 'button',
								glyphicon: 'plus',
								width: '100%',
								click: function(){
									
								}
							}
						},{
							xtype: 'col',
							size: 2,
							items: {
								xtype: 'button',
								glyphicon: 'floppy-disk',
								width: '100%',
								color: 'blue',
								click: function(){
									
								}
							}
						},{
							xtype: 'col',
							size: 2,
							items: {
								xtype: 'button',
								glyphicon: 'remove',
								width: '100%',
								color: 'red',
								click: function(){
									
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
							if(!cb.getConfig('editing')){
								cb.setConfig('editing', setInterval(function(){
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
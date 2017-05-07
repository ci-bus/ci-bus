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
				size: 6,
				items: [{
					xtype: 'h3',
					text: 'Pizarra'
				},{
					xtype: 'row',
					items: [{
						xtype: 'col',
						size: 12,
						text: 'Insertar palabra'
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
							size: 8,
							items: [{
								xtype: 'input',
								type: 'text',
								name: 'insert'
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
									cb.ctr('maderap', 'insert', $('input[name="insert"]').val());
									$('input[name="insert"]').val('');
								}
							}
						}]
					}]
				},{
					xtype: 'div',
					id: 'pizarra',
					height: 600,
					background: '#f2f5f7',
					css: { overflow: 'auto', 'margin-top': '15px' }
				}]
			},{
				xtype: 'col',
				size: 6,
				items: [{
					xtype: 'h3',
					text: 'Busqueda'
				},{
					xtype: 'row',
					items: [{
						xtype: 'col',
						size: 12,
						text: 'Buscar palabra nuevo escribir <span style="color:RED;">%</span> para cualquier cosa, <span style="color:RED;">_</span> para una letra'
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
								name: 'search'
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
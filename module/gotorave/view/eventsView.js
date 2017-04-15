
cb.define({

	xtype: 'view',
	name: 'events',
	
	renderTo: '#body-col2',

	items: [{
		xtype: 'div',
		id: 'events-content',
		items: {
			store: 'events',
			field: 'ev',
			alterdata: {
				'date': function(dt){
					var pdt = dt.split('-');
					if(pdt[2]){
						var res = pdt[2]+" "+cb.getConfig('meses', pdt[1]*1)+" "+pdt[0];
						return res;
					}
				}
			},
			xtype: 'div',
			css: {'padding-bottom': '10px'},
			items: [{
				xtype: 'panel',
				type: 'info',
				attr: {'data-id': '{id}'},
				items: [{
					xtype: 'head',
					items: [{
						xtype: 'review',
						attr: {data: 'event'},
						float: 'right',
						css: {'margin-right': '-5px'}
					},{
						xtype: 'div',
						cls: 'text-left',
						css: {'font-size': '19px'},
						field: 'name'
					}]
				},{
					xtype: 'body',
					cls: 'text-center',
					items: [{
						xtype: 'img',
						css: {'width': '100%', 'margin-bottom': '10px'},
						attr: {'src': '{image}'}
					},{
						xtype: 'blockquote',
						field: 'description'
					},{
						xtype: 'blockquote',
						items: [{
							xtype: 'b',
							text: 'Fecha '
						},{
							xtype: 'span',
							text: '{date}'
						}]
					},{
						xtype: 'blockquote',
						items: [{
							xtype: 'b',
							text: 'Lugar '
						},{
							xtype: 'span',
							text: '{postal}'
						}]
					}]
				},{
					xtype: 'footer',
					css: {'overflow': 'auto'},
					items: {
						field: 'tags',
						xtype: 'div',
						cls: 'label label-default',
						css: {
							'margin-right': '10px',
							'font-size': '17px'
						},
						text: '{name}'
					}
				}]
			}]
		}
	}]
});
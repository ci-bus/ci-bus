cb.define({
	xtype: 'view',
	name: 'resultado',
	renderTo: '#search_result',
	items: {
		xtype: 'a',
		store: 'palabras',
		field: 'busqueda',
		items: {
			xtype: 'badge',
			margin: '10px 0px 0px 10px',
			css: {'font-size': '17px'},
			items: [{
				xtype: 'div',
				text: '{palabra}'
			},{
				xtype: 'div',
				items: [{
					xtype: 'a',
					href: 'http://es.thefreedictionary.com/{palabra}',
					target: '_blank',
					color: '#fff',
					pull: 'left',
					margin: '5px 5px 0 0',
					items: {
						xtype: 'glyphicon',
						type: 'info-sign'
					}
				},{
					xtype: 'div',
					color: '#fff',
					pull: 'right',
					margin: '5px 0 0 5px',
					css: {'font-size': '16px'},
					items: {
						xtype: 'glyphicon',
						type: 'plus'
					},
					click: function(){
						cb.ctr('maderap', 'insert', $(this).getRecord()['palabra']);
					}
				}]
			}] 
		}
	}
});
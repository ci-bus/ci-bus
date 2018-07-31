cb.define({
	xtype: 'view',
	name: 'csel',
	renderTo: '#csel',
	items: {
		xtype: 'select',
		name: 'letra',
		listeners: {
			change: function(){
				var record = cb.getCmp(this).getRecordSelected();
				cb.ctr('maderap', 'reset');
				cb.ctr('maderap', 'insert', record.text);
			}
		},
		items: [{
			store: 'letras',
			xtype: 'option',
			value: '{id}',
			text: '{title}'
			
		}]
	}
});
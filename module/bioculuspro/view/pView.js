cb.define({
	xtype: 'view',
	name: 'p',
	renderTo: '#content',
	
	items: [{
		xtype: 'div',
		id: 'p',
		padding: 30,
		store: 'p',
		items: [{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			items: [{
				xtype: 'col',
				color: '#{color}',
				size: 12,
				text: "{titulo}",
				css: {'font-size': 32, 'font-weight': 100, 'padding-bottom': '15px','text-align':'center'}
			}]
		},{
			xtype: 'row',
			css: {'max-width': '980px'},
			margin: 'auto',
			items: [{
				xtype: 'div',
				html: '{texto}'
			}]
		}]
	}]
});
cb.define({
	xtype: 'component',
	name: 'review',
	items: [{
		xtype: 'span',
		css: {
			'background-color': 'white',
			'border-radius': 5,
			'padding': 5,
			'margin-left': 10},
		
		items: [{
			xtype: 'glyphicon',
			type: 'thumbs-down',
			color: 'red',
			cursor: 'pointer',
			margin: 5,
			attr: {'onClick':"cb.ctr('gotorave','musiclike',this)"},
		},{
			xtype: 'glyphicon',
			type: 'thumbs-up',
			color: 'green',
			cursor: 'pointer',
			attr: {'onClick':"cb.ctr('gotorave','musiclike',this)"},
			margin: 5,
			listener: {
				click: function(){
					alert('green');
				}
			}
		},{
			xtype: 'span',
			css: {'margin-right': 5},
			cls: 'review',
			field: 'reviews'
		}]
	}]
	
});
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
			cursor: 'pointer',
			cls : btoa('hand1_color'),
			margin: 5,
			attr: {'clicked': btoa('review_cos')},
			listener: {
				click: function(){
					cb.ctr('gotorave','musiclike',this)
				}
			}
		},{
			xtype: 'glyphicon',
			type: 'thumbs-up',
			cls : btoa('hand2_color'),
			cursor: 'pointer',
			attr: {'clicked': btoa('review_pos')},
			margin: 5,
			listener: {
				click: function(){
					cb.ctr('gotorave','musiclike',this)
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
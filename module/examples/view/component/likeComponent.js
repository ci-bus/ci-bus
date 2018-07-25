cb.define({
	xtype: 'component',
	name: 'like',
	items: [{
		xtype: 'div',
		margin: '0px 0px 10px 10px',
		items: [{
			xtype: 'glyphicon',
			type: 'thumbs-down',
			cursor: 'pointer',
			cls : '{hand1_color}',
			margin: 5,
			listeners: {
				click: function(){
					cb.ctr('examples','like',this)
				}
			}
		},{
			xtype: 'glyphicon',
			type: 'thumbs-up',
			cls : '{hand2_color}',
			cursor: 'pointer',
			margin: 5,
			listeners: {
				click: function(){
					cb.ctr('examples','like',this)
				}
			}
		}]
	}]
	
});
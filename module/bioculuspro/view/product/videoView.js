cb.define({
	xtype: 'view',
	name: "video",
	appendTo: "#content",
	items: [{
		xtype: 'div',
		width: "100%",
		padding: 50,
		background: "blue",
		items: [{
			xtype:'div',
			text:"¿Como funciona bioculusPro?",
			css:{'text-align':'center', 'font-size':'36px','font-weight':100},

		},{
			xtype: 'div',
			html:'<iframe width="560" height="315" src="https://www.youtube.com/embed/JOPUeq8kRhM" frameborder="0" allowfullscreen></iframe>',
			css:{'text-align':'center'},
			margin:" 50px 0px 0px 0px",
		}]
	}]
})
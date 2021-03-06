cb.define({
	xtype: 'view',
	name: 'video',
	appendTo: "#content",
	
	items: [{
		xtype: 'div',
		store:'producto',
		field:'productos',
		items: {
			xtype: 'div',
			id: 'video',
			margin: '14px 0',
			css: { 'position': 'relative'},
			width: '100%',
			items: [{
				store:'producto',
				field:'productos',
				xtype: 'div',
				width: "100%",
				padding: 50,
				background: "#{color_back_video}",
				items: [{
					xtype:'div',
					text:"{video_titulo}",
					css:{
						'text-align':'center', 
						'font-size':'36px',
						'font-weight':100, 
						'color':'#{color_text_video}', 
						'margin-top': '30px'
					}
		
				},{
					xtype: 'div',
					html:'{video_html}',
					css:{'text-align':'center'},
					margin:" 50px 0px 0px 0px"
				}]
			}]
		}
	}]
})
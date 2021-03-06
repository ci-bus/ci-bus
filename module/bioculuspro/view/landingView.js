cb.define({

	xtype: 'view',
	name: 'landing',
	appendTo: '#content',
	
	onload: function(){
		cb.ctr('bioculuspro', 'animate_gallery');
	},

	items: [{
		xtype: 'div',
		css: {'position':'relative', 'height': '500px'},
		id: 'landing',
		width: '100%',
		items: [{
			xtype: 'div',
			css: {'position': 'absolute', 'display': 'none'},
			store: "home",
			field: 'cabezera',
			background: '#{color}',
			width: '100%',
			items: [{
				xtype: 'row',
				css: {'max-width': '980px', 'height': '500px', 'background-size': 'cover'},
				margin: 'auto',
				background: 'url("sistema/{imagen}")',
				
				items: [{
					xtype: 'col',
					size: 8,
					items: [{
						xtype: 'img',
						width: '100%',
					}]
				},{
					xtype: 'col',
					size: 4,
					items: [{
						xtype:'div',
						text: "{texto}",
						css: {"font-size":"22px", "font-weight":120, "text-align":"center", "margin-top":"100px" }
					}]
				}]
			}]
		},{
			xtype: 'div',
			css:{'position':'absolute', 'z-index': 888888},
			width: '100%',
			id: 'submenu',
			items: {
				xtype: 'row',
				css: {'max-width': '980px'},
				margin: 'auto',
				
				items: {
					xtype: 'col',
					size: 12,
					items: {
						xtype: 'group',
						width: '100%',
						css: {'margin-top': 20},
						defaults: {
							xtype: 'button',
							margin: 0,
							padding: '15px 0px',
							width: '20%',
							background: "#{color}",
							attr: {'colover': '#{color2}', 'colout': '#{color}'},
							css: {"border": 0},
							color: '#{color3}',
							listeners: {
								mouseover: function(){
									$(this).css({
										'background-color': $(this).attr('colover')
									});
								},
								mouseout: function(){
									$(this).css({
										'background-color': $(this).attr('colout')
									});
								}
							},
							items: [{
								xtype: 'img',
								src: 'sistema/{imagen}',
								css: {'max-width': '24px', position: 'relative', top: '-4px'}
							},{
								xtype: 'span',
								margin: '0 0 0 10px',
								size: 19,
								text: '{texto}'
							}]
						},
						items: [{
							store:"home",
							field:"submenu",
							
							click: function(){
								event.preventDefault();
							    var id = '#'+$(this).getRecord().enlace;
							    var top = $(id).offset().top;
							    $('body').stop().animate({
							    	scrollTop: top
							    }, 'swing');
							}
						}]
					}
				}
			}
		}]
	}]
});
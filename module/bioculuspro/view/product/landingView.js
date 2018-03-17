cb.define({

	xtype: 'view',
	name: 'landing',
	appendTo: '#content',

	items: [{
		xtype: 'div',
		id: 'landing',
		css: {'position':'relative', 'height': '630px'},
		width: '100%',
		items: [{
			xtype: 'div',
			css:{'position':'absolute'},
			store: "producto",
			field:'productos',
			background: '#{color_back_landing}',
			width: '100%',
			items: [{
				xtype: 'row',
				css: {'max-width': '980px', 'height': '500px', 'background-size': 'cover'},
				margin: 'auto',
				
				items: [{
					xtype: 'col',
					size: 6,
					items: [{
						xtype: 'img', 
						src: 'sistema/{imagen}',
						css: {'width': '60%'},
						margin: '100px 20% 0px 20%'
					},{
						xtype: 'row',
						margin: '40px 0px 30px 0px',
						items: [{
							xtype: 'col',
							css: {'text-align':'center'},
							size: 5,
							items: [{
								xtype: 'h3',
								text: '{precio} €',
								css: {'margin-top': '0px'}
							},{
								xtype:'small',
								text: 'iva incluido'
							}]
							
						},{
							xtype: 'col',
							size: 7,
							items: [{
								xtype: 'button',
								type: 'primary',
								text: '{but_buy_text}',
								width: 'calc(100% - 50px)',
								height: '50px',
								click: function(){
									cb.ctr('bioculuspro', 'comprar', $(this).getRecord())
								}
							}] 
							
						}]
					}]
				},{
					xtype: 'col',
					size: 6,
					items: [{
						xtype: 'div',
						text: "{landing_html}",
						
						
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
							size: 19,
							background: "#{color}",
							attr: {'colover': '#{color2}', 'colout': '#{color}'},
							css: {"border": 0},
							color: '#{color3}',
							text: "<img style=\"max-height:24px;\" src=\"sistema/{imagen}\"> &nbsp;{texto}",
							listener: {
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
							}
						},
						items: [{
							store:"producto",
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
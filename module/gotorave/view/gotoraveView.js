
cb.define({

	xtype: 'view',
	name: 'gotorave',

	items: [{
		renderTo: '#content',
		xtype: 'row',
		items: [{
			xtype: 'col',
			size: {
				xs: 12,
				sm: 6
			},
			items: [{
				xtype: 'panel',
				type: 'info',
				id: 'panel-chat',
				css: {opacity: 0},
				items: [{
					xtype: 'head',
					items: [{
						xtype: 'form',
						name: 'chat-send',
						attr: {'accept-charset': 'UTF-8'},
						items: [{
							xtype: 'input',
							type: 'hidden',
							name: 'action',
							value: 'send'
						},{
							xtype: 'row',
							margin: '0px',
							items: [{
								xtype: 'col',
								size: {
									xs: 8,
									sm: 9
								},
								items: [{
									xtype: 'textarea',
									height: '65px',
									name: 'msg',
									cls: 'form-control'
								}]
							},{
								xtype: 'col',
								size: {
									xs: 4,
									sm: 3
								},
								items: [{
									xtype: 'button',
									text: ' Enviar ',
									cls: 'btn-block',
									
									listener: {
										click: function(){
											cb.ctr('gotorave', 'sendchat');
										}
									}
								},{
									xtype: 'div',
									store: 'chat',
									cls: 'text-center',
									field: 'name',
									css: {'padding-top': '10px'},
									id: 'chat-sala-name'
								}]
							}]
						}]
					}]
				},{
					xtype: 'body',
					padding: '0px',
					id: 'chat-panel-body',
					css: {
						'max-height': '300px',
						'overflow': 'auto'
					},
					items: {
						store: 'chat',
						field: 'chat',
						alterdata: {
							'online': function(onl){
								if(onl==1){
									return cb.create({
										xtype: 'badge',
										text: 'online',
										pull: 'right',
										color: '#555',
										css: {'background-color': '#ccfbcc'}
									}).outerHTML;
								}
								else return ' ';
							}
						},
						xtype: 'callout',
						margin: '3px',
						padding: '5px',
						type: '{type}',
						title: '{user} {online}',
						text: '{msg}'
					}
				},{
					xtype: 'panel',
					reload: false,
					type: 'primary',
					id: 'player-panel',
					css: { position: 'fixed', 
							bottom: 5, 
							left: 5, 
							'z-index': 900, 
							display: 'none', 
							width: '100%', 
							'max-width': 562},
					shadow: '0px 0px 10px 0px rgba(173,173,173,1)',
					items: [{
						xtype: 'head',
						text: 'Player',
						weight: 'bold',
						size: 17,
						align: 'center',
						items: [{
							xtype: 'buttom',
							float: 'right',
							glyphicon: 'menu-down',
							css: { cursor: 'pointer' },
							listener: {
								'click': function(){
									if($('#media-player').find('iframe, object, embed').width() == 1200){
										$('#media-player').find('iframe, object, embed').animate({width: 560, height: 315}, 'fast');
									}else if($('#media-player').find('iframe, object, embed').width() == 560 && $('#media-player').height()>0){
										$('#media-player').css({overflow:'hidden'}).animate({height:0}, 'fast');
									}else{
										$('#player-panel').stop().fadeOut('fast', function(){
											$('#media-player').html(' ');
										});
									}
									$('#player-bot-up').animate({opacity: 1}, 'fast');
								}
							} 
						},{
							xtype: 'buttom',
							float: 'right',
							id: 'player-bot-up',
							glyphicon: 'menu-up',
							margin: '0 10px 0 0',
							css: { cursor: 'pointer', opacity: 0 },
							listener: {
								'click': function(){
									if($('#media-player').height()<50){
										$('#media-player').css({overflow: 'initial'}).animate({height: 315}, 'fast', function(){
											$(this).css('height','auto');
										});
										$(this).animate({opacity: 0}, 'fast');
									}
								}
							}
						}]
					},{
						xtype: 'body',
						css: {'background-color': 'black', padding: 0},
						items: {
							xtype: 'div',
							id: 'media-player'
						}
					}]
				}]
			},{
				xtype: 'div',
				id: 'proxevent',
				store: 'events',
				field: 'recent',
				css: {'padding-bottom': '10px', opacity: 0},
				items: [{
					xtype: 'h3',
					text: 'El evento más próximo'
				},{
					xtype: 'panel',
					type: 'info',
					attr: {'data-id': '{id}'},
					items: [{
						xtype: 'head',
						items: [{
							xtype: 'review',
							attr: {data: 'event'},
							float: 'right',
							css: {'margin-right': '-5px'}
						},{
							xtype: 'div',
							cls: 'text-left',
							css: {'font-size': '19px'},
							field: 'name'
						}]
					},{
						xtype: 'body',
						cls: 'text-center',
						alterdata: {
							'date': function(dt){
								var pdt = dt.split('-');
								var res = pdt[2]+" "+cb.getConfig('meses', pdt[1]*1)+" "+pdt[0];
								return res;
							}
						},
						items: [{
							xtype: 'img',
							css: {'width': '100%', 'margin-bottom': '10px'},
							attr: {'src': '{image}'}
						},{
							xtype: 'blockquote',
							field: 'description'
						},{
							xtype: 'blockquote',
							items: [{
								xtype: 'b',
								text: 'Fecha '
							},{
								xtype: 'span',
								text: '{date}'
							}]
						},{
							xtype: 'blockquote',
							items: [{
								xtype: 'b',
								text: 'Lugar '
							},{
								xtype: 'span',
								text: '{postal}'
							}]
						}]
					},{
						xtype: 'footer',
						css: {'overflow': 'auto'},
						items: [{
							field: 'tags',
							xtype: 'div',
							cls: 'label label-default',
							css: {
								'margin-right': '10px',
								'font-size': '17px'
							},
							text: '{name}'
						}]
					}]
				}]
			}]
		},{
			xtype: 'col',
			id: 'body-col2',
			size: {
				xs: 12,
				sm: 6
			}
		}]
	}]

});
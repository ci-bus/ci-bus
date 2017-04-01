
cb.define({

	xtype: 'view',
	name: 'music',

	items: [{
		renderTo: '#body-col2',
		xtype: 'panel',
		type: 'info',
		id: 'panel-add-music',
		reload: false,
		margin: '0 0 10px 0',
		items: [{
			xtype: 'head',
			items: [{
				xtype: 'form',
				name: 'music-send',
				items: [{
					xtype: 'input',
					type: 'hidden',
					name: 'action',
					value: 'send'
				},{
					xtype: 'row',
					items: [{
						xtype: 'col',
						size: 12,
						items: [{
							xtype: 'div',
							text: 'Compartir m&uacute;sica',
							id: 'share-music-button',
							css: {'font-size': '23px', cursor: 'pointer'},
							listener: {
								click: function(){
									$(this).css({position: 'relative', 'border-bottom': '1px solid white'}).animate({top: '-10px'},'fast');
									$('#form-music-box').animate({height: '100%'}, 'fast', function(){
										$(this).css({height: 'auto', overflow: 'initial'});
									});
									$('#panel-add-music').find('.panel-heading').css('padding-bottom', '0px');
								}
							}
						},{
							xtype: 'div',
							id: 'form-music-box',
							css: {overflow:'hidden', height: '0px'},
							items: [{
								xtype: 'label',
								text: 'T&iacute;tulo',
								margin: '0 0 5px 5px'
							},{
								xtype: 'input',
								type: 'text',
								name: 'titulo'
							},{
								xtype: 'label',
								text: 'Descripción y enlaces',
								margin: '15px 0 5px 5px'
							},{
								xtype: 'textarea',
								name: 'enlace',
								cls: 'form-control',
								height: '140px'
							},{
									xtype: 'div',
									css: {width: '100%'},
									cls: 'pull-left',
									id: 'add-music-tag'
							},{
								xtype: 'div',
								items: [{
									xtype: 'div',
									cls: 'pull-left',
									css: {'margin-top': '15px'},
									items: [{
										xtype: 'dropup',
										glyphicon: 'music',
										text: ' A&ntilde;adir tag ',
										size: 'small',
										id: 'add-tag-music',
										storelink: {
											id: 'du-add-tag-music-strlk',
											store: 'tags',
											field: 'music',
											appendTo: "ul[aria-labelledby='add-tag-music']",
											structure: {
												xtype: 'li',
												items: [{
													xtype: 'a',
													attr: {
														'data-id': btoa('id')
													},
													field: 'name',
													listener: {
														click: function(){
															if($("#add-music-tag .label").length === 0){
																$("#add-music-tag").animate({height: '31px'}, 'fast');
															}
															cb.ctr('gotorave', 'add_tag_music', this);
															if($("ul[aria-labelledby='add-tag-music'] li").length === 0){
																$('#add-tag-music').css('display', 'none');
															}
														}
													}
												}]
											}
										}
									}]
								},{
									xtype: 'button',
									type: 'primary',
									cls: 'pull-right',
									margin: '15px 0 0 0',
									text: 'Compartir',
									listener: {
										click: function(){
											cb.ctr('gotorave', 'sharemusic');
										}
									}
								},{
									xtype: 'button',
									cls: 'pull-right',
									margin: '15px 10px 0 0',
									text: 'Cancelar',
									listener: {
										click: function(){
											$("textarea[name='enlace']").val('');
											$("input[name='titulo']").val('');
											$("#add-music-tag").find('.glyphicon-remove').click();
											$('#form-music-box').css({overflow: 'hidden', height: '0px'});
											$('#panel-add-music').find('.panel-heading').css('padding-bottom', '10px');
											$('#share-music-button').css({'border-bottom': 'none'}).animate({top: '0px'},'fast');
										}
									}
								}]
							}]
						}]
					}]
				}]
			}]
		},{
			xtype: 'body',
			id: 'music-progress',
			css: { display: 'none', padding: '0px' }
		}]
	},{
		appendTo: '#body-col2',
		xtype: 'div',
		id: 'music-content',
		storelink: {
			id: 'music-strlk',
			store: 'music',
			field: 'msc',
			renderTo: '#music-content',
			structure: {
				xtype: 'div',
				css: {'padding-bottom': '10px'},
				items: [{
					xtype: 'panel',
					type: 'info',
					attr: {'data-id': btoa('id')},
					items: [{
						xtype: 'head',
						items: [{
							xtype: 'review',
							attr: {data: 'music'},
							float: 'right',
							css: {'margin-right': '-5px'}
						},{
							xtype: 'div',
							cls: 'text-left',
							css: {'font-size': '17px'},
							field: 'titulo'
						}]
					},{
						xtype: 'body',
						items: [{
							xtype: 'div',
							html: btoa('enlace')
						}]
					},{
						xtype: 'footer',
						storelink: {
							id: 'music-tags-strlk',
							store: 'current',
							field: 'tags',
							structure: {
								xtype: 'div',
								cls: 'label label-default',
								css: {
									'margin-right': '10px',
									'font-size': '17px'
								},
								text: btoa('name')
							}
						}
					}]
				}]
			}
		}
	}]
});
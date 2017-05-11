
cb.define({

	xtype: 'view',
	name: 'music',
	renderTo: '#body-col2',

	items: [{
		xtype: 'panel',
		type: 'info',
		id: 'panel-add-music',
		reload: false,
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
								xtype: 'row',
								items: [{
									xtype: 'col',
									size: {
										xs: 12
									},
									id: 'add-music-tag',
									css: {'padding-top': 0}
								},{
									xtype: 'col',
									size: {
										xs: 6,
										sm: 4
									},
									padding: '5px 5px 0 0',
									items: [{
										xtype: 'button',
										cls: 'pull-left',
										text: 'Cancelar',
										size: 'small',
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
								},{
									xtype: 'col',
									size: {
										xs: 6,
										sm: 4
									},
									items: [{
										xtype: 'dropup',
										group: {
											cls: 'pull-right'
										},
										glyphicon: 'music',
										caret: false,
										css: {'margin-top': '6px'},
										text: ' A&ntilde;adir tag ',
										size: 'small',
										id: 'add-tag',
										items: {
											store: 'tags',
											field: 'music',
											xtype: 'a',
											attr: {
												'data-id': '{id}'
											},
											text: '{name}',
											listener: {
												click: function(){
													cb.ctr('gotorave', 'add_tag', this);
												}
											}
										}
									}]
								},{
									xtype: 'col',
									size: {
										xs: 12,
										sm: 4
									},
									padding: '5px 0 0 0',
									items: [{
										xtype: 'button',
										type: 'primary',
										cls: 'pull-center',
										text: 'Compartir',
										width: '100%',
										listener: {
											click: function(){
												cb.ctr('gotorave', 'sharemusic');
											}
										}
									}]
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
		xtype: 'div',
		id: 'music-content',
		items: {
			store: 'music',
			field: 'msc',
			css: { 'margin-top': '10px'},
			xtype: 'panel',
			type: 'info',
			attr: {'data-id': '{id}'},
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
					css: {'text-align': 'center'},
					html: '{enlace}'
				}]
			},{
				xtype: 'footer',
				css: {'overflow': 'auto'},
				items: {
					field: 'tags',
					xtype: 'div',
					cls: 'label label-default',
					css: {
						'margin-right': '10px',
						'font-size': '17px'
					},
					text: '{name}'
				}
			}]
		}
	}]
});
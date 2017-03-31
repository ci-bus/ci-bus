
cb.define({
	
	xtype: 'controller',
	name: 'gotorave',
	
	onload: function(){
		cb.setConfig('meses', ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'])
		
		if(getCookie('user_id') == 0)
		{
			$('body').css({
				'background': 'url(assets/img/background.jpg) no-repeat center center fixed',
				'-webkit-background-size': 'cover',
				'-moz-background-size': 'cover',
				'-o-background-size': 'cover',
				'background-size': 'cover'
			});
			cb.loadLineal([
				['view', 'common', 'base'],
				['view', 'gotorave', 'home']
			]);
		}
		else
		{
			cb.load('store', 'gotorave', 'users', {'action': 'get_data'}, function(){
				if(cb.getConfig('user_data')){
					cb.ctr('gotorave', 'acceder');
				}else{
					cb.ctr('gotorave', 'logout');
				}
			});			
		}
	},
	
	acceder: function(){
		$('body').css({'background': 'none'});
		cb.loadLineal([
		    ['component', 'gotorave', 'review'],
			['store', 'gotorave', 'tags'],
			['store', 'gotorave', 'chat', {action: 'salas'}],
			['store', 'gotorave', 'chat'],
			['view', 'common', 'base'],
			['view', 'gotorave', 'mainmenu'],
			['view', 'gotorave']
		]);
		this.chatInterval = setInterval(function(){
			if(!cb.getConfig('no_refresh_chat')){
				cb.load('store', 'gotorave', 'chat')
			}
		}, 2000);
	},
	
	login : function(){
		var ctr = this,
		user_data = false;
		cb.send('chat-login','gotorave','login', function(){
			if(!(user_data = cb.getConfig('user_data'))){
				$('.panel-info').css('border','1px solid RED');
				$('.panel-info button').css('color','RED');
				setTimeout(function(){
					$('.panel-info button').css('color','WHITE');
					$('.panel-info').css('border','1px solid #bce8f1');
				}, 1500);
			}else{
				setCookie('user_id', user_data.id, 1);
				ctr.acceder();
			}
		});
	},
	
	changesala: function(idsala){
		cb.load('store', 'gotorave', 'chat', {'action': 'change', 'sala_id': idsala});
	},
	
	sendchat: function(){
		ctr = this;
		if($("textarea[name='msg']").val().trim()!=''){
			cb.send('chat-send','gotorave','chat');
			$("textarea[name='msg']").val('');
		}
	},
	
	musiclike: function(bot){
		if(!$(bot).hasClass('gray'))
		{
			var type = $(bot).parent().parent().attr('data');
			var id = $(bot).closest('.panel').attr('data-id');
			var review = $(bot).parent().find('.review').text();
			var currentreview = $(bot).parent().attr('currentreview');
			var val = 0;
			
			if($(bot).hasClass('glyphicon-thumbs-down'))
			{
				val = -1;
				review--;
				if($(bot).parent().find('.glyphicon-thumbs-up').hasClass('gray')){
					review--;
				}
				$(bot).parent().find('.glyphicon-thumbs-up').addClass('green').removeClass('gray');
			}
			else if($(bot).hasClass('glyphicon-thumbs-up'))
			{
				val = 1;
				review++;
				if($(bot).parent().find('.glyphicon-thumbs-down').hasClass('gray')){
					review++;
				}
				$(bot).parent().find('.glyphicon-thumbs-down').addClass('red').removeClass('gray');
			}
			$(bot).parent().find('.review').text(review);
			$(bot).animate({'zoom': 2, 'scale': 2, 'margin-top': '-10px'}, 'fast');
			
			cb.load('store', 'gotorave', 'review', {action: 'send', value: val, type: type, id: id}, function(res){
				$(bot).removeClass('green').removeClass('red').addClass('gray').animate({'zoom': 1, 'scale': 1, 'margin-top': '5px'}, 'fast');
			});
		}
	},
	
	inviteuser: function(){
		var me = this;
		$('#user-progress').css('display', 'block').find('.progress-bar').animate({width: '50%'}, 'fast');
		cb.load('store', 'gotorave', 'users', {'action': 'invite', 'email': $('input[name=invitemailuser]').val()}, function(res){
			if(res == 'true'){
				var user_data = cb.getConfig('user_data');
				user_data.add_friends--;
				cb.setConfig('user_data', user_data);
				cb.create({
					xtype: 'callout',
					renderTo: '#panel-add-friend',
					type: 'info',
					margin: '0 0 10px 0',
					padding: 10,
					items: [{
						xtype: 'span',
						margin: '0 10px 0 0',
						text: 'Se ha creado un nuevo usuario, los datos de acceso serán enviados por email, gracias por colaborar',
					},{
						xtype: 'button',
						text: 'Aceptar',
						listener: {
							click: function(){
								$(this).parent().parent().remove();
							}
						}
					}]
				});
			}else{
				$('#user-progress').find('.progress-bar').stop().animate({width: '0%'}, 'fast', function(){
					$(this).parent().parent().css('display','none');
					me.showError('No se ha podido crear el usuario, inténtelo mas tarde');
				});
			}
		});
	},
	
	sharemusic: function(){
		ctr = this;
		if($("input[name='titulo']").val()==''){
			alert('Introduce un título o nombre de la canción');
		}else if($("textarea[name='enlace']").val().search('http://')<0 && $("textarea[name='enlace']").val().search('https://')<0){
			alert('Introduce algún enlace en la descripción');
		}else{
			$('#music-progress').css('display', 'block');
			cb.create({
				renderTo: '#music-progress',
				xtype: 'progress',
				css: {'margin-bottom': '0px'},
				items: {
					value: 0,
					striped: true,
					animated: true
				}
			});
			$('#music-progress').find('.progress-bar').animate({width: '50%'}, 'fast');
			cb.send('music-send','gotorave','music', function(r){
				if(r){
					$("textarea[name='enlace']").val('');
					$("input[name='titulo']").val('');
					$("#add-music-tag").find('.glyphicon-remove').click();
					$('#music-progress').find('.progress-bar').css({'background-color': 'green'}).stop().animate({width: '100%'}, 'fast');
				}else{
					$('#music-progress').find('.progress-bar').css({'background-color': 'red', width: '0%'});
				}
				cb.sto(function(){
					$('#music-progress').html('');
					cb.ctr('gotorave', 'load_music');
				}, 1000);
			});
		}
	},
	
	edit_info_user: function(){
		
		console.log(cb.getConfig('user_data'));
		
		cb.load('view', 'gotorave', 'userpanel', function(){
			
		});
	},
	
	load_events: function(id_tag){
		
		cb.load('view', 'gotorave', 'events');
		cb.load('store', 'gotorave', 'events', {'action': 'load', 'id_tag': id_tag}, function(){
			var t_top = $('#body-col2').position().top;
			if(t_top > 100)
			{
				cb.sto(function(){
					$("html, body").animate({scrollTop: t_top}, 'fast', 'swing');
				}, 250);
			}
		});
	},
	
	load_users: function(id_tag)
	{	
		$('#users-content').remove();
		cb.load('view', 'gotorave', 'users', function(){
			if(cb.getConfig('user_data').add_friends > 0){
				$('#panel-add-friend').css('display', 'block');
			}else{
				$('#panel-add-friend').remove;
			}
		});
		cb.load('store', 'gotorave', 'users', {'action': 'load', 'id_tag': id_tag}, function(){
			var t_top = $('#body-col2').position().top;
			if(t_top > 100)
			{
				cb.sto(function(){
					$("html, body").animate({scrollTop: t_top}, 'fast', 'swing');
				}, 250);
			}
		});
	},
	
	load_music: function(id_tag)
	{
		$('#music-content').remove();
		cb.load('store', 'gotorave', 'music', {'action': 'load', 'id_tag': id_tag}, function(){
			var t_top = $('#body-col2').position().top;
			if(t_top > 100)
			{
				cb.sto(function(){
					$("html, body").animate({scrollTop: t_top}, 'fast', 'swing');
				}, 250);
			}
		});
		cb.load('view', 'gotorave', 'music', function(){
			$('#music-content').on('click', 'a', function(){
				var hf = $(this).attr('href');
				if(hf && hf.indexOf('.youtube.com') > 0)
				{
					$('#media-player').html('<object width="560" height="315"><param name="movie" value="'+hf+'?hl=es_ES&version=3&autoplay=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="'+hf+'?hl=es_ES&version=3&autoplay=1" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed></object>');
					$('#player-panel').stop().fadeIn('fast');
					$('#media-player').find('iframe, object, embed').css({width: 560, height: 315});
					return false;
				}
				if(hf && hf.indexOf('soundcloud.com') > 0)
				{
					$.getJSON('http://soundcloud.com/oembed?callback=?',
					    {format: 'js', url: hf, iframe: true},
					    function(data) {
					        $('#media-player').html(data['html']);
							$('#player-panel').stop().fadeIn('fast');
							$('#media-player').find('iframe, object, embed').css({width: 560, height: 315});
							return false;
					    }
					);
					return false;
				}
			});
		});
	},
	
	add_tag_music: function(li){
		var val = $(li).html();
		var val2 = $(li).attr('data-id');
		cb.create({
			xtype: 'div',
			cls: 'label label-default pull-left',
			appendTo: '#add-music-tag',
			css: {
				'margin-right': '5px',
				'margin-top': '10px',
				'padding': '5px'
			},
			text: val,
			size: 15,
			items: [{
				xtype: 'span',
				glyphicon: 'remove',
				css: {
					'margin-left': '5px',
					'color': 'red',
					'cursor': 'pointer'
				},
				listener: {
					click: function(){
						if($('#add-tag-music').css('display') == 'none'){
							$('#add-tag-music').css('display', 'block');
						}
						cb.create({
							xtype: 'li',
							appendTo: "ul[aria-labelledby='add-tag-music']",
							items: [{
								xtype: 'a',
								attr: {
									'data-id': val2
								},
								field: 'name',
								text: val,
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
						});
						$(this).parent().remove();
						if($("#add-music-tag .label").length === 0){
							$("#add-music-tag").animate({height: '1px'}, 'fast');
						}
					}
				}
			},{
				xtype: 'input',
				type: 'hidden',
				name: 'tags[]',
				value: val2
			}]
		});
		$(li).parent().remove();
	},
	
	inforeg: function(){
		cb.popup({
			id: 'popupinforeg',
			type: 'info',
			effect: {
				type: 'flipin',
				vel: 'fast',
				dire: 'right'
			},
			offsetTop: 100,
			css: {
				'max-width': 400
			},
			items: [{
				xtype: 'head',
				css: {'min-height': 40},
				items: [{
					xtype: 'span',
					glyphicon: 'remove',
					cls: 'pull-right',
					css: {
						cursor: 'pointer',
						'padding-top': 4
					},
					listener: {
						click: function(){
							cb.effect('#popupinforeg', {
								type: 'flipout',
								dire: 'right',
								fun: function(){
									$(this).parent().remove();
								}
							});
						}
					}
				},{
					xtype: 'div',
					size: 19,
					text: 'Información',
					cls: 'text-center'
				}]
			},{
				xtype: 'body',
				text: 'El uso a esta plataforma es privado, de modo que no puede registrarse, otro usuario que ya forma parte de la comunidad debe invitarle, si ya le han invitado revise su correo electrónico.'
			}]
		});
	},
	
	showError: function(msg){
		cb.popup({
			type: 'warning',
			effect: {
				type: 'flipin',
				vel: 'fast',
				dire: 'down'
			},
			offsetTop: 100,
			css: {
				'max-width': 400
			},
			items: [{
				xtype: 'head',
				css: {'min-height': 40},
				items: [{
					xtype: 'span',
					glyphicon: 'remove',
					cls: 'pull-right',
					css: {
						cursor: 'pointer',
						'padding-top': 4
					},
					listener: {
						click: function(){
							cb.effect($(this).parent().parent(), {
								type: 'flipout',
								dire: 'up',
								fun: function(){
									$(this).parent().remove();
								}
							});
						}
					}
				},{
					xtype: 'div',
					size: 19,
					text: 'Información',
					cls: 'text-center'
				}]
			},{
				xtype: 'body',
				text: msg
			}]
		});
	},
	
	logout: function(){
		setCookie('user_id', 0, 1);
		location.reload();
	},
	
	logStore: function(){
		console.log(cb.module.store);
	},
	
	logLink: function(){
		console.log(cb.module.storelink);
	}	
});
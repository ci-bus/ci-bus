
cb.define({
	
	xtype: 'controller',
	name: 'gotorave',
	
	onload: function(){
		cb.setConfig('meses', [' ', 'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'])
		
		if(getCookie('user_id') == 0)
		{
			$('body').css({
				'background': 'url(assets/img/background.jpg) no-repeat center center fixed',
				'-webkit-background-size': 'cover',
				'-moz-background-size': 'cover',
				'-o-background-size': 'cover',
				'background-size': 'cover'
			});
			cb.loadAll([
				['view', 'common', 'base'],
				['view', 'gotorave', 'login']
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
		cb.loadAll([
		    ['component', 'gotorave', 'review'],
			['store', 'gotorave', 'tags'],
			['store', 'gotorave', 'chat', {action: 'salas'}],
			['store', 'gotorave', 'chat'],
			['store', 'gotorave', 'home'],
			['store', 'gotorave', 'events', {'action': 'load', 'id_tag': 'recent'}],
			['view', 'common', 'base'],
			['view', 'gotorave', 'mainmenu'],
			['view', 'gotorave', 'gotorave'],
			['view', 'gotorave', 'home']
		], function(){
			$('#mainimg').animate({width: '100%'}, 'swing', function(){
				$('#homenav').animate({opacity: 1}, 'fast', function(){
					$('#panel-chat').animate({opacity: 1}, 'fast', function(){
						$('#proxevent').animate({opacity: 1}, 'fast');
						$('#home-music-content').animate({opacity: 1}, 'fast', function(){
							cb.ctr('gotorave', 'link_music');
							$('#home-users-content').animate({opacity: 1}, 'fast');
						});
					})
				})
			});
		});
		cb.setConfig('no_refresh_chat', false);
		this.chatInterval = setInterval(function(){
			if(!cb.getConfig('no_refresh_chat')){
				cb.loadAll([
				    ['store', 'gotorave', 'chat'],
					['view', 'gotorave', 'chat']
				]);
			}
		}, 2000);
	},
	
	home: function(){
		cb.loadAll([
			['store', 'gotorave', 'home'],
			['view', 'gotorave', 'home']
		], function(){
			$('#home-music-content').animate({opacity: 1}, 'fast', function(){
				cb.ctr('gotorave', 'link_music');
				$('#home-users-content').animate({opacity: 1}, 'fast');
			});
			cb.ctr('gotorave', 'auto_scroll');
		});
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
	
	changesala: function(record){
		$('#chat-sala-name').html(record['name']);
		
		cb.loadAll([['store', 'gotorave', 'chat', {'action': 'change', 'sala_id': record['id']}],
					['store', 'gotorave', 'chat'],
					['view',  'gotorave', 'chat']]);
		
	},
	
	sendchat: function(){
		ctr = this;
		if($("textarea[name='msg']").val().trim()!=''){
			cb.send('chat-send','gotorave','chat',function(){
				cb.loadAll([['store', 'gotorave', 'chat'],
				            ['view',  'gotorave', 'chat']]);
			});
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
		var ctr = this;
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
						listeners: {
							click: function(){
								$(this).parent().parent().remove();
							}
						}
					}]
				});
			}else{
				$('#user-progress').find('.progress-bar').stop().animate({width: '0%'}, 'fast', function(){
					$(this).parent().parent().css('display','none');
					ctr.showPopup('No se ha podido crear el usuario, inténtelo mas tarde');
				});
			}
		});
	},
	
	sharemusic: function(){
		ctr = this;
		if($("input[name='titulo']").val()==''){
			ctr.showPopup('Introduce un título o nombre de la canción');
		}else if($("textarea[name='enlace']").val().search('http://')<0 && $("textarea[name='enlace']").val().search('https://')<0){
			ctr.showPopup('Introduce algún enlace en la descripción');
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
	
	saveuserinfo: function(butsave){
		var ctr = this;
		var img = cb.getConfig('user_image_file');
		if(!ctr.saving_userpanel){
			ctr.saving_userpanel = true;
			$('#prog_save_userpanel').css('display', 'block');
			$(butsave).html('Guardando...');
			var formdata = $('#formuserpanel').serializeArray();
			console.log(formdata);
			var tags = '';
			for(s=0; s<formdata.length; s++){
				if(formdata[s]['name']=='tags[]'){
					tags += formdata[s]['value']+',';
				}
			}
			if(img){
				cb.fileUpload(img, 'gotorave', 'userpanel', '#prog_save_userpanel', {action: 'imageupload', name: $('#usernameinput').val(), tags: tags}, function(r){
					if(r == 'true'){
						cb.load('store', 'gotorave', 'users', {'action': 'get_data'});
						$('#prog_save_userpanel').find('.progress-bar').css('width', '100%');
						cb.sto(function(){
							$('#prog_save_userpanel').css('display', 'none').find('.progress-bar').css('width', '0%');
							$(butsave).html('Guardado').addClass('btn-success').removeClass('btn-primary');
							cb.sto(function(){
								$(butsave).html('Guardar cambios').addClass('btn-primary').removeClass('btn-success');
							}, 3000);
						}, 600);
					}else{
						$('#prog_save_userpanel').css('display', 'none').find('.progress-bar').css('width', '0%');
						$(butsave).html('Guardar cambios');
						ctr.showPopup('No se ha podido cargar la imagen');
					}
					ctr.saving_userpanel = false;
				});
				cb.delConfig('user_image_file');
			}else{
				$('#prog_save_userpanel').find('.progress-bar').css('width', '50%');
				cb.send({action: 'changename', name: $('#usernameinput').val(), tags: tags}, 'gotorave', 'userpanel', function(r){
					if(r == 'true'){
						cb.load('store', 'gotorave', 'users', {'action': 'get_data'});
						$('#prog_save_userpanel').find('.progress-bar').css('width', '100%');
						cb.sto(function(){
							$('#prog_save_userpanel').css('display', 'none').find('.progress-bar').css('width', '0%');
							$(butsave).html('Guardado').addClass('btn-success').removeClass('btn-primary');
							cb.sto(function(){
								$(butsave).html('Guardar cambios').addClass('btn-primary').removeClass('btn-success');
							}, 2000);
						}, 600);
					}else{
						$('#prog_save_userpanel').css('display', 'none').find('.progress-bar').css('width', '0%');
						$(butsave).html('Guardar cambios');
						ctr.showPopup('No se ha podido guardar');
					}
					ctr.saving_userpanel = false;
				});
			}
		}else{
			ctr.showPopup('Los cambios se estan enviando');
		}
	},
	
	load_user_panel: function(){
				
		cb.load('view', 'gotorave', 'userpanel', function(){
			var user_data = cb.getConfig('user_data');
			for(var v=0; v<user_data['tags'].length; v++){
				var temp_name = user_data['tags'][v]['name'];
				$('#userpanel').find('ul.navbar-dropdown').find('li').each(function(){
					if($(this).find('a').text() == temp_name){
						$(this).find('a').click();
					}
				});
			}
			cb.ctr('gotorave', 'auto_scroll');
		});
	},
	
	auto_scroll: function(){
		cb.scrollTo('#homenav', 500);
	},
	
	load_events: function(id_tag){
		
		cb.load('store', 'gotorave', 'events', {'action': 'load', 'id_tag': id_tag}, function(){
			cb.load('view', 'gotorave', 'events', function(){
				cb.ctr('gotorave', 'auto_scroll');
			});
		});
	},
	
	load_users: function(id_tag)
	{	
		$('#users-content').remove();
		
		cb.load('store', 'gotorave', 'users', {'action': 'load', 'id_tag': id_tag}, function(){
			cb.load('view', 'gotorave', 'users', function(){
				if(cb.getConfig('user_data').add_friends > 0){
					$('#panel-add-friend').css('display', 'block');
				}else{
					$('#panel-add-friend').remove;
				}
				cb.ctr('gotorave', 'auto_scroll');
			});
		});
	},
	
	load_music: function(id_tag)
	{
		$('#music-content').remove();
		cb.load('store', 'gotorave', 'music', {'action': 'load', 'id_tag': id_tag}, function(){
			cb.load('view', 'gotorave', 'music', function(){
				cb.ctr('gotorave', 'link_music');
				cb.ctr('gotorave', 'auto_scroll');
			});
		});
	},
	
	link_music: function(){
		$('#music-content, #home-music-content').on('click', 'a', function(){
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
	},
	
	add_tag: function(li){
		var val = $(li).html();
		var val2 = $(li).attr('data-id');
		cb.create({
			xtype: 'div',
			cls: 'label label-default pull-left',
			appendTo: '#add-music-tag',
			css: {
				'margin-right': '5px',
				'margin-top': '5px',
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
				listeners: {
					click: function(){
						if($('#add-tag').css('display') == 'none'){
							$('#add-tag').css('display', 'block');
						}
						cb.create({
							xtype: 'li',
							appendTo: "ul[aria-labelledby='add-tag']",
							items: {
								xtype: 'a',
								attr: {
									'data-id': val2
								},
								text: val,
								listeners: {
									click: function(){
										cb.ctr('gotorave', 'add_tag', this);
									}
								}
							}
						});
						$(this).parent().remove();
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
		if(!$("ul[aria-labelledby='add-tag'] li").length){
			$('#add-tag').css('display', 'none');
		}
	},
	
	change_pass: function(){
		var ctr = this;
		ctr.showPopup({
			xtype: 'form',
			id: 'changepass',
			items: [{
				xtype: 'label',
				text: 'Contraseña actual'
			},{
				xtype: 'input',
				type: 'password',
				name: 'last_pass'
			},{
				xtype: 'label',
				text: 'Contraseña nueva',
				margin: '10px 0 0 0'
			},{
				xtype: 'input',
				type: 'password',
				name: 'new_pass'
			},{
				xtype: 'button',
				text: 'Ver',
				margin: '20px 0 0 0',
				listeners: {
					mouseover: function(){
						$(this).parent().find('input').attr('type', 'text');
					},
					mouseout: function(){
						$(this).parent().find('input').attr('type', 'password');
					}
				}
			},{
				xtype: 'button',
				type: 'primary',
				text: 'Cambiar contraseña',
				pull: 'right',
				margin: '20px 0 0 10px',
				listeners: {
					click: function(){
						cb.ctr('gotorave', 'do_change_pass');
					}
				}
			}]
		}, 'Cambiar contraseña');
	},
	
	do_change_pass: function(){
		var last_pass = $('#changepass').find('input[name="last_pass"]').val(),
		new_pass = $('#changepass').find('input[name="new_pass"]').val();
		
		if(last_pass && new_pass){
			cb.create({
				xtype: 'div',
				padding: 10,
				text: 'Cambiando contraseña...',
				renderTo: '#changepass'
			});
			
			cb.load('store', 'gotorave', 'userpanel', {'action': 'change_pass', 'last_pass': last_pass, 'new_pass': new_pass}, function(res){
				if(res == 'true'){
					cb.create({
						xtype: 'div',
						padding: 10,
						size: '17px',
						text: 'Contraseña cambiada con éxito!',
						renderTo: '#changepass'
					});
				}
			});
		}
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
					listeners: {
						click: function(){
							cb.effect('#popupinforeg', {
								type: 'flipout',
								dire: 'right',
								fn: function(){
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
	
	showPopup: function(msg, title){
		if(!$.isPlainObject(msg) && !$.isArray(msg)){
			msg = {
				xtype: 'span',
				text: msg
			};
		}
		if(!title) title = 'Información';
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
					listeners: {
						click: function(){
							cb.effect($(this).parent().parent(), {
								type: 'flipout',
								dire: 'up',
								fn: function(){
									$(this).parent().remove();
								}
							});
						}
					}
				},{
					xtype: 'div',
					size: 19,
					text: title,
					cls: 'text-center'
				}]
			},{
				xtype: 'body',
				items: msg
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
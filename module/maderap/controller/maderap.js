cb.define({
	
	xtype: 'controller',
	name: 'maderap',
	
	onload: function(){
		cb.loadAll([
			['view', 'common', 'base'],
			['view', 'maderap', 'search'],
			['store', 'maderap', 'letra'],
			['view', 'maderap', 'csel']
		], function(){
			var record = $('select[name="letra"] option:first').getRecord();
			cb.ctr('maderap', 'insert', record.text);
		});
		
		cb.setConfig('letters', '1234567890qwertyuiopasdfghjklñzxcvbnmáéíóú,._');
		
		$('body').on('keydown', function(e){
			if(cb.getConfig('editing')){
				var letters = cb.getConfig('letters');
				if(e.keyCode == 8){
					if(cb.getConfig('writing')){
						$(cb.getConfig('writing')).html($(cb.getConfig('writing')).text().substr(0, $(cb.getConfig('writing')).text().length-1));
						if($(cb.getConfig('writing')).text() == ''){
							$(cb.getConfig('writing')).remove();
							cb.setConfig('writing', false);
						}
					}else{
						if(cb.getConfig('editing')){
							$('#cursor').prev().remove();
						}
					}
				}
				else if(e.keyCode == 39 || e.keyCode == 40){
					if($('#cursor').next()){
						$('#cursor').next().after($('#cursor'));
						cb.setConfig('writing', false);
					}
				}
				else if(e.keyCode == 37 || e.keyCode == 38){
					if($('#cursor').prev()){
						$('#cursor').prev().before($('#cursor'));
						cb.setConfig('writing', false);
					}
				}else if(e.keyCode == 13){
					cb.ctr('maderap', 'insertBr', true);
					cb.setConfig('writing', false);
				}
				else if(letters.indexOf(String.fromCharCode(e.keyCode).toLowerCase()) >= 0){
					if(cb.getConfig('writing')){
						$(cb.getConfig('writing')).append(String.fromCharCode(e.keyCode).toLowerCase());
					}else{
						var word = cb.ctr('maderap', 'createWord', String.fromCharCode(e.keyCode).toLowerCase());
						var temp_id = cb.autoname();
						$(word).attr('id', temp_id);
						cb.setConfig('writing', '#'+temp_id);
						$('#cursor').before(word);
					}
				}else{
					if(cb.getConfig('writing')){
						e.preventDefault();
					}
					cb.setConfig('writing', false);
				}
			}
		});
	},
	
	animCursor: function(){
		if($('#cursor').css('visibility') == 'visible'){
			$('#cursor').css('visibility', 'hidden');
		}else{
			$('#cursor').css('visibility', 'visible');
		}
	},
	
	cursorOut: function(){
		if(cb.getConfig('editing')){
			clearInterval(cb.getConfig('editing'));
			cb.setConfig('editing', false);
		}
		$('#cursor').css('visibility', 'hidden');
		$('#cursor').css('display', 'none');
	},
	
	search: function(){
		cb.send('search_content', 'maderap', 'search', function(res){
			cb.load('view', 'maderap', 'resultado');
		});
		this.cursorOut();
	},
	
	insertBr: function(fromKey){
		cb.create({
			xtype: 'div',
			beforeTo: '#cursor',
			cursor: 'text',
			width: '100%',
			height: 26,
			text: '&nbsp;',
			listener: {
				click: function(e){
					
					if($(this).attr('id')){
						var id = $(this).attr('id');
					}else{
						var id = cb.autoname();
						$(this).attr('id', id);
					}
					
					$('#'+id).before($('#cursor'));
				}
			}
		});
		if(!fromKey){
			$('input[name="insert"]').focus();
			this.cursorOut();
		}
	},
	
	createWord: function(word){
		return cb.create({
			xtype: 'div',
			cls: 'word',
			padding: '0px 3px',
			css: {'font-size': '17px'},
			cursor: 'text',
			attr: {'draggable': 'true'},
			float: 'left',
			listener: {
				dragover: function(e){
					e.preventDefault();
				},
				dragstart: function(e){
										
					if($(this).attr('id')){
						var id = $(this).attr('id');
					}else{
						var id = cb.autoname();
						$(this).attr('id', id);
					}
					e.originalEvent.dataTransfer.setData("id_word", id);
					e.originalEvent.dataTransfer.setData("word", $(this).text());
				},
				drop: function(e){
					var x = e.offsetX,
						w = $(this).width(),
						id_word = e.originalEvent.dataTransfer.getData("id_word"),
						word = e.originalEvent.dataTransfer.getData("word");
					
					if($(this).attr('id')){
						var id = $(this).attr('id');
					}else{
						var id = cb.autoname();
						$(this).attr('id', id);
					}
					
					if(x > w/2){
						$('#'+id).after($('#'+id_word));
					}else{
						$('#'+id).before($('#'+id_word));
					}
				},
				click: function(e){
					var x = e.offsetX,
					w = $(this).width();
					
					if($(this).attr('id')){
						var id = $(this).attr('id');
					}else{
						var id = cb.autoname();
						$(this).attr('id', id);
					}
					
					if(x > w/2){
						$('#'+id).after($('#cursor'));
					}else{
						$('#'+id).before($('#cursor'));
					}
				}
			},
			text: word
		});
	},
	
	insert: function(word)
	{
		if(typeof word === 'string'){
			if(word.indexOf(' ') > -1){
				var words = word.split(' ');
			}else{
				var words = [word];
			}
			for(var i=0; i<words.length; i++){
				if(typeof words[i] === 'string'){
					words[i].trim();
					if(words[i] == '|'){
						this.insertBr();
					}else{
						word = this.createWord(words[i]);
						$('#cursor').before(word);
					}
				}
			}
		}
		this.cursorOut();
	},
	
	reset: function(){
		$('#pizarra').empty().append(cb.create({
			xtype: 'div',
			id: 'cursor',
			css: {'margin-top': 2},
			float: 'left',
			text: '&#9617;'
		}));
	},
	
	load_letters: function(){
		current_seled = $('select[name="letra"]').val();
		cb.loadAll([
		    ['store', 'maderap', 'letra'],
			['view', 'maderap', 'csel']
		], function(){
			if(current_seled){
				$('select[name="letra"]').val(current_seled);
			}
		});
	},
	
	save: function(){
		var id = $('select[name="letra"]').find('option:selected').getRecord().id;
		var letra = '';
		$('#pizarra').find('*').each(function(k, e){
			var temp_word = $(e).text();
			if(temp_word != '░'){
				if(temp_word.trim() != ''){
					letra += temp_word+' ';
				}else{
					letra += '| ';
				}
			}
		});
		cb.send({id: id, letra: letra}, 'maderap', 'letra', function(res){
			if(res){
				$('#bsave').addClass('btn-success');
				cb.sto(function(){
					$('#bsave').removeClass('btn-success');
				}, 500);
			}
			cb.ctr('maderap', 'load_letters');
		});
	},
	
	new_letter: function(){
		cb.popup({
			type: 'primary',
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
					text: 'Crear letra nueva',
					cls: 'text-center'
				}]
			},{
				xtype: 'body',
				id: 'cnlbody',
				defaults:{
					margin: 5
				},
				items: [{
					xtype: 'div',
					text: 'Nombre para la canción'
				},{
					xtype: 'input',
					type: 'text',
					name: 'new_letter'
				},{
					xtype: 'button',
					text: 'Crear',
					click: function(){
						cb.ctr('maderap', 'add_letter', $('input[name="new_letter"]').val());
					}
				}]
			}]
		});
	},
	
	add_letter: function(le){
		cb.load('store', 'maderap', 'letra', {'new': le}, function(id){
			cb.ctr('maderap', 'save');
			if($.isNumeric(id)){
				$('#cnlbody').html(cb.create({
					xtype: 'div',
					margin: 10,
					text: 'Letra para la cación creada con éxito!'
				}));
				cb.ctr('maderap', 'reset');
				cb.loadAll([
				    ['store', 'maderap', 'letra'],
					['view', 'maderap', 'csel']
				]);
				$('select[name="letra"]').val(id).attr('value', id);
			}
		});
	},
	
	write: function(){
		cb.setConfig('writing', '#'+cb.autoname());
	},
	
	remove: function(id){
		cb.load('store', 'maderap', 'letra', {'remove': id}, function(res){
			cb.ctr('maderap', 'reset');
			cb.loadAll([
			    ['store', 'maderap', 'letra'],
				['view', 'maderap', 'csel']
			], function(){
				var record = $('select[name="letra"] option:first').getRecord();
				cb.ctr('maderap', 'insert', record.text);
			});
		});
	}
});
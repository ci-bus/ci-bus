cb.define({
	
	xtype: 'controller',
	name: 'maderap',
	
	onload: function(){
		cb.loadAll([
		    ['store', 'maderap', 'letra'],
			['view', 'common', 'base'],
			['view', 'maderap', 'search']
			
		]);
		
		cb.setConfig('letters', 'qwertyuiopasdfghjklñzxcvbnmáéíóú,._');
		
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
		$('#cursor').css('visibility', 'visible');
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
				word = this.createWord(words[i]);
				$('#cursor').before(word);
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
	}
});
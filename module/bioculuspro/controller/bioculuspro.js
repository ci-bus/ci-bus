cb.define({
	
	xtype: 'controller',
	name: 'bioculuspro',
	
	onload: function(){
		cb.loadAll([
		    ['store','bioculuspro','home'],        
			['view', 'common', 'base'],
			['view', 'bioculuspro', 'menu'],
			['view', 'bioculuspro', 'landing'],
			['view', 'bioculuspro', 'products'],
			['view', 'bioculuspro', 'whatis'],
			['view', 'bioculuspro', 'moreinfo'],
			['view', 'bioculuspro', 'questions'],
			['view', 'bioculuspro', 'suscribe'],
			['view', 'bioculuspro', 'footer']
		]);
		
		$(window).scroll(function(){
			var top = $(window).scrollTop();
			var top2 = $('header').height() - top;
			if(top2 < -20){
				if($('#submenu').css('position') == 'absolute'){
					
					$('#submenu').stop().css({position: 'fixed', top: top2}).animate({top: 0}, 'fast');
				}
			}else if(top2 > 0){
				if($('#submenu').css('position') == 'fixed'){
					$('#submenu').stop().css({position: 'absolute', top: 0});
				}
			}
		});
	},
	
	load_product: function(record){
		
		 cb.loadAll([
		     ['view','common','base'],
			 ['store','bioculuspro','producto', { id: record.id }],        
		     ['view', 'bioculuspro', 'product/menu'],
		     ['view', 'bioculuspro', 'product/landing'],
		     ['view','bioculuspro','product/video'],
		     ['view','bioculuspro','product/whatis'],
		     ['view','bioculuspro','product/instalacion'],
		     ['view','bioculuspro','product/moreinfo'],
		     ['view','bioculuspro','product/questions'],
		     ['view','bioculuspro','product/footer']
		]);
	},
	
	enviar_mensaje: function(){
		var err = 0;
		if($("input[name='nombre']").val().trim()=='')
		{
			err++;
			$("input[name='nombre']").css('border-color', 'red');
		}
		else
		{
			$("input[name='nombre']").css('border-color', '#ccc');
		}
		
		if($("input[name='email']").val().trim()=='')
		{
			err++;
			$("input[name='email']").css('border-color', 'red');
		}
		else
		{
			if($("input[name='email']").css('border-color')=='rgb(255, 0, 0)'){
				err++;
			}else{
				$("input[name='email']").css('border-color', '#ccc');
			}
		}
		
		if($("input[name='telefono']").val().trim()=='')
		{
			err++;
			$("input[name='telefono']").css('border-color', 'red');
		}
		else
		{
			$("input[name='telefono']").css('border-color', '#ccc');
		}
		
		if($("input[name='capcha']").val().trim() != cb.getConfig('ncapcha'))
		{
			err++;
			$("input[name='capcha']").css('border-color', 'red');
		}
		else
		{
			$("input[name='capcha']").css('border-color', '#ccc');
		}
		
		if($("textarea[name='mensaje']").val().trim()!='' && err === 0){
			$("textarea[name='mensaje']").css('border-color', '#ccc');
			cb.send('chat-send','bioculuspro','send_mail',function(){
				cb.loadAll([['store', 'gotorave', 'chat'],
				            ['view',  'gotorave', 'chat']]);
			});
		}else{
			$("textarea[name='mensaje']").css('border-color', 'red');
		}
	}
});
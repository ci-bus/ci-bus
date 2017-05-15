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
	}
});
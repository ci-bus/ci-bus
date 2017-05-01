cb.define({
	
	xtype: 'controller',
	name: 'bioculuspro',
	
	onload: function(){
		cb.loadAll([
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
	}
});
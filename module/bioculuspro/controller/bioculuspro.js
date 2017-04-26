cb.define({
	
	xtype: 'controller',
	name: 'bioculuspro',
	
	onload: function(){
		cb.loadAll([
			['view', 'common', 'base'],
			['view', 'bioculuspro', 'bioculuspro']
		]);
	}
});
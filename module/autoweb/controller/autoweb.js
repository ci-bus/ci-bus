cb.define({
	
	xtype: 'controller',
	name: 'autoweb',
	
	onload: function(){
		cb.loadAll([
			['view', 'common', 'base'],
			['view', 'autoweb', 'menu'],
			['view', 'autoweb', 'landing'],
			['view', 'autoweb', 'content'],
			['view', 'autoweb', 'footer']
		]);
	},
	
	adminLoad: function(){
		cb.loadAll([['view', 'common', 'base'],
					['view', 'autoweb', 'admin/admin']], function(){
			
		});
	},
	
	search_content: function(){
		cb.send('search_content', 'autoweb', 'search_content', function(res){
			
		});
	}
});
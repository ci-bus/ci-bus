cb.define({
	xtype: 'controller',
	name: 'ci-bus',
	
	route: {
		'#loadview/:str': 'loadview',
		'#home': 'loadhome'
	},
	
	loadview: function (hash) {
		cb.render(cb.getView(hash[1]));
		$('pre code').each(function(i, block) {
		    hljs.highlightBlock(block);
		});
	},
	
	loadhome: function () {
		cb.render(cb.getView('ci-bus'));
	},
	
	onload: function () {
	    
	    // Load font
		$.cachedScript("assets/css/font-quicksand.css", "css");
		
		// Load highlight style and script
		$.cachedScript("libraries/highlight/styles/tomorrow.css", "css");
		$.cachedScript("libraries/highlight/highlight.pack.js", "js").done(function () {
			cb.loadAll([
			    //['component', 'gotorave', 'review'],
				['store', 'ci-bus', 'code'],
				['store', 'ci-bus', 'texts'],
				['view', 'common', 'base'],
				['view', 'ci-bus', 'mainmenu'],
				['view', 'ci-bus', 'doc/createmodule'],
				['view', 'ci-bus', 'doc/controllers'],
				['view', 'ci-bus', 'ci-bus']
			], function () {
				cb.router.hashchange();
			});
		});
	}
});
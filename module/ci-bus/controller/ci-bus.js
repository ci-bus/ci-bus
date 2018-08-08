cb.define({
	xtype: 'controller',
	name: 'ci-bus',
	
	route: {
		'#loadview/:str': 'loadview',
		'#home': 'loadhome'
	},
	
	loadview: function (hash) {
		this.resetmainmenu();
		if (hash[1] == 'items') {
			cb.getCmp('#mainmenu-items').show();
		} else if (hash[1] == 'stores') {
		    cb.getCmp('#mainmenu-php-methods').show();
		    cb.getCmp('#mainmenu-javascript-methods').show();
		} else if (hash[1] == 'functions') {
			cb.getCmp('#mainmenu-ci-bus-methods').show();
		}
		cb.render(cb.getView(hash[1]));
		$('pre code').each(function(i, block) {
		    hljs.highlightBlock(block);
		});
	},
	
	resetmainmenu: function () {
		cb.scrollTo(0, 0);
		cb.getCmp('#mainmenu-items').hide();
	    cb.getCmp('#mainmenu-php-methods').hide();
	    cb.getCmp('#mainmenu-javascript-methods').hide();
	    cb.getCmp('#mainmenu-ci-bus-methods').hide();
	},
	
	loadhome: function () {
		this.resetmainmenu();
		cb.render(cb.getView('ci-bus'));
	},
	
	onload: function () {
	    
		// Create div loading
		cb.create({
			xtype: 'img',
			src: './assets/img/loading.gif',
			renderTo: 'body',
			position: 'fixed',
			top: 'calc(50% - 64px)',
			left: 'calc(50% - 64px)'
		});
		
		// Load highlight style and script
		$.cachedScript("libraries/highlight/styles/custom.css", "css");
		
		// Load font
		$.cachedScript("https://fonts.googleapis.com/css?family=Quicksand:300,400", "css").done(function () {
			$('body').css({
				'font-family': 'Quicksand, Verdana, Arial',
				'font-weight': 300
			});
			$.cachedScript("libraries/highlight/highlight.pack.js", "js").done(function () {
				cb.loadAll([
					['store', 'ci-bus', 'code'],
					['store', 'ci-bus', 'textsEs'],
					['component', 'ci-bus', 'totestcode'],
					['component', 'ci-bus', 'phpmethod'],
					['view', 'common', 'base'],
					['view', 'ci-bus', 'mainmenu'],
					['view', 'ci-bus', 'doc/createmodule'],
					['view', 'ci-bus', 'doc/controllers'],
					['view', 'ci-bus', 'doc/views'],
					['view', 'ci-bus', 'doc/items'],
					['view', 'ci-bus', 'doc/functions'],
					['view', 'ci-bus', 'doc/properties'],
					['view', 'ci-bus', 'doc/stores'],
					['view', 'ci-bus', 'doc/install'],
					['view', 'ci-bus', 'ci-bus']
				], function () {
				    $('#content').css('padding-top', 60);
				    cb.define({
						xtype: 'store',
						name: 'textsEs',
						data: cb.getStore('texts').getData()
					});
					cb.router.hashchange();
				});
			});
		});
	},
	
	formatCode: function (code) {
	    code = code.replace(new RegExp('{',"g"), '&#123;');
	    code = code.replace(new RegExp('}',"g"), '&#125;');
	    code = code.replace(new RegExp('<',"g"), '&#60;');
        code = code.replace(new RegExp('>',"g"), '&#62;');
	    return code;
	},
	
	changeLang: function (lang) {
		var ctr = this,
			lang = cb.getCmp('#icolang').attr('lang'),
			storeName = 'texts' + lang.charAt(0).toUpperCase() + lang.slice(1);
		
		if (!cb.getStore(storeName)) {
			cb.load('store', 'ci-bus', 'texts' + lang.charAt(0).toUpperCase() + lang.slice(1), function () {
				cb.define({
					xtype: 'store',
					name: storeName,
					data: cb.getStore('texts').getData()
				});
				cb.ctr('ci-bus', 'applyLang', lang);
			});
		} else {
			cb.getStore('texts').setData(cb.getStore(storeName).getData());
			cb.ctr('ci-bus', 'applyLang', lang);
		}
	},
	
	applyLang: function (lang) {
	    var ctr = this;
		cb.render(cb.getView('base'));
		cb.render(cb.getView('mainmenu'));
		$('#content').css('padding-top', 60);
		var ico = cb.getCmp('#icolang');
		if (lang == 'en') {
			ico.attr({
				lang: 'es',
				src: './assets/img/lang_es.png'
			});
		} else {
			ico.attr({
				lang: 'en',
				src: './assets/img/lang_en.png'
			});
		}
		if (location.hash) {
			cb.router.hashchange();
		} else {
			ctr.loadhome();
		}
	}
});
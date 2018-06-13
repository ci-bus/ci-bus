cb.define({
	xtype: 'view',
	name: 'mainmenu',
	appendTo: 'header',
	items: [{
		xtype: 'nav',
		type: 'default static-top',
		color: '#454b49',
		store: 'texts',
		field: 'menu',
		items: [{
			xtype: 'header',
			items: [{
				xtype: 'a',
				padding: '1px 0px 1px 10px',
				css: {cursor: 'pointer'},
				cls: 'navbar-brand',
				href: '#home',
				items: [{
				    xtype: 'img',
				    src: './assets/img/cb_logo.png',
				    width: 48,
				    float: 'left'
				}]
			}]
		}, {
			xtype: 'collapse',
			items: [{
				xtype: 'navbar',
				type: 'left',
				items: [{
					xtype: 'dropdown-menu',
					glyphicon: 'book',
					text: ' {tx0}',
					css: {'font-size': '17px'},
					id: 'main-event',
					items: [{
						xtype: 'a',
						text: '{tx1}',
						css: {'font-size': '16px'},
						href: '#loadview/createmodule'
					}, {
                        xtype: 'a',
                        text: '{tx2}',
                        css: {'font-size': '16px'},
                        href: '#loadview/controllers'
                    }, {
                        xtype: 'a',
                        text: '{tx3}',
                        css: {'font-size': '16px'},
                        href: '#loadview/views'
                    }, {
                        xtype: 'a',
                        text: '{tx4}',
                        css: {'font-size': '16px'},
                        href: '#loadview/items'
                    }]
				}]
			}]
		}]
	}]
});
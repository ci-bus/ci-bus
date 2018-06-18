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
				defaults: {
				    css: {'font-size': '17px'}
				},
				items: [{
					xtype: 'navbar-dropdown',
					glyphicon: 'book',
					text: ' {tx0}',
					id: 'mainmenu-doc',
					items: [{
						xtype: 'a',
						text: '{tx1}',
						href: '#loadview/createmodule'
					}, {
                        xtype: 'a',
                        text: '{tx2}',
                        href: '#loadview/controllers'
                    }, {
                        xtype: 'a',
                        text: '{tx3}',
                        href: '#loadview/views'
                    }, {
                        xtype: 'a',
                        text: '{tx4}',
                        href: '#loadview/items'
                    }]
				}, {
					xtype: 'navbar-dropdown',
					glyphicon: 'book',
					text: ' Items',
					id: 'mainmenu-items',
					defaults: {
						click: function () {
							$('body').scrollTo($(cb.getCmp(this).getOpt('scrollTo')).offset().top);
						}
					},
					items: [{
						xtype: 'a',
						text: 'button',
						scrollTo: '#item-button'
					}],
					onRender: function () {
					    $(this).hide();
					}
				}]
			}]
		}]
	}]
});
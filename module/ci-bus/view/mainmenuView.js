cb.define({
	xtype: 'view',
	name: 'mainmenu',
	appendTo: 'header',
	onRender: function () {
	    // Load google translator
        $.cachedScript("//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", "js").done(function () {
            function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                    pageLanguage: 'es',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
            }
        });
	},
	items: [{
		xtype: 'nav',
		type: 'default fixed-top',
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
                    }, {
                        xtype: 'a',
                        text: '{tx5}',
                        href: '#loadview/functions'
                    }, {
                        xtype: 'a',
                        text: '{tx6}',
                        href: '#loadview/properties'
                    }, {
                        xtype: 'a',
                        text: '{tx7}',
                        href: '#loadview/stores'
                    }]
				}, {
					xtype: 'navbar-dropdown',
					glyphicon: 'bookmark',
					text: ' Items',
					id: 'mainmenu-items',
					hidden: true,
					click: function () {
                        var ul = cb.getCmp(this).up().down('ul');
                        
                        if (ul.height() > window.innerHeight - 50) {
                            ul.css({
                                height: window.innerHeight - 50,
                                overflow: 'auto'
                            });
                        } else {
                            ul.css({
                                height: 'auto'
                            });
                        }
                    },
					items: {
						xtype: 'a',
						store: 'texts',
						field: 'menu-items',
						text: '{tx}',
						click: function () {
						    var record = cb.getCmp(this).getRecord();
                            cb.scrollTo(record.st, 0, 60);
                            cb.sto(function(){
                                cb.common_prop(record.st, {
                                    color: 'red',
                                    css: {
                                        'font-weight': 600
                                    }
                                });
                            }, 200);
                            cb.sto(function(){
                                cb.common_prop(record.st, {
                                    color: 'black',
                                    css: {
                                        'font-weight': 500
                                    }
                                });
                            }, 800);
                        }
					}
				}, {
				    xtype: 'navbar-dropdown',
                    glyphicon: 'bookmark',
                    store: 'texts',
                    field: 'stores',
                    text: ' {tx11}',
                    id: 'mainmenu-php-methods',
                    hidden: true,
                    click: function () {
                        var ul = cb.getCmp(this).up().down('ul');
                        
                        if (ul.height() > window.innerHeight - 50) {
                            ul.css({
                                height: window.innerHeight - 50,
                                overflow: 'auto'
                            });
                        } else {
                            ul.css({
                                height: 'auto'
                            });
                        }
                    },
                    items: {
                        xtype: 'li',
                        store: 'texts',
                        field: 'menu-php-methods',
                        alterdata: function (record) {
                            if (record == 'separator') {
                                return cb.create({
                                    xtype: 'li',
                                    cls: 'divider',
                                    attr: {'role':'separator'}
                                });
                            }
                            return cb.create({xtype: 'a',
                                click: function () {
                                    var record = cb.getCmp(this).getRecord();
                                    cb.scrollTo($('h4:contains("' + record + '")'), 0, 75);
                                    cb.sto(function(){
                                        cb.common_prop('h4:contains("' + record + '")', {
                                            color: 'red',
                                            css: {
                                                'font-weight': 600
                                            }
                                        });
                                    }, 200);
                                    cb.sto(function(){
                                        cb.common_prop('h4:contains("' + record + '")', {
                                            color: 'black',
                                            css: {
                                                'font-weight': 500
                                            }
                                        });
                                    }, 800);
                                }
                            }, record);
                        }
                    }
				}, {
			        xtype: 'div',
				    id: 'google_translate_element',
				    pull: 'left'
				}]
			}]
		}]
	}]
});
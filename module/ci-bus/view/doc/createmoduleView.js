cb.define({
	xtype: 'view',
	name: 'createmodule',
	renderTo: '#content',
	renderOnLoad: false,
	
	items: [{
		xtype: 'container',
		store: 'texts',
		field: 'createmodule',
		items: [{
			field: 'tx1'
		}, {
			xtype: 'h3',
			field: 'tx2'
		}, {
			xtype: 'callout',
			text: '{tx3}',
			badge: '/module/'
		}, {
			xtype: 'callout',
			text: '{tx4}',
			items: [{
				xtype: 'badge',
				text: '/module/test/'
			}, {
				text: '{tx5}'
			}, {
				xtype: 'badge',
				text: '/module/test/view/'
			}]
			
		}, {
			xtype: 'h3',
			field: 'tx6'
		}, {
			xtype: 'callout',
			items: [{
				text: '{tx7}'
			}, {
				xtype: 'badge',
				text: '/module/test/controller/'
			}, {
				text: '{tx8}'
			}, {
				xtype: 'pre',
				margin: '10px 0px 0px',
				items: {
				    xtype: 'code',
                    store: 'code',
                    field: 'cd1',
                    alterdata: {
                        'code': function (v) {
                            v = cb.ctr('ci-bus', 'formatCode', v);
                            return v;
                        }
                    },
                    cls: '{type}',
                    text: '{code}'
				}
			}]
		}, {
            xtype: 'h3',
            field: 'tx9'
        }, {
            xtype: 'callout',
            items: [{
                text: '{tx10}'
            }, {
                xtype: 'badge',
                text: '/module/test/view/'
            }, {
                text: '{tx11}'
            }, {
                xtype: 'pre',
                margin: '10px 0px 0px',
                items: {
                    xtype: 'code',
                    store: 'code',
                    field: 'cd2',
                    cls: '{type}',
                    text: '{code}'
                }
            }]
        }, {
            xtype: 'h3',
            field: 'tx12'
        }, {
            xtype: 'callout',
            items: [{
                text: '{tx13}'
            }, {
                xtype: 'badge',
                text: '/module/test/store/'
            }, {
                text: '{tx14}'
            }, {
                xtype: 'pre',
                margin: '10px 0px',
                items: {
                    xtype: 'code',
                    store: 'code',
                    field: 'cd3',
                    cls: '{type}',
                    text: '{code}'
                }
            }, {
                field: 'tx15'
            }]
        }, {
            xtype: 'h3',
            field: 'tx16'
        }, {
            xtype: 'callout',
            items: [{
                text: '{tx17}'
            }, {
                xtype: 'badge',
                text: '/module/test/view/component/'
            }, {
                text: '{tx18}'
            }, {
                xtype: 'pre',
                margin: '10px 0px 0px',
                items: {
                    xtype: 'code',
                    store: 'code',
                    field: 'cd4',
                    cls: '{type}',
                    text: '{code}'
                }
            }]
        }]
	}]
});
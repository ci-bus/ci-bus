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
			xtype: 'blockquote',
			text: '{tx3}',
			badge: '/module/'
		}, {
			xtype: 'blockquote',
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
			xtype: 'blockquote',
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
					cls: 'javascript',
					store: 'code',
					text: '{cd1}'
				}
			}]
		}, {
            xtype: 'h3',
            field: 'tx9'
        }, {
            xtype: 'blockquote',
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
                    cls: 'javascript',
                    store: 'code',
                    text: '{cd2}'
                }
            }]
        }]
	}]
});
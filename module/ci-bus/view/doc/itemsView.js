cb.define({
    xtype: 'component',
    name: 'totestcode',
    items: {
        xtype: 'div',
        items: {
            xtype: 'button',
            store: 'texts',
            field: 'general',
            text: '{tx0}',
            click: function (e) {
                var btn = cb.getCmp(this);
                var code = btn.up('div', 1).down('code').getRecord().code;
                eval('var item = '+code);
                $(this).parent().html(cb.create(item));
            }
        }
    }
});

cb.define({
    xtype: 'view',
    name: 'items',
    renderTo: '#content',
    renderOnLoad: false,
    
    items: [{
        xtype: 'container',
        store: 'texts',
        field: 'items',
        items: [{
            field: 'tx1'
        }, {
            xtype: 'h3',
            field: 'tx2'
        }, {
            xtype: 'callout',
            field: 'tx3'
        }, {
            xtype: 'h3',
            field: 'tx4'
        }, {
            xtype: 'callout',
            items: [{
                text: '{tx5}'
            }, {
                xtype: 'a',
                text: '{tx6}',
                href: './examples'
            }]
        }, {
            xtype: 'h3',
            text: 'button'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx7'
                }, {
                    xtype: 'pre',
                    margin: '10px 0px',
                    items: {
                        xtype: 'code',
                        store: 'code',
                        field: 'cd10',
                        cls: '{type}',
                        text: '{code}'
                    }
                }, {
                    xtype: 'totestcode'
                }]
            }]
        }]
    }]
});
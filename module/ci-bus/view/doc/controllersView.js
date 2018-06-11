cb.define({
    xtype: 'view',
    name: 'controllers',
    renderTo: '#content',
    renderOnLoad: false,
    
    items: [{
        xtype: 'container',
        store: 'texts',
        field: 'controllers',
        items: [{
            field: 'tx1'
        }, {
            xtype: 'h3',
            field: 'tx2'
        }, {
            xtype: 'blockquote',
            items: [{
                text: '{tx6}'
            }, {
                xtype: 'a',
                text: 'Crear módulo',
                href: '#loadview/createmodule'
            }]
        }, {
            xtype: 'h3',
            text: '{tx7}'
        }, {
            xtype: 'blockquote',
            items: [{
                text: '{tx3}'
            }, {
                xtype: 'badge',
                text: '/core/config.php'
            }, {
                text: '{tx9}'
            }]
        }, {
            xtype: 'h3',
            text: '{tx8}'
        }, {
            xtype: 'blockquote',
            items: [{
                text: '{tx4}'
            }, {
                xtype: 'pre',
                margin: '10px 0px',
                items: {
                    xtype: 'code',
                    store: 'code',
                    field: 'cd5',
                    cls: '{type}',
                    text: '{code}'
                }
            }, {
                text: '{tx5}'
            }, {
                xtype: 'pre',
                margin: '10px 0px 0px',
                items: {
                    xtype: 'code',
                    store: 'code',
                    field: 'cd6',
                    cls: '{type}',
                    text: '{code}'
                }
            }]
        }]
    }]
});
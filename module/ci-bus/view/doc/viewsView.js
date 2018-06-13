cb.define({
    xtype: 'view',
    name: 'views',
    renderTo: '#content',
    renderOnLoad: false,
    
    items: [{
        xtype: 'container',
        store: 'texts',
        field: 'views',
        items: [{
            field: 'tx1'
        }, {
            xtype: 'h3',
            field: 'tx2'
        }, {
            xtype: 'callout',
            items: [{
                text: '{tx3}'
            }, {
                xtype: 'a',
                store: 'texts',
                field: 'menu',
                text: '{tx1}',
                href: '#loadview/createmodule'
            }]
        }, {
            xtype: 'h3',
            text: '{tx4}'
        }, {
            xtype: 'callout',
            items: {
                xtype: 'table',
                width: '100%',
                margin: 0,
                items: [{
                    xtype: 'head',
                    items: [{
                        field: 'tx8'
                    }, {
                        field: 'tx9'
                    }, {
                        field: 'tx10'
                    }]
                }, {
                    xtype: 'body',
                    items: [[{
                        text: 'name'
                    }, {
                        field: 'tx11'
                    }, {
                        field: 'tx5'
                    }], [{
                        text: 'appendTo<br>renderTo<br>prependTo'
                    }, {
                        field: 'tx11'
                    }, {
                        field: 'tx6'
                    }], [{
                        text: 'renderOnLoad'
                    }, {
                        field: 'tx14'
                    }, {
                        field: 'tx7'
                    }], [{
                        text: 'onRender'
                    }, {
                        field: 'tx12'
                    }, {
                        field: 'tx13'
                    }], [{
                        text: 'onload'
                    }, {
                        field: 'tx12'
                    }, {
                        field: 'tx15'
                    }]]
                }]
            }
        }, {
            xtype: 'h3',
            field: 'tx16'
        }, {
            xtype: 'callout',
            items: [{
                field: 'tx17'
            }, {
                xtype: 'a',
                store: 'texts',
                field: 'menu',
                text: '{tx4}',
                href: '#loadview/items'
            }]
        }]
    }]
});
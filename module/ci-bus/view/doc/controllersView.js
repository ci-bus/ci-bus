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
            xtype: 'callout',
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
            xtype: 'callout',
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
            xtype: 'callout',
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
            }, {
                xtype: 'h3',
                text: '{tx10}'
            }, {
                xtype: 'div',
                field: 'tx11'
            }, {
                xtype: 'div',
                field: 'tx12'
            }, {
                xtype: 'div',
                field: 'tx13'
            }, {
                xtype: 'div',
                field: 'tx14'
            }, {
                field: 'tx15'
            }]
        }, {
            xtype: 'h3',
            field: 'tx16'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                field: 'tx17'
            }, {
                xtype: 'pre',
                items: {
                    xtype: 'code',
                    store: 'code',
                    field: 'cd7',
                    cls: '{type}',
                    text: '{code}'
                }
            }, {
                field: 'tx18'
            }, {
                xtype: 'pre',
                margin: '10px 0px 0px',
                items: {
                    xtype: 'code',
                    store: 'code',
                    field: 'cd8',
                    cls: '{type}',
                    text: '{code}'
                }
            }, {
                xtype: 'h3',
                field: 'tx10'
            }, {
                xtype: 'div',
                field: 'tx19'
            }, {
                xtype: 'div',
                field: 'tx20'
            }, {
                xtype: 'div',
                field: 'tx21'
            }]
        }, {
            xtype: 'h3',
            field: 'tx22'
        }, {
            xtype: 'callout',
            items: [{
                field: 'tx23'
            }, {
                xtype: 'pre',
                margin: '10px 0px',
                items: {
                    xtype: 'code',
                    store: 'code',
                    field: 'cd9',
                    cls: '{type}',
                    text: '{code}'
                }
            }, {
                xtype: 'div',
                items: [{
                    xtype: 'span',
                    field: 'tx24'
                }, {
                    xtype: 'a',
                    field: 'tx25',
                    href: './examples#aaa'
                }]
            }]
        }]
    }]
});
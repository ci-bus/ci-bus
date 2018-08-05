cb.define({
    xtype: 'view',
    name: 'stores',
    renderTo: '#content',
    
    items: [{
        xtype: 'container',
        store: 'texts',
        field: 'stores',
        items: [{
            text: '{tx1}'
        }, {
            xtype: 'div',
            items: [{
                xtype: 'h3',
                field: 'tx2'
            }, {
                xtype: 'callout',
                items: [{
                    xtype: 'p',
                    field: 'tx3'
                }, {
                    xtype: 'h4',
                    field: 'tx4'
                }, {
                    xtype: 'pre',
                    position: 'relative',
                    items: [{
                        xtype: 'code',
                        store: 'code',
                        field: 'cd30',
                        alterdata: {
                            'code': function (v) {
                                v = cb.ctr('ci-bus', 'formatCode', v);
                                return v;
                            }
                        },
                        cls: 'php',
                        text: '{code}'
                    }, {
                        xtype: 'button',
                        size: 'xs',
                        store: 'texts',
                        field: 'funcTxt',
                        text: '{tx8}',
                        css: {
                            'line-height': '12px',
                            position: 'absolute',
                            top: -2,
                            right: 0,
                            padding: '2px 5px 0px'
                        },
                        click: function () {
                            cb.getCmp(this).up().down('code').selectContent();
                        }
                    }],
                    dblclick: function () {
                        cb.getCmp(this).selectContent();
                    }
                }]
            }, {
                xtype: 'h3',
                field: 'tx6'
            }, {
                xtype: 'phpmethod',
                field: 'methods1'
            }, {
                xtype: 'h3',
                field: 'tx7'
            }, {
                xtype: 'phpmethod',
                field: 'methods2'
            }, {
                xtype: 'h3',
                field: 'tx8'
            }, {
                xtype: 'phpmethod',
                field: 'methods3'
            }, {
                xtype: 'h3',
                field: 'tx10'
            }, {
                xtype: 'phpmethod',
                field: 'methods4'
            }, {
            	xtype: 'h3',
            	field: 'tx12'
            }, {
            	xtype: 'callout',
                items: [{
                    xtype: 'p',
                    field: 'tx13'
                }]
            }, {
            	xtype: 'h3',
            	field: 'tx14'
            }, {
                xtype: 'phpmethod',
                field: 'methods5'
            }]
        }]
    }]
});
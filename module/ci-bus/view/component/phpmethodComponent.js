cb.define({
    xtype: 'component',
    name: 'phpmethod',
    items: {
        xtype: 'div',
        items: [{
            xtype: 'callout',
            items: [{
                field: 'method',
                alterdata: function (val) {
                    return cb.create({
                        xtype: 'table',
                        margin: 0,
                        items: {
                            xtype: 'body',
                            defaults: {
                                border: 0
                            },
                            items: [{
                                width: 100,
                                items: {
                                    xtype: 'label',
                                    store: 'texts',
                                    field: 'stores',
                                    text: '{tx9}'
                                }
                            }, {
                                items: {
                                    xtype: 'h4',
                                    margin: 0,
                                    record: val
                                }
                            }]
                        }
                    });
                }
            }, {
                field: 'param',
                alterdata: function (val) {
                    for (var i = 1; i < 10; i ++) {
                        val = val.replace(' ' + i + '. ', '<br>' + i + '. ');
                    }
                    return cb.create({
                        xtype: 'table',
                        margin: 0,
                        items: {
                            xtype: 'body',
                            defaults: {
                                border: 0
                            },
                            items: [{
                                width: 100,
                                items: {
                                    xtype: 'label',
                                    store: 'texts',
                                    field: 'funcTxt',
                                    text: '{tx2}'
                                }
                            }, {
                                text: val
                            }]
                        }
                    });
                }
            }, {
                field: 'action',
                alterdata: function (val) {
                    return cb.create({
                        xtype: 'table',
                        margin: 0,
                        items: {
                            xtype: 'body',
                            defaults: {
                                border: 0
                            },
                            items: [{
                                width: 100,
                                items: {
                                    xtype: 'label',
                                    store: 'texts',
                                    field: 'funcTxt',
                                    text: '{tx3}'
                                }
                            }, {
                                text: val
                            }]
                        }
                    });
                }
            }, {
                field: 'example',
                alterdata: function (val) {
                    val = cb.ctr('ci-bus', 'formatCode', val);
                    return cb.create({
                        xtype: 'table',
                        margin: 0,
                        items: {
                            xtype: 'body',
                            defaults: {
                                border: 0
                            },
                            items: [{
                                width: 100,
                                items: {
                                    xtype: 'label',
                                    store: 'texts',
                                    field: 'funcTxt',
                                    text: '{tx5}'
                                }
                            }, {
                                items: {
                                    xtype: 'pre',
                                    position: 'relative',
                                    items: [{
                                        xtype: 'code',
                                        store: 'code',
                                        field: 'cd11',
                                        cls: 'php',
                                        text: val
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
                                }
                            }]
                        }
                    });
                }
            }, {
                field: 'info',
                alterdata: function (val) {
                    return cb.create({
                        xtype: 'table',
                        margin: 0,
                        items: {
                            xtype: 'body',
                            defaults: {
                                border: 0
                            },
                            items: [{
                                width: 100,
                                items: {
                                    xtype: 'label',
                                    store: 'texts',
                                    field: 'funcTxt',
                                    text: '{tx7}'
                                }
                            }, {
                                text: val
                            }]
                        }
                    });
                }
            }]
        }]
    }
});
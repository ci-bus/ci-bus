cb.define({
    xtype: 'view',
    name: 'functions',
    renderTo: '#content',
    
    items: [{
        xtype: 'container',
        store: 'texts',
        items: [{
            field: 'funcTxt',
            text: '{tx1}'
        }, {
            xtype: 'div',
            field: 'functions',
            items: [{
                xtype: 'h3',
                field: 'fun'
            }, {
                xtype: 'callout',
                items: [{
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
                                        text: '{tx5}'
                                    }
                                }, {
                                    items: {
                                        xtype: 'pre',
                                        items: {
                                            xtype: 'code',
                                            store: 'code',
                                            field: 'cd11',
                                            cls: 'javascript',
                                            text: val
                                        }
                                    }
                                }]
                            }
                        });
                    }
                }, {
                    field: 'return',
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
                                        text: '{tx4}'
                                    }
                                }, {
                                    text: val
                                }]
                            }
                        });
                    }
                }, {
                    field: 'more',
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
                                    width: 140,
                                    items: {
                                        xtype: 'label',
                                        store: 'texts',
                                        field: 'funcTxt',
                                        text: '{tx6}'
                                    }
                                }, {
                                    text: val
                                }]
                            }
                        });
                    }
                }, {
                    field: 'info',
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
        }]
    }]
});
cb.define({
    xtype: 'component',
    name: 'totestcode',
    items: {
        xtype: 'div',
        items: {
            xtype: 'button',
            store: 'texts',
            field: 'general',
            text: '{tx1}',
            click: function (e) {
                var btn = cb.getCmp(this),
                    parent = $(this).parent(),
                    code = btn.up('div', 1).down('code').getRecord().code;
                eval('var items = '+code);
                if (!$.isArray(items)) {
                    items = [items];
                }
                $(this).remove();
                for (var i = 0; i < items.length; i++) {
                    parent.append(cb.create(items[i]));
                }
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
                    xtype: 'callout',
                    margin: '10px 0px',
                    text: '{tx10}',
                    items: {
                        xtype: 'table',
                        margin: 0,
                        items: [{
                            xtype: 'head',
                            items: [{
                                field: 'tx8'
                            }, {
                                field: 'tx9'
                            }]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: 'type'
                            }, {
                                text: "'default', 'primary', 'success', 'info', 'warning', 'danger'"
                            }], [{
                                text: 'size'
                            }, {
                                text: "'lg', 'md', 'sm', 'xs'"
                            }]]
                        }]
                    }
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    text: '{tx12}',
                    items: [{
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
        }, {
            xtype: 'h3',
            text: 'nav, navbar, navbar-header, navbar-collapse, navbar-text, navbar-a, navbar-dropdown, navbar-button, navbar-form'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx13'
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    text: '{tx10}',
                    items: {
                        xtype: 'table',
                        margin: 0,
                        items: [{
                            xtype: 'head',
                            items: [{
                                field: 'tx14'
                            }, {
                                field: 'tx8'
                            }, {
                                field: 'tx9'
                            }]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: 'nav'
                            }, {
                                text: 'type'
                            }, {
                                text: 'default, static-top, fixed-top, fixed-bottom, inverse'
                            }], [{
                                text: 'a'
                            }, {
                                text: 'active'
                            }, {
                                text: 'true'
                            }], [{
                                text: 'dropdown'
                            }, {
                                text: 'caret'
                            }, {
                                text: 'false'
                            }]]
                        }]
                    }
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    text: '{tx12}',
                    items: [{
                        xtype: 'pre',
                        margin: '10px 0px',
                        items: {
                            xtype: 'code',
                            store: 'code',
                            field: 'cd11',
                            cls: '{type}',
                            text: '{code}'
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'dropdown, dropup'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx15'
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'div',
                        text: '{tx10}'
                    }, {
                        xtype: 'table',
                        items: [{
                            xtype: 'head',
                            items: [{
                                field: 'tx8'
                            }, {
                                field: 'tx9'
                            }]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: 'type'
                            }, {
                                text: "'default', 'primary', 'success', 'info', 'warning', 'danger'"
                            }], [{
                                text: 'size'
                            }, {
                                text: "'lg', 'md', 'sm', 'xs'"
                            }]]
                        }]
                    }, {
                        xtype: 'div',
                        text: '{tx16}'
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: {
                                text: 'addItems'
                            }
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx19}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx20}'
                            }]]
                        }]
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: {
                                text: 'removeItems'
                            }
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx21}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx22}'
                            }]]
                        }]
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: {
                                text: 'replaceItems'
                            }
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx19}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx23}'
                            }]]
                        }]
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: {
                                text: 'open'
                            }
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx24}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx25}'
                            }]]
                        }]
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: {
                                text: 'close'
                            }
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx24}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx26}'
                            }]]
                        }]
                    }]
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    text: '{tx12}',
                    items: [{
                        xtype: 'pre',
                        margin: '10px 0px',
                        items: {
                            xtype: 'code',
                            store: 'code',
                            field: 'cd12',
                            alterdata: {
                                'code': function (v) {
                                    v = cb.ctr('ci-bus', 'formatCode', v);
                                    return v;
                                }
                            },
                            cls: '{type}',
                            text: '{code}'
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }]
    }]
});
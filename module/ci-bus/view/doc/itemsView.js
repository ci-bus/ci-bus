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
            text: 'button',
            id: 'item-button'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx7'
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        field: 'tx10'
                    }, {
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
                                text: "default, primary, success, info, warning, danger"
                            }], [{
                                text: 'size'
                            }, {
                                text: "lg, md, sm, xs"
                            }]]
                        }]
                    }]
                }, {
                    xtype: 'callout',
                    cls: 'code',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        field: 'tx12'
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
        }, {
            xtype: 'h3',
            text: 'nav, navbar, navbar-header, navbar-collapse, navbar-text, navbar-a, navbar-dropdown, navbar-button, navbar-form',
            id: 'item-navbar'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx13'
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        field: 'tx10'
                    }, {
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
                    }]
                }, {
                    xtype: 'callout',
                    cls: 'code',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        field: 'tx12'
                    }, {
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
            text: 'dropdown, dropup',
            id: 'item-dropdown'
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
                        xtype: 'label',
                        field: 'tx10'
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
                                text: "default, primary, success, info, warning, danger"
                            }], [{
                                text: 'size'
                            }, {
                                text: "lg, md, sm, xs"
                            }]]
                        }]
                    }]
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        field: 'tx16'
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: [{
                                text: 'addItems',
                                colspan: 2
                            }]
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
                    },  {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: [{
                                text: 'removeItems',
                                colspan: 2
                            }]
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
                            items: [{
                                text: 'replaceItems',
                                colspan: 2
                            }]
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
                            items: [{
                                text: 'open',
                                colspan: 2
                            }]
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
                            items: [{
                                text: 'close',
                                colspan: 2
                            }]
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
                    cls: 'code',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        field: 'tx12'
                    }, {
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
        }, {
            xtype: 'h3',
            text: 'container',
            id: 'item-container'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx27'
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        field: 'tx10'
                    }, {
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
                                text: 'fluid'
                            }]]
                        }]
                    }]
                }, {
                    xtype: 'callout',
                    cls: 'code',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        field: 'tx12'
                    }, {
                        xtype: 'pre',
                        margin: '10px 0px',
                        items: {
                            xtype: 'code',
                            store: 'code',
                            field: 'cd13',
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
            text: 'progress, progress-bar',
            id: 'item-progress'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx31'
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        field: 'tx10'
                    }, {
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
                                text: 'striped'
                            }, {
                                text: 'true'
                            }], [{
                                text: 'animated'
                            }, {
                                text: 'true'
                            }], [{
                                text: 'type'
                            }, {
                                text: 'success, info, warning, danger'
                            }], [{
                                text: 'min'
                            }, {
                                text: '{tx28}'
                            }], [{
                                text: 'max'
                            }, {
                                text: '{tx29}'
                            }], [{
                                text: 'value'
                            }, {
                                text: '{tx30}'
                            }]]
                        }]
                    }]
                }, {
                    xtype: 'callout',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        text: '{tx16} progress'
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: [{
                                text: 'getBar',
                                colspan: 2
                            }]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx32}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx33}'
                            }]]
                        }]
                    },  {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: [{
                                text: 'addBar',
                                colspan: 2
                            }]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx34}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx35}'
                            }]]
                        }]
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: [{
                                text: 'removeBar',
                                colspan: 2
                            }]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx32}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx36}'
                            }]]
                        }]
                    }]
                }, {
                    xtype: 'callout',
                    cls: 'code',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        field: 'tx12'
                    }, {
                        xtype: 'pre',
                        margin: '10px 0px',
                        items: {
                            xtype: 'code',
                            store: 'code',
                            field: 'cd14',
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
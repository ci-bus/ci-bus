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
                    overflow: 'auto',
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
                                text: 'default, primary, success, info, warning, danger'
                            }], [{
                                text: 'size'
                            }, {
                                text: 'lg, md, sm, xs'
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
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
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
                    overflow: 'auto',
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
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
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
                    overflow: 'auto',
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
                                text: 'default, primary, success, info, warning, danger'
                            }], [{
                                text: 'size'
                            }, {
                                text: 'lg, md, sm, xs'
                            }]]
                        }]
                    }]
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
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
                                text: 'addItems'
                            }, {width: '100%'}]
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
                                text: 'removeItems'
                            }, {width: '100%'}]
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
                                text: 'replaceItems'
                            }, {width: '100%'}]
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
                                text: 'open'
                            }, {width: '100%'}]
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
                                text: 'close'
                            }, {width: '100%'}]
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
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
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
                    overflow: 'auto',
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
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
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
                    overflow: 'auto',
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
                    overflow: 'auto',
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
                                text: 'getBar'
                            }, {width: '100%'}]
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
                                text: 'addBar'
                            }, {width: '100%'}]
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
                                text: 'removeBar'
                            }, {width: '100%'}]
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
                    overflow: 'auto',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        text: '{tx16} progress-bar'
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: [{
                                text: 'setValue, setMax, setMin'
                            }, {width: '100%'}]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx37}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx38}'
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
                                text: 'setText'
                            }, {width: '100%'}]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx39}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx40}'
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
                                text: 'setStriped'
                            }, {width: '100%'}]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx41}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx42}'
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
                                text: 'setActive'
                            }, {width: '100%'}]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '{tx41}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx43}'
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
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'table, thead, tbody, tr, th, td',
            id: 'item-table'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx44'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        text: '{tx10} table'
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
                            items: [{
                                text: 'type'
                            }, {
                                text: 'striped, bordered, hover, condensed'
                            }]
                        }]
                    }, {
                        xtype: 'label',
                        text: '{tx10} td, th',
                        css: {
                            'margin-top': '20px'
                        }
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
                            items: [{
                                text: 'type'
                            }, {
                                text: 'active, success, info, warning, danger'
                            }]
                        }]
                    }, {
                        xtype: 'label',
                        text: '{tx10} th',
                        css: {
                            'margin-top': '20px'
                        }
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
                            items: [{
                                text: 'scope'
                            }, {
                                text: 'row, col'
                            }]
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
                            field: 'cd15',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'glyphicon',
            id: 'item-icon'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx45'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
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
                            items: [{
                                text: 'type'
                            }, {
                                noRecordParsed: true,
                                record: {
                                    icons: [{type: 'asterisk'}, {type: 'plus'}, {type: 'minus'}, {type: 'eur'}, {type: 'euro'}, {type: 'cloud'}, {type: 'envelope'}, {type: 'pencil'}, {type: 'glass'}, {type: 'music'}, {type: 'search'}, {type: 'heart'}, {type: 'star'}, {type: 'star-empty'}, {type: 'user'}, {type: 'film'}, {type: 'th-large'}, {type: 'th'}, {type: 'th-list'}, {type: 'ok'}, {type: 'remove'}, {type: 'zoom-in'}, {type: 'zoom-out'}, {type: 'off'}, {type: 'signal'}, {type: 'cog'}, {type: 'trash'}, {type: 'home'}, {type: 'file'}, {type: 'time'}, {type: 'road'}, {type: 'download-alt'}, {type: 'download'}, {type: 'upload'}, {type: 'inbox'}, {type: 'play-circle'}, {type: 'repeat'}, {type: 'refresh'}, {type: 'list-alt'}, {type: 'lock'}, {type: 'flag'}, {type: 'headphones'}, {type: 'volume-off'}, {type: 'volume-down'}, {type: 'volume-up'}, {type: 'qrcode'}, {type: 'barcode'}, {type: 'tag'}, {type: 'tags'}, {type: 'book'}, {type: 'bookmark'}, {type: 'print'}, {type: 'camera'}, {type: 'font'}, {type: 'bold'}, {type: 'italic'}, {type: 'text-height'}, {type: 'text-width'}, {type: 'align-left'}, {type: 'align-center'}, {type: 'align-right'}, {type: 'align-justify'}, {type: 'list'}, {type: 'indent-left'}, {type: 'indent-right'}, {type: 'facetime-video'}, {type: 'picture'}, {type: 'map-marker'}, {type: 'adjust'}, {type: 'tint'}, {type: 'edit'}, {type: 'share'}, {type: 'check'}, {type: 'move'}, {type: 'step-backward'}, {type: 'fast-backward'}, {type: 'backward'}, {type: 'play'}, {type: 'pause'}, {type: 'stop'}, {type: 'forward'}, {type: 'fast-forward'}, {type: 'step-forward'}, {type: 'eject'}, {type: 'chevron-left'}, {type: 'chevron-right'}, {type: 'plus-sign'}, {type: 'minus-sign'}, {type: 'remove-sign'}, {type: 'ok-sign'}, {type: 'question-sign'}, {type: 'info-sign'}, {type: 'screenshot'}, {type: 'remove-circle'}, {type: 'ok-circle'}, {type: 'ban-circle'}, {type: 'arrow-left'}, {type: 'arrow-right'}, {type: 'arrow-up'}, {type: 'arrow-down'}, {type: 'share-alt'}, {type: 'resize-full'}, {type: 'resize-small'}, {type: 'exclamation-sign'}, {type: 'gift'}, {type: 'leaf'}, {type: 'fire'}, {type: 'eye-open'}, {type: 'eye-close'}, {type: 'warning-sign'}, {type: 'plane'}, {type: 'calendar'}, {type: 'random'}, {type: 'comment'}, {type: 'magnet'}, {type: 'chevron-up'}, {type: 'chevron-down'}, {type: 'retweet'}, {type: 'shopping-cart'}, {type: 'folder-close'}, {type: 'folder-open'}, {type: 'resize-vertical'}, {type: 'resize-horizontal'}, {type: 'hdd'}, {type: 'bullhorn'}, {type: 'bell'}, {type: 'certificate'}, {type: 'thumbs-up'}, {type: 'thumbs-down'}, {type: 'hand-right'}, {type: 'hand-left'}, {type: 'hand-up'}, {type: 'hand-down'}, {type: 'circle-arrow-right'}, {type: 'circle-arrow-left'}, {type: 'circle-arrow-up'}, {type: 'circle-arrow-down'}, {type: 'globe'}, {type: 'wrench'}, {type: 'tasks'}, {type: 'filter'}, {type: 'briefcase'}, {type: 'fullscreen'}, {type: 'dashboard'}, {type: 'paperclip'}, {type: 'heart-empty'}, {type: 'link'}, {type: 'phone'}, {type: 'pushpin'}, {type: 'usd'}, {type: 'gbp'}, {type: 'sort'}, {type: 'sort-by-alphabet'}, {type: 'sort-by-alphabet-alt'}, {type: 'sort-by-order'}, {type: 'sort-by-order-alt'}, {type: 'sort-by-attributes'}, {type: 'sort-by-attributes-alt'}, {type: 'unchecked'}, {type: 'expand'}, {type: 'collapse-down'}, {type: 'collapse-up'}, {type: 'log-in'}, {type: 'flash'}, {type: 'log-out'}, {type: 'new-window'}, {type: 'record'}, {type: 'save'}, {type: 'open'}, {type: 'saved'}, {type: 'import'}, {type: 'export'}, {type: 'send'}, {type: 'floppy-disk'}, {type: 'floppy-saved'}, {type: 'floppy-remove'}, {type: 'floppy-save'}, {type: 'floppy-open'}, {type: 'credit-card'}, {type: 'transfer'}, {type: 'cutlery'}, {type: 'header'}, {type: 'compressed'}, {type: 'earphone'}, {type: 'phone-alt'}, {type: 'tower'}, {type: 'stats'}, {type: 'sd-video'}, {type: 'hd-video'}, {type: 'subtitles'}, {type: 'sound-stereo'}, {type: 'sound-dolby'}, {type: 'sound-5-1'}, {type: 'sound-6-1'}, {type: 'sound-7-1'}, {type: 'copyright-mark'}, {type: 'registration-mark'}, {type: 'cloud-download'}, {type: 'cloud-upload'}, {type: 'tree-conifer'}, {type: 'tree-deciduous'}, {type: 'cd'}, {type: 'save-file'}, {type: 'open-file'}, {type: 'level-up'}, {type: 'copy'}, {type: 'paste'}, {type: 'alert'}, {type: 'equalizer'}, {type: 'king'}, {type: 'queen'}, {type: 'pawn'}, {type: 'bishop'}, {type: 'knight'}, {type: 'baby-formula'}, {type: 'tent'}, {type: 'blackboard'}, {type: 'bed'}, {type: 'apple'}, {type: 'erase'}, {type: 'hourglass'}, {type: 'lamp'}, {type: 'duplicate'}, {type: 'piggy-bank'}, {type: 'scissors'}, {type: 'bitcoin'}, {type: 'yen'}, {type: 'ruble'}, {type: 'scale'}, {type: 'ice-lolly'}, {type: 'ice-lolly-tasted'}, {type: 'education'}, {type: 'option-horizontal'}, {type: 'option-vertical'}, {type: 'menu-hamburger'}, {type: 'modal-window'}, {type: 'oil'}, {type: 'grain'}, {type: 'sunglasses'}, {type: 'text-size'}, {type: 'text-color'}, {type: 'text-background'}, {type: 'object-align-top'}, {type: 'object-align-bottom'}, {type: 'object-align-horizontal'}, {type: 'object-align-left'}, {type: 'object-align-vertical'}, {type: 'object-align-right'}, {type: 'triangle-right'}, {type: 'triangle-left'}, {type: 'triangle-bottom'}, {type: 'triangle-top'}, {type: 'console'}, {type: 'superscript'}, {type: 'subscript'}, {type: 'menu-left'}, {type: 'menu-right'}, {type: 'menu-down'}, {type: 'menu-up'}],
                                },
                                items: {
                                    xtype: 'div',
                                    pull: 'left',
                                    margin: 5,
                                    field: 'icons',
                                    glyphicon: '{type}',
                                    cursor: 'pointer',
                                    items: {
                                        xtype: 'div',
                                        pull: 'right',
                                        hidden: true,
                                        text: '{type}',
                                        css: {
                                            'margin-left': 5
                                        }
                                    },
                                    click: function () {
                                        cb.getCmp(this).down('div').show().selectContent();
                                    }
                                }
                            }]
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
                            field: 'cd16',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'thumbnail',
            id: 'item-thumbnail'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx47'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
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
                            items: [{
                                text: 'type'
                            }, {
                                text: '{tx46}'
                            }]
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
                            field: 'cd17',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'alert',
            id: 'item-alert'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx48'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
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
                                text: 'success, info, warning, danger'
                            }], [{
                                text: 'dismissible, closable'
                            }, {
                                text: 'true'
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
                            field: 'cd18',
                            alterdata: {
                                'code': function (v) {
                                    v = cb.ctr('ci-bus', 'formatCode', v);
                                    return v;
                                }
                            },
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'badge',
            id: 'item-badge'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx49'
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
                            field: 'cd19',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'group',
            id: 'item-group'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx52'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
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
                                text: 'justified, vertical'
                            }], [{
                                text: 'label'
                            }, {
                                text: '{tx51}'
                            }], [{
                                text: 'size'
                            }, {
                                text: 'lg, md, sm, xs'
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
                            field: 'cd21',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'toolbar',
            id: 'item-toolbar'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx50'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
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
                            items: [{
                                text: 'label'
                            }, {
                                text: '{tx51}'
                            }]
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
                            field: 'cd20',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'callout',
            id: 'item-callout'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx50'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
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
                                text: 'success, info, warning, danger'
                            }], [{
                                text: 'title'
                            }, {
                                text: '{tx54}'
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
                            field: 'cd22',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'panel, panel-heading, panel-title, panel-body, panel-footer',
            id: 'item-panel'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx55'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
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
                                text: 'default, primary, success, info, warning, danger'
                            }], [{
                                text: 'title'
                            }, {
                                text: '{tx54}'
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
                            field: 'cd23',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'tabpanel',
            id: 'item-tabpanel'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx56'
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
                            field: 'cd27',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'row, col',
            id: 'item-rowcol'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx57'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        text: '{tx10} col'
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
                                text: 'size'
                            }, {
                                text: '{tx58}'
                            }], [{
                                text: 'size xs'
                            }, {
                                text: '{tx59}'
                            }], [{
                                text: 'size sm'
                            }, {
                                text: '{tx59}'
                            }], [{
                                text: 'size md'
                            }, {
                                text: '{tx59}'
                            }], [{
                                text: 'size lg'
                            }, {
                                text: '{tx59}'
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
                            field: 'cd24',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'form, form-group, label, input',
            id: 'item-form'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx60'
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
                            field: 'cd25',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'toggle',
            id: 'item-toggle'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx61'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        text: '{tx10}'
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
                                text: 'size'
                            }, {
                                text: 'large, normal, small, mini'
                            }], [{
                                text: 'on, off'
                            }, {
                                text: '{tx62}'
                            }], [{
                                text: 'on, off type'
                            }, {
                                text: 'default, primary, success, info, warning, danger'
                            }], [{
                                text: 'on, off text'
                            }, {
                                text: '{tx63}'
                            }], [{
                                text: 'on, off value'
                            }, {
                                text: '{tx64}'
                            }]]
                        }]
                    }]
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        text: '{tx16}'
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: [{
                                text: 'bootstrapToggle'
                            }, {width: '100%'}]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: 'destroy, on, off, toggle, enable, disable'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx65}'
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
                            field: 'cd26',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'svg, polyline',
            id: 'item-polyline'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx66'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        text: '{tx10}'
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
                                text: 'stroke-width'
                            }, {
                                text: '{tx67}'
                            }], [{
                                text: 'fill'
                            }, {
                                text: '{tx68}'
                            }], [{
                                text: 'pointMax, pointMix'
                            }, {
                                text: '{tx67}'
                            }], [{
                                text: 'storelink'
                            }, {
                                text: '{tx69}'
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
                            field: 'cd28',
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }, {
            xtype: 'h3',
            text: 'grid',
            id: 'item-grid'
        }, {
            xtype: 'callout',
            items: [{
                xtype: 'div',
                items: [{
                    field: 'tx70'
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        text: '{tx10}'
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
                                text: 'default, primary, success, info, warning, danger'
                            }], [{
                                text: 'storelink'
                            }, {
                                text: '{tx69}'
                            }]]
                        }]
                    }]
                }, {
                    xtype: 'callout',
                    overflow: 'auto',
                    margin: '10px 0px',
                    items: [{
                        xtype: 'label',
                        text: '{tx16}'
                    }, {
                        xtype: 'table',
                        css: {
                            'margin-bottom': 10
                        },
                        items: [{
                            xtype: 'head',
                            items: [{
                                text: 'addColumns'
                            }, {width: '100%'}]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '1. {tx71}, 2. {tx72}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx73}'
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
                                text: 'removeColumn'
                            }, {width: '100%'}]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '1. {tx72}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx74}'
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
                                text: 'addRows'
                            }, {width: '100%'}]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '1. {tx75}, 2. {tx72}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx76}'
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
                                text: 'removeRow'
                            }, {width: '100%'}]
                        }, {
                            xtype: 'body',
                            items: [[{
                                text: '{tx17}'
                            }, {
                                text: '1. {tx72}'
                            }], [{
                                text: '{tx18}'
                            }, {
                                text: '{tx77}'
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
                            field: 'cd29',
                            alterdata: {
                                'code': function (v) {
                                    v = cb.ctr('ci-bus', 'formatCode', v);
                                    return v;
                                }
                            },
                            cls: '{type}',
                            text: '{code}'
                        },
                        dblclick: function () {
                            cb.getCmp(this).selectContent();
                        }
                    }, {
                        xtype: 'totestcode'
                    }]
                }]
            }]
        }]
    }]
});
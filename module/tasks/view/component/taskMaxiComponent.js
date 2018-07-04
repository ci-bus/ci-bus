cb.define({
    xtype: 'component',
    name: 'taskMaxi',
    items: {
        id: 'task-maxi-{id}',
        type: '{type}',
        effect: {
            type: 'flipin',
            vel: 'fast',
            dire: 'down'
        },
        css: {
            width: 800,
            height: 600
        },
        items: [{
            xtype: 'head',
            css: {'min-height': 40},
            items: [{
                xtype: 'span',
                glyphicon: 'remove',
                cls: 'pull-right',
                css: {
                    cursor: 'pointer',
                    'padding-top': 4
                },
                listener: {
                    click: function () {
                        cb.setConfig('chat_opened', 0);
                        tinymce.EditorManager.execCommand('mceRemoveEditor', true, 'doc-textarea');
                        cb.effect($(this).parent().parent().parent(), {
                            type: 'fadeout',
                            fn: function() {
                                cb.getCmp(this).remove();
                            }
                        });
                    }
                }
            }, {
                xtype: 'div',
                size: 19,
                text: '{project}',
                cls: 'text-center'
            }]
        }, {
            xtype: 'body',
            css: {
                overflow: 'auto',
                height: 553
            },
            items: [{
                xtype: 'h4',
                css: {'margin-top': 0},
                text: '{title}'
            }, {
                alterdata: {
                    content: function (cnt) {
                        return $("<span />", {html: cnt}).text();
                    }
                },
                xtype: 'span',
                text: '{content}'
            }, {
                xtype: 'tabpanel',
                items: [{
                    id: 'home',
                    active: true,
                    tab: {
                        text: 'Chat',
                        click: function () {
                            r = cb.getCmp(this).up('panel').getRecord();
                            cb.setConfig('chat_opened', r.id);
                        }
                    },
                    panel: {
                        xtype: 'container',
                        type: 'fluid',
                        padding: 10,
                        items: [{
                            xtype: 'row',
                            padding: 10,
                            items: [{
                                xtype: 'col',
                                size: 9,
                                items: {
                                    xtype: 'input',
                                    type: 'textarea',
                                    css: {
                                        'max-width': '100%',
                                        'min-width': '100%'
                                    }
                                }
                            }, {
                                xtype: 'col',
                                size: 3,
                                items: {
                                    xtype: 'button',
                                    width: '100%',
                                    text: 'Send',
                                    click: function () {
                                        var msg = cb.getCmp(this).up('container').down('input').getValue(),
                                            r = cb.getCmp(this).up('panel').getRecord();
                                        
                                        cb.ctr('tasks', 'sendChat', {
                                            msg: msg,
                                            r: r
                                        });
                                        cb.getCmp(this).up('container').down('input').val('');
                                    }
                                }
                            }]
                        }, {
                            xtype: 'hr',
                            margin: 5
                        }, {
                            xtype: 'container',
                            xtype: 'fluid',
                            id: 'chat-messages' // Chat message container
                        }]
                    }
                }, {
                    id: 'profile',
                    tab: {
                        text: 'Documentation',
                        click: function () {
                            cb.setConfig('chat_opened', 0);
                            tinymce.init({
                                selector: '#doc-textarea'
                            });
                        }
                    },
                    panel: {
                        xtype: 'container',
                        type: 'fluid',
                        css: {
                            padding: 10
                        },
                        items: [{
                            xtype: 'form-group',
                            items: [{
                                xtype: 'label',
                                text: 'Title'
                            }, {
                                xtype: 'input',
                                id: 'doc-title'
                            }]
                        }, {
                            xtype: 'input',
                            type: 'textarea',
                            id: 'doc-textarea'
                        }, {
                            xtype: 'button',
                            text: 'Save',
                            margin: '10px 0px'
                        }, {
                            xtype: 'hr',
                            margin: 5
                        }, {
                            xtype: 'container',
                            xtype: 'fluid',
                            id: 'doc-contents' // Doc contents container
                        }]
                    }
                }]
            }]
        }],
        
        onRender: function () {
            var r = cb.getCmp(this).getRecord();
            cb.ctr('tasks', 'loadTaskContents', r);
        }
    }
});
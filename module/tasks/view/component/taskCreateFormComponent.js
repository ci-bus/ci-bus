cb.define({
    xtype: 'component',
    name: 'taskCreateForm',
    items: {
        type: 'primary',
        id: 'createtaskform',
        effect: {
            type: 'flipin',
            vel: 'fast',
            dire: 'up'
        },
        css: {
            width: 800,
            height: 670
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
                    click: function(){
                        tinymce.EditorManager.execCommand('mceRemoveEditor', true, 'tcf_content');
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
                text: 'Create new task',
                cls: 'text-center'
            }]
        }, {
            xtype: 'body',
            css: {
                overflow: 'auto'
            },
            items: {
                xtype: 'div',
                defaults: {
                    xtype: 'form-group'
                },
                items: [{
                    items: [{
                        xtype: 'label',
                        text: 'Title'
                    }, {
                        xtype: 'input',
                        type: 'text',
                        name: 'title'
                    }]
                }, {
                    xtype: 'row',
                    margin: 0,
                    items: [{
                        xtype: 'col',
                        size: 3,
                        items: {
                            xtype: 'form-group',
                            items: [{
                                xtype: 'label',
                                text: 'User',
                                width: '100%'
                            }, {
                                xtype: 'dropdown',
                                value: 0,
                                items: {
                                    store: 'user',
                                    text: '{name}'
                                }
                            }]
                        }
                    }, {
                        xtype: 'col',
                        size: 3,
                        items: {
                            xtype: 'form-group',
                            items: [{
                                xtype: 'label',
                                text: 'Step',
                                width: '100%'
                            }, {
                                xtype: 'dropdown',
                                text: 'Backlog ',
                                value: 0,
                                items: [{
                                    xtype: 'a',
                                    value: 0,
                                    text: 'Backlog'
                                }, {
                                    xtype: 'a',
                                    value: 1,
                                    text: 'To-do'
                                }, {
                                    xtype: 'a',
                                    value: 2,
                                    text: 'In progress'
                                }, {
                                    xtype: 'a',
                                    value: 3,
                                    text: 'In review'
                                }, {
                                    xtype: 'a',
                                    value: 4,
                                    text: 'Done'
                                }]
                            }]
                        }
                    }, {
                        xtype: 'col',
                        size: 3,
                        items: {
                            xtype: 'form-group',
                            items: [{
                                xtype: 'label',
                                text: 'Project',
                                width: '100%'
                            }, {
                                xtype: 'dropdown',
                                value: 0,
                                items: {
                                    store: 'project',
                                    text: '{name}'
                                }
                            }]
                        }
                    }, {
                        xtype: 'col',
                        size: 3,
                        items: {
                            xtype: 'form-group',
                            items: [{
                                xtype: 'label',
                                text: 'Type',
                                width: '100%'
                            }, {
                                xtype: 'dropdown',
                                value: '',
                                items: [{
                                    xtype: 'a',
                                    text: 'default'
                                }, {
                                    xtype: 'a',
                                    text: 'primary'
                                }, {
                                    xtype: 'a',
                                    text: 'success'
                                }, {
                                    xtype: 'a',
                                    text: 'info'
                                }, {
                                    xtype: 'a',
                                    text: 'warning'
                                }, {
                                    xtype: 'a',
                                    text: 'danger'
                                }]
                            }]
                        }
                    }]
                }, {
                    items: [{
                        xtype: 'label',
                        text: 'Description'
                    }, {
                        xtype: 'input',
                        type: 'textarea',
                        height: 280,
                        name: 'content',
                        id: 'tcf_content'
                    }]
                }, {
                    xtype: 'button',
                    text: 'Create task',
                    click: function () {
                        cb.ctr('tasks', 'createNewTask');
                    }
                }]
            }
        }]
    }
});
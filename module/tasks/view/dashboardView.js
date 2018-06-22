function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    cb.getCmp('#' + ev.target.id).css('opacity', '0.2');
}

function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("id");
    
    if (cb.getCmp(ev.target).getType() == 'td') {
        cb.getCmp(ev.target).append(document.getElementById(id));
    } else if (cb.getCmp(ev.target).getType() == 'callout') {
        cb.getCmp(ev.target).after(document.getElementById(id));
    } else {
        cb.getCmp(ev.target).up('callout').after(document.getElementById(id));
    }
    // TODO change status task
    var callout = cb.getCmp('#' + id);
    callout.css('opacity', '');
    if (cb.getCmp(ev.target).getType() == 'td') {
        var td = cb.getCmp(ev.target);
    } else {
        var td = cb.getCmp(ev.target).up('td');
    }
    var new_status = td.getOpt('status');
    var user_id = td.getRecord().user.id;
    var task_id = callout.getRecord().id;
    debugger;
}

function open_task (record) {
    cb.popup({
        type: record.type,
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
                    click: function(){
                        cb.effect($(this).parent().parent(), {
                            type: 'flipout',
                            dire: 'up',
                            fn: function(){
                                $(this).parent().remove();
                            }
                        });
                    }
                }
            },{
                xtype: 'div',
                size: 19,
                text: record.project,
                cls: 'text-center'
            }]
        },{
            xtype: 'body',
            css: {
                overflow: 'auto'
            },
            items: [{
                xtype: 'h4',
                text: record.title
            }, {
                xtype: 'p',
                text: record.content
            }]
        }]
    });
}

cb.define({
    xtype: 'component',
    name: 'task-mini',
    items: {
        xtype: 'callout',
        padding: '0px 10px',
        margin: '0px 0px 10px 0px',
        cursor: 'pointer',
        attr: {
            draggable: 'true',
            ondragstart: 'drag(event)'
        },
        id: '{id}',
        title: '{title}',
        text: '{project}',
        type: '{type}',
        listener: {
            mouseover: function () {
                $(this).css('border-color', '#888');
            },
            mouseout: function () {
                $(this).css('border-color', '');
            },
            click: function () {
                open_task (cb.getCmp(this).getRecord());
            }
        }
    }
});

cb.define({
    xtype: 'store',
    name: 'tasks',
    data: [{
        user: {
            id: 1,
            name: 'Miguel'
        },
        todo: [{
            title: 'Task to-do',
            project: 'Edeka',
            type: 'info',
            id: 1
        }],
        inprogress: [{
            title: 'Task in progress',
            project: 'Edeka',
            type: 'warning',
            id: 2
        }],
        inreview: [{
            title: 'Task in review',
            project: 'Edeka',
            type: 'danger',
            id: 3
        }],
        done: [{
            title: 'Task done',
            project: 'Edeka',
            type: 'success',
            id: 4
        }, {
            title: 'Task done 2',
            project: 'Edeka',
            type: 'success',
            id: 5
        }]
    }]
});

cb.define({
    xtype: 'view',
    name: 'dashboard',
    renderTo: 'body',
    items: [{
        xtype: 'grid',
        type: 'primary',
        store: 'tasks',
        margin: 10,
        
        columns: [{
            name: 'User',
            attr: {
                ondrop: 'drop(event)',
                ondragover: 'allowDrop(event)'
            },
            field: 'user',
            text: '{name}'
        }, {
            name: 'To-do',
            status: 'todo',
            attr: {
                ondrop: 'drop(event)',
                ondragover: 'allowDrop(event)'
            },
            items: {
                xtype: 'task-mini',
                field: 'todo'
            }
        }, {
            name: 'In progress',
            status: 'inprogress',
            attr: {
                ondrop: 'drop(event)',
                ondragover: 'allowDrop(event)'
            },
            items: {
                xtype: 'task-mini',
                field: 'inprogress'
            }
        }, {
            name: 'In review',
            status: 'inreview',
            attr: {
                ondrop: 'drop(event)',
                ondragover: 'allowDrop(event)'
            },
            items: {
                xtype: 'task-mini',
                field: 'inreview'
            }
        }, {
            name: 'Done',
            status: 'done',
            attr: {
                ondrop: 'drop(event)',
                ondragover: 'allowDrop(event)'
            },
            items: {
                xtype: 'task-mini',
                field: 'done'
            }
        }],
        
        head: {
            title: 'Task managenment'
        },
        
        body: {
            css: {
                overflow: 'auto'
            },
            table: {
                type: 'hover bordered',
                border: '1px solid #DDD',
                /*
                beforeItems: {
                    xtype: 'div',
                    text: 'Item text before',
                    padding: 5,
                    background: '#f2f5f7'
                },
                afterItems: {
                    xtype: 'div',
                    text: 'Item text after',
                    padding: 5,
                    background: '#fafafa'
                }
                */
            }
        },
        
        footer: {
            text: 'Created by Ci-bus Framework'
        }
    }]
});
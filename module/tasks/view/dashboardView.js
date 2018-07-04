cb.define({
    xtype: 'view',
    name: 'dashboard',
    renderTo: 'body',
    items: [{
        xtype: 'div',
        padding: '10px 10px 0px 10px',
        align: 'right',
        items: [{
            xtype: 'button',
            text: 'Create new task',
            click: function () {
                cb.ctr('tasks', 'openCreateForm');
            }
        }, {
            xtype: 'button',
            type: 'danger',
            text: 'logout',
            click: function () {
                cb.ctr('tasks', 'logout');
            }
        }]
    },{
        xtype: 'grid',
        type: 'primary',
        store: 'tasks',
        storelink: true,
        margin: 10,
        
        columns: [{
            name: 'User',
            field: 'user',
            text: '{name}'
        }, {
            name: 'To-do',
            status: 1,
            attr: {
                ondrop: "cb.ctr('tasks', 'changeTask', event)",
                ondragover: "cb.ctr('tasks', 'allowDrop', event)"
            },
            items: {
                xtype: 'taskMini',
                field: 'todo'
            }
        }, {
            name: 'In progress',
            status: 2,
            attr: {
                ondrop: "cb.ctr('tasks', 'changeTask', event)",
                ondragover: "cb.ctr('tasks', 'allowDrop', event)"
            },
            items: {
                xtype: 'taskMini',
                field: 'inprogress'
            }
        }, {
            name: 'In review',
            status: 3,
            attr: {
                ondrop: "cb.ctr('tasks', 'changeTask', event)",
                ondragover: "cb.ctr('tasks', 'allowDrop', event)"
            },
            items: {
                xtype: 'taskMini',
                field: 'inreview'
            }
        }, {
            name: 'Done',
            status: 4,
            attr: {
                ondrop: "cb.ctr('tasks', 'changeTask', event)",
                ondragover: "cb.ctr('tasks', 'allowDrop', event)"
            },
            items: {
                xtype: 'taskMini',
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
                
                beforeItems: [{
                    xtype: 'table',
                    type: 'hover bordered',
                    background: '#fff',
                    margin: 0,
                    items: [{
                        xtype: 'head',
                        items: [{
                            text: 'Backlog'
                        }]
                    }, {
                        xtype: 'body',
                        items: [{
                            status: 0,
                            attr: {
                                ondrop: "cb.ctr('tasks', 'changeTask', event)",
                                ondragover: "cb.ctr('tasks', 'allowDrop', event)"
                            },
                            height: 50,
                            items: {
                                store: 'backlog',
                                xtype: 'taskMini',
                                items: {
                                    pull: 'left',
                                    margin: '0px 10px 10px 0px'
                                }
                            }
                        }]
                    }]
                }]/*,
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
cb.define({
    xtype: 'view',
    name: 'dashboard',
    renderTo: 'body',
    items: [/*{
        xtype: 'row',
        items: [{
            xtype: 'col',
            id: 'col-users',
            size: {
                xs: 12,
                sm: 2
            },
            items: [{
                xtype: 'div',
                text: 'Users'
            }]
        }, {
            xtype: 'col',
            id: 'col-todo',
            size: {
                xs: 12,
                sm: 2
            },
            items: [{
                xtype: 'div',
                text: 'To-Do'
            }]
        }, {
            xtype: 'col',
            id: 'col-progress',
            size: {
                xs: 12,
                sm: 3
            },
            items: [{
                xtype: 'div',
                text: 'In progress'
            }]
        }, {
            xtype: 'col',
            id: 'col-inreview',
            size: {
                xs: 12,
                sm: 3
            },
            items: [{
                xtype: 'div',
                text: 'in Review'
            }]
        }, {
            xtype: 'col',
            id: 'col-done',
            size: {
                xs: 12,
                sm: 2
            },
            items: [{
                xtype: 'div',
                text: 'Done'
            }]
        }] 
    }*/
    {
        xtype: 'table',
        width: 'calc(100% - 20px)',
        margin: 10,
        items: [{
            xtype: 'head',
            items: [{
                text: 'Users'
            }, {
                text: 'Backlog'
            }, {
                text: 'To-Do'
            }, {
                text: 'In Progress'
            }, {
                text: 'In Review'
            }, {
                text: 'Done'
            }]
        },{
            xtype: 'body',
            items: [{
                scope: 'row',
                text: '1'
            },{
                text: 'Miguel'
            },{
                text: 'root'
            }]
        }]
    }]
});
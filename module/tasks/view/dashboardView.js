cb.define({
    xtype: 'view',
    name: 'dashboard',
    renderTo: 'body',
    items: [{
        xtype: 'row',
        items: [{
            xtype: 'col',
            size: {
                xs: 12,
                sm: 3
            },
            items: [{
                xtype: 'div',
                text: 'To-Do'
            }]
        }, {
            xtype: 'col',
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
            size: {
                xs: 12,
                sm: 3
            },
            items: [{
                xtype: 'div',
                text: 'Done'
            }]
        }] 
    }]
});
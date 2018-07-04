cb.define({
    xtype: 'component',
    name: 'taskMini',
    items: {
        id: 'task-mini-{id}',
        xtype: 'callout',
        padding: '0px 10px',
        margin: '0px 10px 10px 0px',
        cursor: 'pointer',
        attr: {
            draggable: 'true',
            ondragstart: "cb.ctr('tasks', 'drag', event)"
        },
        type: '{type}',
        pull: 'left',
        listener: {
            mouseover: function () {
                $(this).css('border-color', '#888');
            },
            mouseout: function () {
                $(this).css('border-color', '');
            },
            click: function () {
                cb.ctr('tasks', 'openTask', cb.getCmp(this).getRecord());
            }
        },
        items: [{
            xtype: 'h4',
            items: [{
                xtype: 'label',
                type: 'danger',
                pull: 'left',
                margin: '0px 5px 0px 0px',
                display: 'none'
            }, {
                text: '{title}'
            }]
        }, {
            text: '{project}'
        }]
    }
});
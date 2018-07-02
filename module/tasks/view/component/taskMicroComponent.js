cb.define({
    xtype: 'component',
    name: 'taskMicro',
    id: 'task-{id}',
    items: {
        xtype: 'callout',
        padding: '0px 10px',
        margin: '0px 10px 10px 0px',
        cursor: 'pointer',
        attr: {
            draggable: 'true',
            ondragstart: "cb.ctr('tasks', 'drag', event)"
        },
        title: '{title}',
        text: '{project}',
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
        }
    }
});
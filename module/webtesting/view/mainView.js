cb.define({
    xtype: 'view',
    name: 'main',
    renderTo: '#content',
    onRender: function () {
        alert('Main view rendered!');
    },
    items: [{
        xtype: 'container',
        store: 'texts',
        field: 'main',
        items: [{
            xtype: 'h3',
            text: '{title}'
        }]
    }]
});
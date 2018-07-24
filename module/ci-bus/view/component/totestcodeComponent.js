cb.define({
    xtype: 'component',
    name: 'totestcode',
    items: {
        xtype: 'div',
        items: [{
            xtype: 'button',
            size: 'xs',
            store: 'texts',
            field: 'general',
            text: '{tx2}',
            css: {
                position: 'absolute',
                top: 48,
                right: 22,
                'border-top-left-radius': 0,
                'border-top-right-radius': 0,
                'border-top': 0,
                'border-color': '#ddd',
                'line-height': '13px'
            },
            click: function () {
                cb.getCmp(this).up('div', 1).down('code').selectContent();
            }
        }, {
            xtype: 'button',
            store: 'texts',
            field: 'general',
            text: '{tx1}',
            click: function (e) {
                var btn = cb.getCmp(this),
                    parent = $(this).parent(),
                    code = btn.up('div', 1).down('code').getRecord().code;
                eval('var items = '+code);
                if (!$.isArray(items)) {
                    items = [items];
                }
                $(this).remove();
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    item.appendTo = parent;
                    cb.create(items[i]);
                }
            }
        }]
    }
});
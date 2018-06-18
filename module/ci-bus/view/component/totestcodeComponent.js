cb.define({
    xtype: 'component',
    name: 'totestcode',
    items: {
        xtype: 'div',
        items: {
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
        }
    }
});
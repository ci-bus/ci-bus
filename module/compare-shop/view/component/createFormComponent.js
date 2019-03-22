cb.define({
    xtype: 'component',
    name: 'createForm',
    items: [{
        xtype: 'form',
        name: 'create_form',
        store: 'editing',
        items: [{
            xtype: 'input',
            type: 'hidden',
            name: 'id',
            value: '{id}'
        }, {
            xtype: 'form-group',
            items: [{
                xtype: 'label',
                text: 'Producto'
            }, {
                xtype: 'input',
                type: 'text',
                name: 'product',
                value: '{product}'
            }]
        }, {
            xtype: 'form-group',
            items: [{
                xtype: 'label',
                text: 'Tienda'
            }, {
                xtype: 'input',
                type: 'text',
                name: 'shop',
                value: '{shop}'
            }]
        }, {
            xtype: 'form-group',
            items: [{
                xtype: 'label',
                text: 'Precio'
            }, {
                xtype: 'input',
                type: 'number',
                name: 'price',
                value: '{price}'
            }]
        }, {
            xtype: 'form-group',
            items: [{
                xtype: 'label',
                text: 'Calidad'
            }, {
                xtype: 'select',
                type: 'text',
                name: 'quality',
                field: 'quality',
                always: true,
                items: [{
                    text: 'Mala',
                    value: 'Mala'
                },
                {
                    text: 'Regular',
                    value: 'Regular'
                },
                {
                    text: 'Buena',
                    value: 'Buena'
                },
                {
                    text: 'Excelente',
                    value: 'Excelente'
                }]
            }]
        }]
    }]
});
cb.define({
    xtype: 'view',
    name: 'main',
    renderTo: '#content',
    onRender: function () {
        //alert('Main view rendered!');
    },
    items: [{
        xtype: 'div',
        store: 'products_list',
        margin: 0,
        storelink: true,
        items: [{
            xtype: 'div',
            field: 'products',
            items: [{
                xtype: 'button',
                type: 'danger',
                glyphicon: 'remove',
                click: function () {
                    cb.ctr('compare-shop', 'remove_list', cb.getCmp(this).getRecord()['id']);
                }
            }, {
                xtype: 'span',
                text: ' {product} {shop} {price}'
            }],
            
            margin: 10
        }]
    }, {
        xtype: 'grid',
        type: 'primary',
        id: 'gridexa',
        store: 'products',
        storelink: true,
        columns: [{
            name: 'Producto',
            text: '{product}'
        }, {
            name: 'Tienda',
            field: 'shop'
        }, {
            name: 'Precio',
            field: 'price'
        }, {
            name: 'Calidad',
            field: 'quality'
        }, {
            name: '',
            items: [{
                xtype: 'button',
                type: 'danger',
                text: 'Eliminar',
                click: function () {
                    cb.ctr('compare-shop', 'delete', cb.getCmp(this).getRecord()['id']);
                }
            }, {
                xtype: 'button',
                type: 'warning',
                text: 'Editar',
                click: function () {
                    cb.ctr('compare-shop', 'edit', cb.getCmp(this).getRecord());
                }
            }, {
                xtype: 'button',
                type: 'primary',
                text: 'Listar',
                click: function () {
                    cb.ctr('compare-shop', 'add_list', cb.getCmp(this).getRecord());
                }
            }]
        }],
        
        head: {
            items: [{
                cls: 'panel-title',
                store: 'texts',
                field: 'title'
            }]
        },
        
        body: {
            css: {
                overflow: 'auto'
            },
            table: {
                css: {
                    'border': '1px solid #DDD',
                    'border-bottom': '1px solid #DDD'
                },
                beforeItems: {
                    xtype: 'toolbar',
                    padding: 5,
                    items: [{
                        xtype: 'group',
                        items: [{
                            xtype: 'input',
                            id: 'search_input',
                            store: 'texts',
                            placeholder: '{search}',
                            keydown: function (e) {
                                if ( e.which == 13 || cb.getCmp(this).val() == '') {
                                    e.preventDefault();
                                    cb.ctr('compare-shop', 'search', cb.getCmp(this).val());
                                }
                            }
                        }]
                    }, {
                        xtype: 'group',
                        items: {
                            xtype: 'button',
                            glyphicon: 'search',
                            click: function () {
                                cb.ctr('compare-shop', 'search', cb.getCmp('#search_input').val());
                            }
                        }
                    }, {
                        xtype: 'group',
                        items: [{
                            xtype: 'button',
                            glyphicon: 'plus',
                            store: 'texts',
                            text: ' {create_new}',
                            click: function () {
                                cb.getStore('editing').setData({});
                                cb.ctr('compare-shop', 'create');
                            }
                        }]
                    }]
                }
            }
        },
        
        footer: {
            items: [{
                text: 'Creado por Miguel Ángel'
            }]
        }
    }]
});
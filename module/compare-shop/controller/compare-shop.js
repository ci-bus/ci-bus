cb.define({
    xtype: 'controller',
    name: 'compare-shop',
    
    onload: function () {
        //alert('Controller loaded!')
        cb.loadAll([
            ['view', 'common', 'base'],
            ['store', 'compare-shop', 'main', {action: 'get_texts'}],
            ['store', 'compare-shop', 'main', {action: 'get_products'}],
            ['view', 'compare-shop', 'main'],
            ['component', 'compare-shop', 'createForm']
        ], function () {
            cb.define({
                xtype: 'store',
                name: 'editing',
                data: {}
            });
        });
    },

    search: function (text_search) {
        cb.load('store', 'compare-shop', 'main', {action: 'get_products', data: text_search});
    },

    create: function () {
        cb.popup({
            id: 'create_product_popup',
            type: 'primary',
            effect: {
                type: 'flipin',
                vel: 'fast',
                dire: 'down'
            },
            offsetTop: 100,
            css: {
                'max-width': 400
            },
            items: [{
                xtype: 'head',
                css: {'min-height': 40},
                items: [{
                    xtype: 'span',
                    glyphicon: 'remove',
                    cls: 'pull-right',
                    css: {
                        cursor: 'pointer',
                        'padding-top': 4
                    },
                    listeners: {
                        click: function(){
                            cb.effect($(this).parent().parent(), {
                                type: 'flipout',
                                dire: 'up',
                                fn: function(){
                                    $(this).parent().remove();
                                }
                            });
                        }
                    }
                },{
                    xtype: 'div',
                    size: 19,
                    html: 'Crear producto',
                    cls: 'text-center'
                }]
            }, {
                xtype: 'body',
                items: [{
                    xtype: 'createForm'
                }]
            }, {
                xtype: 'footer',
                items: [{
                    xtype: 'button',
                    type: 'primary',
                    text: 'Guardar',
                    click: function (e) {
                        e.preventDefault();
                        cb.ctr('compare-shop', 'createSend');
                    }
                }]
            }]
        });
    },

    createSend: function () {
        cb.send('create_form', 'compare-shop', 'create', function () {
            cb.getCmp('#create_product_popup').changeType('success');
            cb.sto(function () {
                $('form[name="create_form"]')[0].reset();
                cb.getCmp('#create_product_popup').changeType('primary');
            }, 1000);
        });
    },

    delete: function (id) {
        var r = confirm("¿Eliminar producto?");
        if (r == true) {
            cb.load('store', 'compare-shop', 'main', {action: 'delete_product', data: id});
        }
        
    },

    edit: function (record) {
        cb.getStore('editing').setData(record);
        this.create();
    }
});
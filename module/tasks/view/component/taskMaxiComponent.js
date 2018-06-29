cb.define({
    xtype: 'component',
    name: 'taskMaxi',
    items: {
        type: '{type}',
        effect: {
            type: 'flipin',
            vel: 'fast',
            dire: 'down'
        },
        css: {
            width: 800,
            height: 600
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
                listener: {
                    click: function(){
                        cb.effect($(this).parent().parent().parent(), {
                            type: 'fadeout',
                            fn: function() {
                                cb.getCmp(this).remove();
                            }
                        });
                    }
                }
            }, {
                xtype: 'div',
                size: 19,
                text: '{project}',
                cls: 'text-center'
            }]
        }, {
            xtype: 'body',
            css: {
                overflow: 'auto'
            },
            items: [{
                xtype: 'h4',
                css: {'margin-top': 0},
                text: '{title}'
            }, {
                xtype: 'p',
                text: '{content}'
            }]
        }]
    }
});
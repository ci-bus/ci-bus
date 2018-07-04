cb.define({
    xtype: 'component',
    name: 'login',
    items: {
        type: 'primary',
        effect: {
            type: 'flipin',
            vel: 'fast',
            dire: 'up'
        },
        width: 300,
        items: [{
            xtype: 'head',
            css: {'min-height': 40},
            text: 'Login'
        }, {
            xtype: 'body',
            css: {
                overflow: 'auto'
            },
            items: [{
                xtype: 'form',
                name: 'task-login',
                items: [{
                    xtype: 'group',
                    items: [{
                        xtype: 'label',
                        text: 'Email'
                    }, {
                        xtype: 'input',
                        name: 'email'
                    }]
                }, {
                    xtype: 'group',
                    items: [{
                        xtype: 'label',
                        text: 'Password'
                    }, {
                        xtype: 'input',
                        type: 'password',
                        name: 'pass',
                        listener: {
                            keyup: function(e) {
                                if(e.keyCode == 13){
                                    cb.ctr('gotorave', 'login');
                                }
                            }
                        }
                    }]
                }, {
                    xtype: 'group',
                    margin: 0,
                    items: [{
                        xtype: 'button',
                        text: 'Login',
                        click: function (e) {
                            e.preventDefault();
                            cb.ctr('tasks', 'doLogin');
                        }
                    }]
                }]
            }]
        }]
    }
});
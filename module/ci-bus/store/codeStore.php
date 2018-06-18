<?php 

    class Code {
            
        public function __construct($CB, $data = array())
        {
                
$code1 = "cb.define({
    xtype: 'controller',
    name: 'test',

    onload: function () {
        console.log('Loaded controller');
        cb.loadAll([
            ['store', 'test', 'test', {action: 'get_data'}],
            ['view', 'common', 'base'],
            ['view', 'test', 'test']
        ], function () {
            console.log('Loaded store and views')
        });
    }
});";

$code2 = "cb.define({
    xtype: 'view',
    name: 'test',
    renderTo: '#content',

    onRender: function () {
        console.log('Rendered view');
    },

    items: [{
        xtype: 'button',
        text: 'Test button',
        click: function () {
            alert('Button clicked!');
        }
    }]
});";

$code3 = "&lt;&#63;php
    class Test {
        public function __construct(\$CB, \$data = array())
        {
            \$action = \$data['action'];
            \$this->\$action (\$CB, \$data);
        }
    
        public function get_data()
        {
            \$CB->db->select(\"id, field1, field2\");
            \$CB->db->from(\"test_table\");
            \$CB->db->orderBy(\"id\", \"ASC\");

            \$this->parseStore('test', \$CB->db->get());
        }

        public function get_lang_config(\$CB, \$data)
        {
            \$CB->parseConfig('lang', 'ES-es');
        }
    }
&#63;&gt;";

$code4 = "cb.define({
    xtype: 'component',
    name: 'test',
    items: [{
        xtype: 'div',
        margin: '0px 0px 10px 10px',
        items: [{
            xtype: 'glyphicon',
            type: 'thumbs-down',
            cursor: 'pointer',
            margin: 5,
            listener: {
                click: function () {
                    alert('clicked thumb down');
                }
            }
        }, {
            xtype: 'glyphicon',
            type: 'thumbs-up',
            cursor: 'pointer',
            margin: 5,
            listener: {
                click: function () {
                    alert('clicked thumb up');
                }
            }
        }]
    }]
});";

$code5 = "onload: function () {
    cb.load(type, module, file, callback);
}";

$code6 = "onload: function () {
    cb.loadAll([
        ['store', 'test', 'test'],
        ['view', 'test']
    ], function () {
        console.log('Loaded store and view');
    });
}";

$code7 = "cb.define({
    xtype: 'controller',
    name: 'test',

    customf1: function (data) {
        console.log('customf1', data);
    },

    customf2: function () {
        console.log('customf2');
    }
});";

$code8 = "cb.ctr('test', 'customf1', &#123;value: 1&#125;);";

$code9 = "cb.define({
    xtype: 'controller',
    name: 'test',

    route: {
        '#aaa': 'routeTest1',
        '#aaa/:num': 'routeTest2',
        '#aaa/:num/:str': 'routeTest3'
    },

    routeTest1: function (hash) {
        console.log('routeTest1', hash);
    },

    routeTest2: function (hash) {
        console.log('routeTest2', hash);
    },

    routeTest3: function (hash) {
        console.log('routeTest3', hash);
    }

    onload: function () {
        cb.router.hashchange();
    }
});";

$code10 = "{
    xtype: 'button',
    type: 'primary',
    size: 'lg',
    text: 'Test button',
    click: function () {
        alert('Clicked!');
    }
}";

$code11 = "{
    xtype: 'nav',
    type: 'default static-top',
    margin: 0,
    items: [{
        xtype: 'header',
        items: [{
            xtype: 'brand',
            glyphicon: 'home',
            text: ' Home'
        }]
    }, {
        xtype: 'collapse',
        items: [{
            xtype: 'navbar',
            type: 'left',
            items: [{
                xtype: 'a',
                active: true,
                text: 'Link'
            }, {
                xtype: 'a',
                text: 'Link'
            }, {
                xtype: 'dropdown',
                text: 'Dropdown ',
                items: [{
                    xtype: 'a',
                    text: 'Action'
                }, {
                    xtype: 'a',
                    text: 'Another action'
                }, {
                    xtype: 'divider'
                }, {
                    xtype: 'a',
                    text: 'Separated link'
                }]
            }]
        }, {
            xtype: 'form',
            type: 'left',
            items: [{
                xtype: 'group',
                items: [{
                    xtype: 'input',
                    placeholder: 'Search'
                }]
            }, {
                xtype: 'button',
                attr: {
                    type: 'submit'
                },
                text: 'Submit',
                click: function (e) {
                    alert(cb.getCmp(this).up()[0].value);
                }
            }]
        }, {
            xtype: 'navbar',
            type: 'right',
            items: [{
                xtype: 'dropdown',
                text: ' Dropdown ',
                glyphicon: 'comment',
                items: [{
                    xtype: 'a',
                    text: 'Action'
                }, {
                    xtype: 'a',
                    text: 'Another action'
                }, {
                    xtype: 'divider'
                }, {
                    xtype: 'a',
                    text: 'Separated link'
                }]
            }, {
                xtype: 'a',
                glyphicon: 'off',
                color: 'RED'
            }]
        }]
    }]
}";

$code12 = "[{
    xtype: 'dropdown',
    type: 'success',
    text: 'DropDown ',
    size: 'md',
    margin: '0px 10px 0px 0px',
    items: [{
        xtype: 'a',
        text: 'Link 1'
    }, {
        xtype: 'a',
        text: 'Link 2'
    }]
}, {
    xtype: 'dropup',
    type: 'info',
    text: 'DropUp ',
    size: 'xs',
    record: {
        options: [{
            text: 'Link 1'
        }, {
            text: 'Link 2'
        }]
    },
    items: [{
        xtype: 'a',
        field: 'options',
        text: '{text}'
    }]
}]";

$code13 = "{
    xtype: 'container',
    background: 'GRAY',
    type: 'fluid',
    text: 'Container 1',
    color: 'WHITE',
    items: {
        xtype: 'container',
        background: 'YELLOW',
        type: 'fluid',
        padding: 10,
        items: {
            xtype: 'container',
            background: 'GREEN',
            type: 'fluid',
            text: 'Container 3',
            color: 'WHITE'
        }
    }
}";

$code14 = "{
    xtype: 'progress',
    defaults: {
        min: 0,
        max: 100
    },
    items: [{
        striped: true,
        animated: true,
        value: 50,
        text: '50% completed'
    }, {
        type: 'danger',
        value: 3
    }]
}";

            $CB->parseStore('code', array(
                'cd1' => array(
                    'type' => 'javascript',
                    'code' => $code1),
                'cd2' => array(
                    'type' => 'javascript',
                    'code' => $code2),
                'cd3' => array(
                    'type' => 'php',
                    'code' => $code3),
                'cd4' => array(
                    'type' => 'javascript',
                    'code' => $code4),
                'cd5' => array(
                    'type' => 'javascript',
                    'code' => $code5),
                'cd6' => array(
                    'type' => 'javascript',
                    'code' => $code6),
                'cd7' => array(
                    'type' => 'javascript',
                    'code' => $code7),
                'cd8' => array(
                    'type' => 'javascript',
                    'code' => $code8),
                'cd9' => array(
                    'type' => 'javascript',
                    'code' => $code9),
                'cd10' => array(
                    'type' => 'javascript',
                    'code' => $code10),
                'cd11' => array(
                    'type' => 'javascript',
                    'code' => $code11),
                'cd12' => array(
                    'type' => 'javascript',
                    'code' => $code12),
                'cd13' => array(
                    'type' => 'javascript',
                    'code' => $code13)
                ,
                'cd14' => array(
                    'type' => 'javascript',
                    'code' => $code14)
            ));
        }
    }
    
?>
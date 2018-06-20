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
                    e.preventDefault();
                    var input = cb.getCmp(this).up().down('input', 0),
                        value = input.getValue();
                    if (value) {
                        alert(value);
                    } else {
                        input.focus();
                    }
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
    margin: 0,
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

$code15 = "{
    xtype: 'table',
    type: 'hover bordered',
    background: '#fff',
    items: [{
        xtype: 'head',
        items: [{
            text: '#'
        }, {
            text: 'Name'
        }, {
            text: 'Type'
        }]
    }, {
        xtype: 'body',
        items: [[{
            xtype: 'th',
            scope: 'row',
            text: '1'
        }, {
            text: 'Miguel'
        }, {
            text: 'root',
            type: 'success'
        }], [{
            xtype: 'th',
            scope: 'row',
            text: '2'
        }, {
            text: 'Jimena'
        }, {
            text: 'admin'
        }]]
    }]
}";

$code16 = "{
    xtype: 'glyphicon',
    type: 'ok',
    margin: 5,
    color: 'green',
    size: 25
}";

$code17 = "{
    xtype: 'thumbnail',
    type: 'a',
    width: 110,
    margin: 0,
    items: {
        xtype: 'img',
        src: 'assets/img/backmenu.jpg'
    }
}";

$code18 = "{
    xtype: 'alert',
    type: 'danger',
    text: '<strong>Danger!</strong> This is a alert',
    margin: 0,
    closable: true
}";

$code19 = "{
    xtype: 'badge',
    text: 'This is a badge',
    padding: 10
}";

$code20 = "{
    xtype: 'toolbar',
    items: [{
        xtype: 'group',
        items: [{
            xtype: 'button',
            glyphicon: 'folder-open'
        }, {
            xtype: 'button',
            glyphicon: 'floppy-disk'
        }, {
            xtype: 'button',
            glyphicon: 'open'
        }]
    }, {
        xtype: 'group',
        items: [{
            xtype: 'button',
            glyphicon: 'zoom-in'
        }, {
            xtype: 'button',
            glyphicon: 'zoom-out'
        }]
    }]
}";

$code21 = "{
    xtype: 'group',
    type: 'vertical',
    size: 'md',
    items: [{
        xtype: 'button',
        text: 'button 1',
    }, {
        xtype: 'button',
        text: 'button 2'
    }, {
        xtype: 'button',
        text: 'button 3'
    }, {
        xtype: 'dropdown',
        text: 'DropDown',
        items: [{
            xtype: 'a',
            text: 'Link 1'
        }, {
            xtype: 'a',
            text: 'Link 2'
        }]
    }]
}";

$code22 = "{
    xtype: 'callout',
    type: 'info',
    margin: 0,
    title: 'Title',
    text: 'Example info text'
}";

$code23 = "{
    xtype: 'panel',
    type: 'primary',
    items: [{
        xtype: 'head',
        title: 'Head panel'
    }, {
        xtype: 'body',
        text: 'Body panel'
    }, {
        xtype: 'footer',
        text: 'Footer panel'
    }]
}";

$code24 = "{
    xtype: 'tabpanel',
    items: [{
        id: 'home',
        active: true,
        tab: {
            text: 'Tab button 1'
        },
        panel: {
            xtype: 'container',
            type: 'fluid',
            html: 'Texto panel 1',
            css: {
                padding: 10
            }
        }
    }, {
        id: 'profile',
        tab: {
            text: 'Tab button 2'
        },
        panel: {
            xtype: 'container',
            type: 'fluid',
            html: 'Texto panel 2',
            css: {
                padding: 10
            }
        }
    }, {
        tab: {
            xtype: 'dropdown',
            id: 'options',
            text: 'Tab button 3',
            items: [{
                ref: 'inde-panel',
                text: 'Link 1'
            }, {
                xtype: 'separator'    
            }, {
                ref: 'inde-panel2',
                text: 'Link 2'
            }]
        },
        panel: [{
            id: 'inde-panel',
            xtype: 'container',
            type: 'fluid',
            html: 'Other panel',
            css: {
                padding: 10
            }
        }, {
            id: 'inde-panel2',
            xtype: 'container',
            type: 'fluid',
            html: 'Other panel 2',
            css: {
                padding: 10
            }
        }]
    }]
}";

$code24 = "{
    xtype: 'row',
    margin: 0,
    items: [{
        xtype: 'col',
        size: {
            xs: 12,
            sm: 4
        },
        background: '#AAA',
        color: 'white',
        padding: 10,
        text: 'Column 1'
    }, {
        xtype: 'col',
        size: {
            xs: 12,
            sm: 8
        },
        background: '#CCC',
        color: 'white',
        padding: 10,
        text: 'Column 2'
    }]
}";

$code25 = "{
    xtype: 'form',
    method: 'post',
    enctype: 'multipart/form-data',
    items: [{
        xtype: 'form-group',
        items: [{
            xtype: 'label',
            text: 'Name'
        }, {
            xtype: 'input',
            type: 'text',
            name: 'name'
        }]
    }, {
        xtype: 'form-group',
        items: [{
            xtype: 'label',
            text: 'Upload image'
        }, {
            xtype: 'input',
            type: 'file',
            id: 'form-upload',
            name: 'upload',
            text: 'Select',
            margin: '0px 10px',
            change: function (e) {
                var file = e.target.files[0];
                if(file && file.type && file.type.substr(0, 5) == 'image')
                {
                    cb.setConfig('form_upload', file);
                    var tgt = e.target || window.event.srcElement,
                    files = tgt.files;
                    
                    if (FileReader && files && files.length) {
                        var fr = new FileReader();
                        fr.onload = function () {
                            $('#form-img').show().attr('src', fr.result);
                        }
                        fr.readAsDataURL(files[0]);
                    }
                }else{
                    alert('Image not valid');
                }
            }
        }, {
            xtype: 'img',
            id: 'form-img',
            width: 128,
            hidden: true
        }]
    }, {
        xtype: 'input',
        type: 'submit',
        value: 'Send',
        click: function (e) {
            e.preventDefault;
            console.log('data', cb.getCmp(this).up('form').serializeArray());
            console.log('img', cb.getConfig('form_upload'));
            return false;
        }
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
                    'code' => $code13),
                'cd14' => array(
                    'type' => 'javascript',
                    'code' => $code14),
                'cd15' => array(
                    'type' => 'javascript',
                    'code' => $code15),
                'cd16' => array(
                    'type' => 'javascript',
                    'code' => $code16),
                'cd17' => array(
                    'type' => 'javascript',
                    'code' => $code17),
                'cd18' => array(
                    'type' => 'javascript',
                    'code' => $code18),
                'cd19' => array(
                    'type' => 'javascript',
                    'code' => $code19),
                'cd20' => array(
                    'type' => 'javascript',
                    'code' => $code20),
                'cd21' => array(
                    'type' => 'javascript',
                    'code' => $code21),
                'cd22' => array(
                    'type' => 'javascript',
                    'code' => $code22),
                'cd23' => array(
                    'type' => 'javascript',
                    'code' => $code23),
                'cd24' => array(
                    'type' => 'javascript',
                    'code' => $code24),
                'cd25' => array(
                    'type' => 'javascript',
                    'code' => $code25)
            ));
        }
    }
    
?>
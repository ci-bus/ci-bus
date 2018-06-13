<?php 

	class Code {
			
			public function __construct($CB, $data = array())
			{
			    
$code1 = "cb.define({
    xtype: 'controller',
    name: 'test',

    onload: function(){
        console.log('Loaded controller');
        cb.loadAll([
            ['store', 'test', 'test', &#123;action: 'get_data'&#125;],
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
        click: function(){
            alert('Button clicked!');
        }
    }]
});";

$code3 = "&lt;&#63;php
    class Test {
        public function __construct(\$CB, \$data = array())
        {
            \$action = \$data['action'];
            \$this->\$action(\$CB, \$data);
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
            	click: function(){
                    alert('clicked thumb down');
            	}
            }
        },{
            xtype: 'glyphicon',
            type: 'thumbs-up',
            cursor: 'pointer',
            margin: 5,
            listener: {
            	click: function(){
                    alert('clicked thumb up');
            	}
            }
        }]
    }]
});";

$code5 = "onload: function () {
    cb.load('view', 'test', 'test', function(){
        console.log('Loaded View');
    });
}";

$code6 = "onload: function () {
    cb.loadAll([
        ['store', 'test', 'test'],
        ['view', 'test']
    ], function(){
        console.log('Loaded store and view');
    });
}";

$code7 = "cb.define({
    xtype: 'controller',
    name: 'test',

    customf1: function(data){
        console.log('customf1', data);
    },

    customf2: function(){
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

    routeTest1: function(hash){
        console.log('routeTest1', hash);
    },

    routeTest2: function(hash){
        console.log('routeTest2', hash);
    },

    routeTest3: function(hash){
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
    click: function(){
        alert('Clicked!');
    }
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
                        'code' => $code10)
                ));
			}
	}
	
?>
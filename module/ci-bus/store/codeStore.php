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
                ['view', 'common', 'base'],
                ['view', 'test', 'test']
            ], function () {
            console.log('Loaded views')
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
				$CB->parseStore('code', array( 'cd1' => $code1, 'cd2' => $code2 ));
			}
	}
	
?>
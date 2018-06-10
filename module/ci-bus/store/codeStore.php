<?php 

	class Code {
			
			public function __construct($CB, $data = array())
			{
				$code1 = "cb.define({
    xtype: 'controller',
    name: 'test',

    onload: function(){
        alert('Loaded controller');
    }
});";
				$CB->parseStore('code', array( 'cd1' => $code1 ));
			}
	}
	
?>
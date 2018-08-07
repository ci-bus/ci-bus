cb.define({
	xtype: 'view',
	name: 'install',
	renderTo: '#content',
	
	items: [{
	    xtype: 'container',
	    store: 'texts',
        field: 'install',
	    items: [{
	    	xtype: 'h1',
	    	field: 'tx1'
	    }, {
	        xtype: 'h3',
	        field: 'tx2'
	    }, {
	        xtype: 'callout',
	        items: [{
	        	field: 'tx3'
	        }, {
                xtype: 'pre',
                margin: '10px 0px',
                field: 'tx4',
                dblclick: function () {
                    cb.getCmp(this).selectContent();
                }
            }, {
            	field: 'tx5'
            }]
	    }, {
	        xtype: 'h3',
	        field: 'tx6'
	    }, {
	        xtype: 'callout',
	        items: [{
	        	field: 'tx7'
	        }]
	    }, {
	        xtype: 'h3',
	        field: 'tx8'
	    }, {
	        xtype: 'callout',
	        items: [{
	        	field: 'tx9'
	        }, {
                xtype: 'pre',
                margin: '10px 0px',
                field: 'tx10',
                dblclick: function () {
                    cb.getCmp(this).selectContent();
                }
            }, {
            	field: 'tx11'
            }]
	    }, {
	        xtype: 'h3',
	        field: 'tx12'
	    }, {
	        xtype: 'callout',
	        items: [{
	        	field: 'tx13'
	        }, {
                xtype: 'pre',
                margin: '10px 0px',
                field: 'tx14',
                dblclick: function () {
                    cb.getCmp(this).selectContent();
                }
            }]
	    }, {
	        xtype: 'h3',
	        field: 'tx15'
	    }, {
	        xtype: 'callout',
	        items: [{
	        	field: 'tx16'
	        }, {
                xtype: 'pre',
                margin: '10px 0px',
                field: 'tx17',
                dblclick: function () {
                    cb.getCmp(this).selectContent();
                }
            }]
	    }]
	}]
});
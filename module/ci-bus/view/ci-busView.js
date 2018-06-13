cb.define({
	xtype: 'view',
	name: 'ci-bus',
	renderTo: '#content',
	
	items: [{
		xtype: 'container',
		items: [{
		    xtype: 'h1',
		    text: 'Ci-bus Framework'
		}]
	}, {
	    xtype: 'container',
	    store: 'texts',
        field: 'home',
	    items: [{
	        xtype: 'h3',
	        field: 'tx1'
	    }, {
	        xtype: 'callout',
	        field: 'tx2'
	    }, {
            xtype: 'h3',
            field: 'tx3'
        }, {
            xtype: 'callout',
            field: 'tx4'
        }, {
            xtype: 'h3',
            field: 'tx5'
        }, {
            xtype: 'callout',
            field: 'tx6'
        }, {
            xtype: 'h3',
            field: 'tx7'
        }, {
            xtype: 'callout',
            items: {
                xtype: 'table',
                width: 'auto',
                margin: 0,
                items: [{
                    xtype: 'head',
                    items: [{
                        items: {
                            xtype: 'img',
                            src: 'assets/img/miguel.png',
                            css: {
                                'border-radius': '50%',
                                border: '2px solid #DDD'
                            }
                        }
                    }, {
                        text: 'Miguel Ángel Calero Ponce'
                    }]
                }, {
                    xtype: 'body',
                    items: [[{
                        text: 'Email'
                    }, {
                        xtype: 'a',
                        text: 'miguelelinventor@gmail.com',
                        href: 'mailto:miguelelinventor@gmail.com'
                    }], [{
                        text: 'Tlf'
                    }, {
                        xtype: 'a',
                        text: '+34 722-128-106',
                        href: 'tel:+34 722-128-106'
                    }], [{
                        text: 'Linkedin'
                    }, {
                        xtype: 'a',
                        target: '_blank',
                        text: 'https://www.linkedin.com/in/miguelangelcaleroponce/',
                        href: 'https://www.linkedin.com/in/miguelangelcaleroponce/'
                    }]]
                }]
            }
        }, {
            xtype: 'h3',
            field: 'tx8'
        }, {
            xtype: 'callout',
            items: {
                xtype: 'a',
                field: 'tx9',
                target: '_blank',
                href: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WBPDLUN6JUYRA'
            }
        }]
	}]
});
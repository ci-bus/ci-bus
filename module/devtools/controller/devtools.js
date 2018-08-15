cb.define({
	xtype: 'controller',
	name: 'devtools',
	
	onload: function () {
		cb.loadAll([
		    ['view', 'common', 'base'],
		    ['view', 'devtools', 'tools']
		], function () {
			
		})
	},
	
	createFolders: function (nameProject) {
		if (nameProject) {
			cb.load('store', 'devtools', 'dev', {
				action: 'create_folders',
				data: {
					name: nameProject
				}
			});
		} else {
			this.alert('Write name project first', 'warning');
		}
	},
	
	createFiles: function (nameProject) {
		if (nameProject) {
			cb.load('store', 'devtools', 'dev', {
				action: 'create_files',
				data: {
					name: nameProject
				}
			});
		} else {
			this.alert('Write name project first', 'warning');
		}
	},
	
	alert: function (msg, type) {
		if ($.isArray(msg)) {
			type = msg[1];
			msg = msg[0];
		} else if (!type) {
			type = 'default';
		}
		var popup = cb.popup({
		    type: type,
		    id: 'alert',
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
		                	clearTimeout(cb.getController('devtools').alert_sto);
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
		            html: 'Ci-bus devTools',
		            cls: 'text-center'
		        }]
		    },{
		        xtype: 'body',
		        html: msg
		    }]
		});
		
		this.alert_sto = cb.sto(function () {
			cb.getCmp(popup).down('.glyphicon-remove').click();
		}, 3000);
	} 
});
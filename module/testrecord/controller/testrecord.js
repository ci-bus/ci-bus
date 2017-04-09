cb.define({
	
	xtype: 'controller',
	name: 'testrecord',
	
	onload: function(){
		cb.define({
			xtype: 'store',
			name: 'test',
			data: {
				text1:'aaa', 
				text2:'bbb', 
				text3:'ccc', 
				tags1: ['ddd', 'eee', 'fff'], 
				tags2: [{name:'ggg'}, {name:'hhh'}, {name:'iii'}]
			}
		});

		cb.create({

			xtype: 'div',
			
			renderTo: 'body',
			
			store: 'test',
			
			defaults: {
				margin: '10px 0px 0px 10px'
			},
			
			items: [{
				xtype: 'button',
				field: 'text1'
			},{
				xtype: 'button',
				field: 'text2'
			},{
				xtype: 'button',
				field: 'text3'
			},{
				xtype: 'button',
				field: 'tags1'
			},{
				xtype: 'button',
				field: 'tags2',
				text: '{name}'
			}]
			
		});

		cb.create({

			xtype: 'panel',
			
			type: 'primary',
			
			appendTo: 'body',
			
			store: 'test',
			
			margin: 10,
			
			items: [{
				xtype: 'head',
				items: [{
					xtype: 'title',
					field: 'text1'
				}]
			},{
				xtype: 'body',
				items: [{
					xtype: 'button',
					type: 'primary',
					field: 'tags1',
					listener: {
						click: function(){
							console.log($(this).getCmp());
							console.log($(this).getRecord());
							//console.log($(this).getValue());
						}
					}
				}]
			},{
				xtype: 'footer',
				items: [{
					xtype: 'button',
					field: 'tags2',
					alterdata: {
						name: function(v){
							if(v=='hhh'){
								return cb.create({
									xtype: 'button',
									text: 'alterdata'
								});
							}
							return v;
						}
					},
					items: [{
						xtype: 'div',
						field: 'name'
					}]
				}]
			}]
			
		});
	}
});
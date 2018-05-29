cb.define({
	
	xtype: 'controller',
	name: 'testrecord',
	
	route: {
		'#aaa': 'test1',
		'#aaa/:num': 'test2',
		'#aaa/:num/:str': 'test3'
	},
	
	test1: function(hash){
		console.log('test1', hash);
	},
	
	test2: function(hash){
		console.log('test2', hash);
	},
	
	test3: function(hash){
		console.log('test3', hash);
	},
	
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
		
		cb.define({
			xtype: 'store',
			name: 'test2',
			data: {
				a:[15,43,87,18,23,15,24,8],
				b: [{ a: 5 }, { a: 8 }, { a: 2 }]
			}
		});
		
		//cb.get('store', 'test2').sort({ data: 'a', order: 'desc'})
		// cb.get('store', 'test2').sort('b', function(a,b){ return b.a - a.a; })

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
							console.log(cb.getCmp(this));
							console.log(cb.getCmp($(this).parent()).getRecord());
							console.log(cb.getCmp(this).getValue());
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
			},{
				xtype: 'button',
				text: 'Test load store with new data',
				margin: 10,
				listener: {
					click: function(){
						cb.define({
							xtype: 'store',
							name: 'test',
							data: {
								text1:'jjj', 
								text2:'kkk', 
								text3:'lll', 
								tags1: ['mmm', 'nnn', 'ooo'], 
								tags2: [{name:'ppp'}, {name:'qqq'}, {name:'rrr'}]
							}
						});
						alert('Store cargado');
					}
				}
			}]
			
		});
		
		cb.create({
			appendTo: 'body',
			xtype: 'row',
			defaults: {
				xtype: 'col',
				size: 6
			},
			items: [{
				items: [{
					store: 'test2',
					xtype: 'svg',
					width: 600,
					height: 400,
					border: '1px solid green',
					items: [{
						store: 'test2',
						field: 'a',
						storelink: true,
						xtype: 'polyline',
						'stroke-width': 1,
						color: 'black',
						width: 600,
						height: 400,
						fill: 'RED',
						pointMax: 120,
						pointMin: 0
					}]
				}]
			},{
				defaults: {
					xtype: 'button',
					margin: '0 0 10px 0'
				},
				items: [{
					text: 'Ordenar ASC',
					click: function(){
						var fields = ['a'];
						for(var l=0; l<fields.length; l++){
							cb.getStore('test2').sort(fields[l], 'asc');
						}
					}
				},{
					xtype: 'br'
				},{
					text: 'Ordenar DESC',
					click: function(){
						var fields = ['a'];
						for(var l=0; l<fields.length; l++){
							cb.getStore('test2').sort(fields[l], 'desc');
						}
					}
				},{
					xtype: 'br'
				},{
					text: 'Restaurar',
					click: function(){
						var fields = ['a'];
						for(var l=0; l<fields.length; l++){
							cb.getStore('test2').restore(fields[l]);
						}
					}
				},{
					xtype: 'br'
				},{
					text: 'Generar',
					click: function(){
						if(!cb.aniline){
							cb.aniline = setInterval(function(){
								var fields = ['a'];
								for(var l=0; l<fields.length; l++){
									var ran = Math.floor((Math.random() * 100) + 1);
									var data = cb.getStore('test2', fields[l]);
									for(var i=0; i<5; i++){
										ran = (ran + data[data.length-1])/2;
									}
									if(data.length > 200){ //Conf numero elementos array
										data.shift();
									}
									data.push(ran);
									cb.getStore('test2').setData(data, fields[l]);
								}
							}, 50);
						}
					}
				},{
					xtype: 'br'
				},{
					text: 'Parar de generar',
					click: function(){
						if(cb.aniline){
							clearInterval(cb.aniline);
							cb.aniline = false;
						}
					}
				}]
			}]
		});	
	}
});

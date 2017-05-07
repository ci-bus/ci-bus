cb.define({
	
	xtype: 'controller',
	name: 'maderap',
	
	onload: function(){
		cb.loadAll([
			['view', 'common', 'base'],
			['view', 'maderap', 'search']
		]);
	},
	
	search: function(){
		cb.send('search_content', 'maderap', 'search', function(res){
			cb.load('view', 'maderap', 'resultado');
		});
	},
	
	insert: function(word){
		cb.create({
			xtype: 'badge',
			appendTo: '#pizarra',
			margin: '10px 0px 0px 10px',
			css: {'font-size': '17px'},
			mouseover: function(){
				$(this).find('div.ctrls').css('display', 'block');
			},
			mouseout: function(){
				$(this).find('div.ctrls').css('display', 'none');
			},
			items: [{
				xtype: 'div',
				css: {'padding-bottom': '5px'},
				text: word
			},{
				xtype: 'div',
				display: 'none',
				cls: 'ctrls',
				items: [{
					xtype: 'div',
					color: '#fff',
					pull: 'left',
					margin: 5,
					css: {cursor: 'pointer'},
					items: {
						xtype: 'glyphicon',
						type: 'chevron-left'
					}
				},{
					xtype: 'div',
					color: '#fff',
					pull: 'right',
					margin: 5,
					css: {cursor: 'pointer'},
					items: {
						xtype: 'glyphicon',
						type: 'chevron-right'
					}
				}]
			}] 
		});
	}
});
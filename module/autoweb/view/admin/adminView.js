cb.define({

	xtype: 'view',
	name: 'admin',
	renderTo: '#content',

	items: [{
		xtype: 'nav',
		appendTo: 'header',
		type: 'default static-top',
		color: '#454b49',
		id: 'homenav',
		items: [{
			xtype: 'navbar',
			type: 'right',
			items: [{
				xtype: 'a',
				css: {cursor: 'pointer'},
				cls: 'navbar-brand',
				glyphicon: 'cog',
				listener: {
					click: function(){
						cb.ctr('gotorave', 'home');
					}
				}
			}]
		}]
	},{
		xtype: 'container',
		border: '1px solid #DDD',
		padding: 0,
		items: [{
			xtype: 'form',
			name: 'search_content',
			items: [{
				xtype: 'row',
				items: [{
					xtype: 'col',
					size: 2,
					text: 'Buscar contenido nuevo',
					css: {'padding-top': 5}
				},{
					xtype: 'col',
					size: 6,
					items: [{
						xtype: 'input',
						type: 'text',
						name: 'search'
					}]
				},{
					xtype: 'col',
					size: 4,
					items: {
						xtype: 'button',
						type: 'primary',
						text: 'Buscar',
						width: '100%',
						click: function(){
							cb.ctr('autoweb', 'search_content');
						}
					}
				}]
			}]
		}]
	}]
});
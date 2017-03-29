
cb.define({
	xtype: 'view',
	name: 'mainmenu',
	items: [{
		xtype: 'nav',
		type: 'default static-top',
		items: [{
			xtype: 'header',
			items: [{
				xtype: 'a',
				href: '#',
				cls: 'navbar-brand',
				text: 'Ci-bus'
			}]
			
		},{
			xtype: 'collapse',
			items: [{
				xtype: 'navbar',
				type: 'left',
				items: [{
					xtype: 'dropdown',
					text: 'Menu 1',
					items: [{
						xtype: 'a',
						text: 'Boton 1'
					},{
						xtype: 'separator'
					}]
				},{
					xtype: 'button',
					text: 'Boton 2',
					listener: {
						'click': function()
						{
							cb.load('store', 'home', {'action':'home2'})
						}
					}
				},{
					xtype: 'text',
					text: 'Text in menu'
				}]
			},{
				xtype: 'navbar',
				type: 'right',
				items: [{
					xtype: 'dropdown-menu',
					text: 'Menu 2',
					items: [{
						xtype: 'a',
						text: 'Boton 1'
					},{
						xtype: 'separator'
					}]
				},{
					xtype: 'button-menu',
					text: 'Boton 2',
					badge: '11',
					listener: {
						'click': function()
						{
							cb.load('store', 'home', {'action':'home'})
						}
					}
				},{
					xtype: 'text-menu',
					text: 'Text in menu'
				}]
			}]
		}]
	}]
});
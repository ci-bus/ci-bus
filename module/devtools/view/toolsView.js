cb.define({
	xtype: 'view',
	name: 'tools',
	renderTo: '#content',
	items: [{
		xtype: 'container',
		items: [{
			xtype: 'container',
			items: [{
				xtype: 'h3',
				text: 'Create new project'
			}, {
				xtype: 'input',
				type: 'text',
				placeholder: 'Name project'
			}, {
				xtype: 'group',
				margin: '10px 0 0 0',
				items: [{
					xtype: 'button',
					text: 'Create folders',
					click: function () {
						cb.ctr('devtools', 'createFolders', cb.getCmp(this).up('container').down('input').val())
					}
				}, {
					xtype: 'button',
					text: 'Create controller'
				}]
			}]
		}]
	}]
});
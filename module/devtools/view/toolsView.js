cb.define({
	xtype: 'view',
	name: 'tools',
	renderTo: '#content',
	items: [{
		xtype: 'container',
		css: {
			'margin-top': 20
		},
		size: 27,
		text: 'Dev Tools'
	}, {
		xtype: 'container',
		css: {
			'margin-top': 10
		},
		defaults: {
			xtype: 'callout',
			margin: '0 0 20px 0',
			type: 'info'
		},
		items: [{
			items: [{
				xtype: 'h3',
				margin: '0 0 15px 0',
				text: 'Create module'
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
						cb.ctr('devtools', 'createFolders', cb.getCmp(this).up('container').down('input').val());
					}
				}, {
					xtype: 'button',
					text: 'Create example files',
					click: function () {
						cb.ctr('devtools', 'createFiles', cb.getCmp(this).up('container').down('input').val());
					}
				}]
			}]
		}, {
			items: [{
				xtype: 'h3',
				margin: '0 0 15px 0',
				text: 'Create file'
			}, {
				xtype: 'row',
				margin: '10px 0 0 0',
				defaults: {
					xtype: 'col',
					size: {
                        lg: 3,
                        md: 6,
                        sm: 12
                    },
                    css: {
                        'padding-bottom': 10
                    }
				},
				items: [{
					items: [{
                        xtype: 'label',
                        text: 'Module'
                    }, {
						xtype: 'select',
						items: {
							xtype: 'option',
							store: 'modules',
							storelink: true,
							value: '{name}',
							text: '{name}'
						}
					}]
				}, {
					items: [{
                        xtype: 'label',
                        text: 'Type'
                    }, {
						xtype: 'select',
						items: [{
							xtype: 'option',
							value: 'controller',
							text: 'Controller'
						}, {
							xtype: 'option',
							value: 'store',
							text: 'Store'
						}, {
							xtype: 'option',
							value: 'view',
							text: 'View'
						}, {
							xtype: 'option',
							value: 'component',
							text: 'Component'
						}]
					}]
				}, {
					items: [{
                        xtype: 'label',
                        text: 'Name file'
                    }, {
						xtype: 'input',
						type: 'text',
						placeholder: 'Name file'
					}]
				}, {
					items: [{
						xtype: 'button',
						text: 'Create file',
						css: {
						    'margin-top': 27
						},
						click: function () {
							var row = cb.getCmp(this).up('row'),
								module = row.down('select', 0).getValue(),
								type = row.down('select', 1).getValue(),
								name = row.down('input').getValue();
							cb.ctr('devtools', 'createFile', {
								module: module,
								type: type,
								name: name
							});
						}
					}]
				}]
			}]
		}, {
		    items: [{
	            items: [{
	                xtype: 'h3',
	                margin: '0 0 15px 0',
	                text: 'Open module'
	            }, {
	                xtype: 'container',
	                type: 'fluid',
	                items: {
	                    xtype: 'a',
	                    store: 'modules',
	                    storelink: true,
	                    href: '{name}',
	                    target: '_blank',
	                    pull: 'left',
	                    margin: '5px 10px',
	                    items: {
	                        field: 'name'
	                    }
	                }
	            }]
		    }]
		}]
	}]
});
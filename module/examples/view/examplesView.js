cb.define({
	xtype: 'view',
	name: 'examples',
	
	items: [{
		xtype: 'container',
		//Las propiedades del objeto defaults se setean a todos sis hijos
		defaults: {
			// appenTo es donde quiere que el elemento se 'cargue'
			// tambien puedes definir renderTo, este sustitulle lo que haya por el elemento
			// y prependTo, este funciona como appendTo
			// pero en vez de añadir el elemento al final lo añade al principio
			appendTo: 'body'
		},
		//Los items son los elementos hijos (se crea dentro)
		items: [{
			xtype: 'h3',
			text: '...Callout'
		},{
			xtype: 'callout',
			type: 'warning',
			margin: 10,
			title: 'Bienvenido a ci-bus',
			text: 'This is a descirption of callout'
		},{
			xtype: 'h3',
			text: '...Group of buttons',
		},{
			xtype: 'group',
			size: 'md',
			margin: 10,
			//type: 'vertical',
			defaults: {
				margin: 0
			},
			items: [{
				xtype: 'button',
				text: 'boton 1'
			},{
				xtype: 'button',
				text: 'boton 2'
			},{
				xtype: 'button',
				text: 'boton 3'
			},{
				xtype: 'dropdown',
				text: 'DropDown 1',
				size: 'md',
				items: [{
					xtype: 'a',
					text: 'Enlace 1'
				},{
					xtype: 'a',
					text: 'Enlace 2'
				}]
			}]
		},{
			xtype: 'h3',
			text: '...Panel',
		},{
			xtype: 'panel',
			type: 'info',
			margin: 10,
			items: [{
				xtype: 'head',
				title: 'Head panel'
			},{
				xtype: 'body',
				text: 'Body panel'
			},{
				xtype: 'footer',
				text: 'Footer panel'
			}]
		},{
			xtype: 'h3',
			text: '...Tabpanel'
		},{
			xtype: 'tabpanel',
			margin: 10,
			items: [{
				id: 'home2',
				active: true,
				tab: {
					text: 'Tab button 1'
				},
				panel: {
					xtype: 'container', type: 'fluid',
					css: {'padding-top': '10px'}
				}
			},{
				id: 'profile2',
				tab: {
					text: 'Tab button 2'
				},
				panel: {
					xtype: 'container', type: 'fluid', html: 'Texto panel 2'
				}
			},{
				tab: {
					xtype: 'dropdown', id: 'opciones2', text: 'Tab button 3',
					items: [{
						ref: 'inde-panel', text: 'Enlace 1'
					},{
						xtype: 'separator'	
					},{
						ref: 'inde-panel2', text: 'Enlace 2'
					}]
				},
				panel: [{
					id: 'inde-panel', xtype: 'container', type: 'fluid',
					html: 'Panel independiente'
				},{
					id: 'inde-panel2', xtype: 'container', type: 'fluid',
					html: 'Panel independiente 2'
				}]
			}]
		},{
			xtype: 'h3',
			text: '...Table',
		},{
			xtype: 'table',
			items: [{
				xtype: 'head',
				items: [{
					text: '#'
				},{
					text: 'Name'
				},{
					text: 'Type'
				}]
			},{
				xtype: 'body',
				items: [{
					scope: 'row',
					text: '1'
				},{
					text: 'Miguel'
				},{
					text: 'root'
				}]
			}]
		}]
	}]
});
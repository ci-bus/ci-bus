
/*
 
//Array
 
var aaa = ['fdd', 'fdd' , 'fvdf', 56];

alert(aaa[3]);

//Object

var bbb = {
	prop1 : 'red',
	prop2 : 44
};

alert(bbb['prop2']);

//Array de objetos

var ccc = [{}, {}, {}];

//Objeto con distintos contenidos

var ccc = {
	texto: 'aaa',
	numero: 44,
	funcion: function(){
		alert('oks');
	},
	unarray: ['aaa', 'bbb', 55],
	unobject: {
		mas_cosas: 'aaa'
	}
};

//Ejecutar la funcion

ccc['funcion']();

alert(ccc['unarray'][2]);

alert(ccc['unobject']['mas_cosas']);

*/

cb.define({
	xtype: 'view',
	name: 'examples',
	renderTo: 'body',
	
	items: [{
		xtype: 'div',
		id: 'cibus-header',
		css: {
			'max-height': '200px',
			height: 200,
			width: '100%',
			overflow: 'hidden',
			position: 'absolute',
			'background-color': '#000',
			'text-align': 'center',
			top: 0
		},
		click: function () {
		    cb.ctr('examples', 'doMagia');
		}
	}, {
		xtype: 'container',
		css: {'margin-top': '200px'},
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
				text: 'button 1'
			},{
				xtype: 'button',
				text: 'button 2'
			},{
				xtype: 'button',
				text: 'button 3'
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
					xtype: 'container', type: 'fluid', html: 'Texto panel 1',
					css: {
						padding: 10
					}
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
			text: '...Table'
		},{
			xtype: 'table',
			width: 'calc(100% - 20px)',
			margin: 10,
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
		},{
			xtype: 'h3',
			text: '...Progress'
		},{
			xtype: 'progress',
			margin: 10,
			items: {
				striped: true,
				animated: true,
				min: 0,
				max: 100,
				value: 50
			}
		},{
			xtype: 'h3',
			text: '...Ico'
		},{
			xtype: 'ico',
			type: 'glyphicon glyphicon-search',
			margin: 10
		},{
			xtype: 'h3',
			text: '...Glyphicon'
		},{
			xtype: 'glyphicon',
			type: 'search',
			margin: 10
		},{
			xtype: 'h3',
			text: '...Thumbnail'
		},{
			xtype: 'div',
			float: 'left',
			width: '100%',
			items: {
				xtype: 'thumbnail',
				type: 'a',
				href: '#',
				margin: 10,
				float: 'left',
				items: {
					xtype: 'img',
					src: 'assets/img/backmenu.jpg'
				}
			}
		},{
			xtype: 'h3',
			text: '...Alert'
		},{
			xtype: 'alert',
			text: 'This is a alert!',
			margin: '10px'
		},{
			xtype: 'h3',
			text: '...Badge'
		},{
			xtype: 'badge',
			text: 'This is a badge',
			margin: '10px',
			padding: 5
		},{
			xtype: 'h3',
			text: '...Row with 2 columns'
		},{
			xtype: 'row',
			items: [{
				xtype: 'col',
				size: {
					xs: 12,
					sm: 6
				},
				background: '#AAA',
				color: 'white',
				padding: 10,
				text: 'Column 1'
			},{
				xtype: 'col',
				size: {
					xs: 12,
					sm: 6
				},
				background: '#CCC',
				color: 'white',
				padding: 10,
				text: 'Column 2'
			}]
		},{
			xtype: 'h3',
			text: '...Input'
		},{
			xtype: 'input',
			type: 'text',
			width: 'calc(100% - 20px)',
			margin: 10,
			text: 'Input to example'
		},{
			xtype: 'h3',
			text: '...Input select'
		},{
			xtype: 'select',
			width: 'calc(100% - 20px)',
			margin: 10,
			items: [{
				xtype: 'option',
				value: 1,
				text: 'one'
			},{
				xtype: 'option',
				value: 2,
				text: 'two'
			}]
		},{
			xtype: 'h3',
			text: '...Label'
		},{
			xtype: 'label',
			type: 'primary',
			margin: 10,
			text: 'Label to test'
		},{
            xtype: 'h3',
            text: '...Toggle'
        },{
            xtype: 'toggle',
            on: {
                type: 'primary',
                text: 'On'
            },
            off: {
                type: 'default',
                text: 'Off'
            },
            margin: 10,
            onRender: function () {
                debugger;
            }
        }]
	}]
});
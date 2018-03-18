
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
	
	items: [{
		xtype: 'div',
		appendTo: 'body',
		id: 'cibus-header',
		css: {
			'max-height': '200px',
			height: 200,
			width: '100%',
			overflow: 'hidden',
			position: 'absolute',
			'background-color': '#000',
			'text-align': 'center'
		}
	}, {
		xtype: 'container',
		//Las propiedades del objeto defaults se setean a todos sis hijos
		defaults: {
			// appenTo es donde quiere que el elemento se 'cargue'
			// tambien puedes definir renderTo, este sustitulle lo que haya por el elemento
			// y prependTo, este funciona como appendTo
			// pero en vez de añadir el elemento al final lo añade al principio
			appendTo: 'body'
		},
		//Los items son los elementos hijos (se crean dentro)
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
		}]
	}],
	
	onload: function () {
		cb.magia = 10;
		cb.rcolor = function getRandomColor() {
		  var letters = '0123456789ABCDEF';
		  var color = '#';
		  for (var i = 0; i < 6; i++) {
		    color += letters[Math.floor(Math.random() * 16)];
		  }
		  return color;
		};
		setInterval(function () {
			var n = Math.floor((Math.random() * 10)) - 5;
			cb.magia += n;
			var count = cb.magia;
			var min = 2;
			if(cb.magia < min) {
				cb.magia = min;
			}
			var boton = {
					xtype: 'button',
					text: 'Ci-bus'
			};
			var color = cb.rcolor();
			console.log(color);
			for (var i = count; i > 0; i--) {
				boton = {
					xtype: 'button',
					background: cb.rcolor(),
					padding: '20px 40px',
					items: boton
				}
			}
			
			boton.renderTo = '#cibus-header';
			boton.css = {
				    position: 'absolute',
				    top: '50%',
				    left: '50%',
				    transform: 'translate(-50%, -50%)',
				    '-ms-transform': 'translate(-50%, -50%)',
				    '-webkit-transform': 'translate(-50%, -50%)'    
				};
			cb.create(boton);
			
		}, 100);
	}
});
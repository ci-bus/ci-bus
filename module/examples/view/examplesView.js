
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
	
	items: {
		xtype: 'div',
		appendTo: 'body',
		id: 'capa'
	},
	
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
					xtype: 'button'
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
			
			boton.renderTo = 'body';
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
		$('body').css({
			'background-color': '#000',
			'text-align': 'center'
		});
	}
});
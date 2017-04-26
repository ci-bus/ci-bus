cb.define({

	xtype: 'view',
	name: 'bioculuspro',
	appendTo: '#content',

	items: [{
		xtype: 'button',
		type: 'primary',
		text: 'Esto es un boton primario',
		margin: 10,
		click: function(){
			alert('oks');
		},
		items: [{
			xtype: 'glyphicon',
			type: 'heart',
			margin: '0px 0px 0px 10px'
		}]
	}]
});


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
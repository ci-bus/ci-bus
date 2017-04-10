
cb.define({
	xtype: 'view',
	name: 'base',
	items: [{
		xtype: 'div',
		appendTo: 'body',
		css: {'text-align': 'center', 'background-color': 'black'},
		items: [{
			xtype: 'img',
			src: 'uploads/cabecera.jpg',
			css: {width: '100%', 'max-width': '1200px', margin: 'auto'}
		}]
	},{
		xtype: 'header',
		appendTo: 'body'
	},{
		xtype: 'div',
		appendTo: 'body',
		id: 'content'
	},{
		xtype: 'footer',
		appendTo: 'body'
	}]
});
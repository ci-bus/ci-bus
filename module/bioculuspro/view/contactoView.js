cb.define({

	xtype: 'view',
	name: 'contacto',
	renderTo: '#content',
	
	onload: function(){
		$.cachedScript('https://www.google.com/recaptcha/api.js');
	},

	items: [{
		xtype: 'form',
		name: 'contacto',
		items: [{
			xtype: 'row',
			css: {'max-width': '980px', 'height': 'auto'},
			margin: 'auto',
			items: [{
				xtype: 'col',
				size: {
					md: 2,
					sm: 1
				}
			},{
				xtype: 'col',
				size: {
					sm: 5,
					md: 4
				},
				css: {'margin-top': '50px'},
				items: [{
					xtype: 'h4',
					text:"Nombre"
				},{
					xtype: 'input',
					name: 'nombre'
				}]
			},{
				xtype: 'col',
				size: {
					sm: 5,
					md: 4
				},
				css: {'margin-top': '50px'},
				items: [{
					xtype: 'h4',
					text:"Email"
				},{
					xtype: 'input',
					name: 'email',
					listeners: {
						keyup: function(){
							var t = $(this).val();
							var n1 = cb.strpos(t,'@');
							var n2 = cb.strpos(t,'.');
							if(n1!==false && n2!==false && n1>0 && n2>n1+2 && n2<t.length-2){
								$(this).css('border-color', '#ddd');
							}else{
								$(this).css('border-color', 'red');
							}
						}
					}
				}]
			},{
				xtype: 'col',
				size: {
					md: 2,
					sm: 1
				}
			}]
		},{
			xtype: 'row',
			css: {'max-width': '980px', 'height': 'auto'},
			margin: 'auto',
			items: [{
				xtype: 'col',
				size: {
					md: 2,
					sm: 1
				}
			},{
				xtype: 'col',
				size: {
					sm: 5,
					md: 4
				},
				css: {'margin-top': '50px'},
				items: [{
					xtype: 'h4',
					text:"Teléfono"
				},{
					xtype: 'input',
					name: 'telefono'
				}]
			},{
				xtype: 'col',
				size: {
					sm: 5,
					md: 4
				},
				css: {'margin-top': '50px'},
				id: 'capcha',
				items: {
					xtype: 'div',
					css: {'text-align': 'center'},
					html: '<div class="g-recaptcha" data-sitekey="6Lf8WSMUAAAAAEc5WXOSyLg6zodfwFTGNsQ7ze2-"></div>'
				},
				listeners: {
					mouseleave: function(){
						$('#sendbutton').removeAttr('disabled');
					}
				}
			},{
				xtype: 'col',
				size: {
					md: 2,
					sm: 1
				}
			}]
		},{
			xtype: 'row',
			css: {'max-width': '980px', 'height': 'auto'},
			margin: 'auto',
			items: [{
				xtype: 'col',
				size: {
					md: 2,
					sm: 1
				}
			},{
				xtype: 'col',
				size: {
					sm: 10,
					md: 8
				},
				margin:" 50px 0px 0px 0px",
				items: [{
					xtype: 'h4',
					text:"Mensaje"
				},{
					xtype: 'textarea',
					cls:'form-control',
					attr:{rows: 5},
					width: '100%',
					name: 'mensaje'
				}]
			},{
				xtype: 'col',
				size: {
					md: 2,
					sm: 1
				}
			}]	
		},{
			xtype: 'row',
			css: {'max-width': '980px', 'height': 'auto'},
			margin: 'auto',
			items: [{
				xtype: 'col',
				size: {
					md: 4,
					sm: 1
				}
			},{
				xtype: 'col',
				size: {
					sm: 10,
					md: 4
				},
				margin:" 50px 0px 0px 0px",
				items: [{
					xtype: 'button',
					type: 'primary',
					id: 'sendbutton',
					attr: {disabled: 'disabled'},
					text: 'Enviar',
					margin: '50px 0 100px',
					width: '100%',
					height: '50px',
					click: function(){
						cb.ctr('bioculuspro', 'enviar_mensaje');
					}
				}]
			},{
				xtype: 'col',
				size: {
					md: 4,
					sm: 1
				}
			}]	
		}]
	}]
});

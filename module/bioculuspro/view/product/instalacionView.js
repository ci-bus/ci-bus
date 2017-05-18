cb.define({

	xtype: 'view',
	name: 'instalacion',
	appendTo: '#content',

	items: [{
		xtype: 'row',
		css: {'max-width': '980px'},
		margin: 'auto',
			
		items: [{
			xtype: 'col',
			size: 12,
			text: "Instalación del pinganillo BioculusPro",
			margin: '50px 0px 10px 0px',
			css: {"text-align":"center",'font-size': 32, 'font-weight': 100}

		}]
	},{
		xtype:'row',
		css: {'max-width': '980px'},
		margin: 'auto',
				
		items: [{
			xtype: 'col',
			size: 6,
			
			items: [{
				xtype: 'img',
				src: 'assets/img/figura.png',
				
			}]
		},{
			xtype: 'col',
			size: 6,
			//hacer lista aqui
			items: [{
				xtype: 'div',
				margin:'10%',
				text: "¿Como funciona?",
				css: {"text-align":"center",'font-size': 24},
			},{
				xtype: 'div',
				padding: '0px 10%',
				margin: '10px 0px 0px 0px',
				text: "Espera una llamada entrante y pulsa prolongadamente el Pulsador Beeper, que tendrás en tu pie, para aceptarla. Puedes optar por presionar el Pulsador prolongadamente y llamar al último número marcado.Empezarás a escuchar a tu compañero a través del pinganillo oculto en tu oído. Durante la conversación presiona el Pulsador para enviar zumbidos a tu compañero. Por ejemplo usa: un pitido para decir 'sí'; dos pitidos para decir 'no'; varias pulsaciones rápidas para decir 'dicta más despacio'. Podrás establecer códigos según tus necesidades. Presiona el Pulsador prolongadamente para finalizar la llamada.",
			}]
		}]
	}]
});


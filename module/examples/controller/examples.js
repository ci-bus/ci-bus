cb.define({
	xtype: 'controller',
	name: 'examples',
	
	route: {
		'#aaa': 'routeTest1',
		'#aaa/:num': 'routeTest2',
		'#aaa/:num/:str': 'routeTest3'
	},
	
	routeTest1: function(hash){
		console.log('routeTest1', hash);
		this.showRouteAlert('Executed routeTest1 ' + hash.toString());
	},
	
	routeTest2: function(hash){
		console.log('routeTest2', hash);
		this.showRouteAlert('Executed routeTest2 ' + hash.toString());
	},
	
	routeTest3: function(hash){
		console.log('routeTest3', hash);
		this.showRouteAlert('Executed routeTest3 ' + hash.toString());
	},
	
	showRouteAlert: function (text) {
		cb.getCmp('#hash_console').text(text).show();
	},
	
	onload: function () {
	    
	    // Create store to polyline example
	    cb.define({
            xtype: 'store',
            name: 'example',
            data: {
                a: [15,43,87,18,23,15,24,8]
            }
        });
	    
	    // Load view
		cb.load('view', 'examples', 'examples', function () 
		{
			//Generate header buttons color
			cb.getController('examples').doMagia();
			
			//Do hash change when view is loaded
			cb.router.hashchange();
		});
	},
	
	doMagia: function () {
		var n = Math.floor((Math.random() * 10)) - 5;
		cb.magia += n;
		var min = 2;
		if(cb.magia < min) {
			cb.magia = min;
		}
		var boton = {
			xtype: 'button',
			text: 'Ci-bus Framework'
		};
		var color = cb.rcolor();
		for (var i = cb.magia; i > 0; i--) {
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
	}
});

cb.magia = 10;
cb.rcolor = function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
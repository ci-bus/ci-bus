cb.define({
	xtype: 'controller',
	name: 'examples',
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
		cb.load('view', 'examples', 'examples', function () {
			cb.getController('examples').doMagia();
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
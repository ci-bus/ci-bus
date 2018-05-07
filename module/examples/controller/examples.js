cb.define({
	xtype: 'controller',
	name: 'examples',
	onload: function () {
		cb.load('view', 'examples', 'examples', function () {
			cb.getController('examples').doMagia();
			setTimeout(function () {
				if (cb.magiaInterval) {
					clearInterval(cb.magiaInterval);
					cb.magiaInterval = null;
				}
			}, 2000);
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
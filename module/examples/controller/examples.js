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
		cb.scrollTo('#hash_console');
	},
	
	onload: function () {
	    
	    // Create store to polyline example
	    cb.define({
            xtype: 'store',
            name: 'example',
            data: {
                a: [15,43,87,18,23,15,24,50],
                grid: [{
                	name: 'Miguel',
                	info: 'Root',
                	date: '2018-05-01'
                }, {
                	name: 'Miguel',
                	info: 'Root',
                	date: '2018-05-06'
                }, {
                	name: 'Jimena',
                	info: 'Admin',
                	date: '2018-05-06'
                }, {
                	name: 'Daniel',
                	info: 'User',
                	date: '2018-05-03'
                }, {
                	name: 'Javier',
                	info: 'User',
                	date: '2018-05-04'
                }],
                like: {
                    hand1_color: 'gray',
                    hand2_color: 'gray',
                    review_pos: false,
                    review_cos: false
                }
            }
        });
	    
	    cb.loadAll([
	        ['component', 'examples', 'like'],
	        ['view', 'examples', 'examples']
	    ], function () 
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
			items: [{
			    xtype: 'img',
			    src: './assets/img/cb_logo.png',
			    width: 64
			}, {
			    xtype: 'span',
			    text: ' Ci-bus Framework'
			}]
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
	},
	
	like: function(bot){
        if(!$(bot).hasClass('gray'))
        {
            var type = $(bot).parent().parent().attr('data');
            var id = $(bot).closest('.panel').attr('data-id');
            var review = $(bot).parent().find('.review').text();
            var currentreview = $(bot).parent().attr('currentreview');
            var val = 0;
            
            if($(bot).hasClass('glyphicon-thumbs-down'))
            {
                val = -1;
                review--;
                if($(bot).parent().find('.glyphicon-thumbs-up').hasClass('gray')){
                    review--;
                }
                $(bot).parent().find('.glyphicon-thumbs-up').addClass('green').removeClass('gray');
            }
            else if($(bot).hasClass('glyphicon-thumbs-up'))
            {
                val = 1;
                review++;
                if($(bot).parent().find('.glyphicon-thumbs-down').hasClass('gray')){
                    review++;
                }
                $(bot).parent().find('.glyphicon-thumbs-down').addClass('red').removeClass('gray');
            }
            $(bot).parent().find('.review').text(review);
            $(bot).animate({'zoom': 2, 'scale': 2, 'margin-top': '-10px'}, 'fast');
            
            //cb.load('store', 'examples', 'review', {action: 'send', value: val, type: type, id: id}, function(res){
                $(bot).removeClass('green').removeClass('red').addClass('gray').animate({'zoom': 1, 'scale': 1, 'margin-top': '5px'}, 'fast');
            //});
        }
    },
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
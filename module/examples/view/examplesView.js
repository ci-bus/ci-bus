
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
	renderTo: 'body',
	
	items: [{
		xtype: 'div',
		id: 'cibus-header',
		css: {
			'max-height': '200px',
			height: 200,
			width: '100%',
			overflow: 'hidden',
			position: 'absolute',
			'background-color': '#000',
			'text-align': 'center',
			top: 0
		},
		click: function () {
		    cb.ctr('examples', 'doMagia');
		}
	}, {
		xtype: 'container',
		css: {'margin-top': '200px'},
		items: [{
			xtype: 'h3',
			text: '...Callout'
		}, {
			xtype: 'callout',
			type: 'warning',
			margin: 10,
			title: 'Bienvenido a ci-bus',
			text: 'This is a descirption of callout'
		}, {
			xtype: 'h3',
			text: '...Group of buttons',
		}, {
			xtype: 'group',
			size: 'md',
			margin: 10,
			//type: 'vertical',
			defaults: {
				margin: 0
			},
			items: [{
				xtype: 'button',
				text: 'button 1',
				id: 'test'
			}, {
				xtype: 'button',
				text: 'button 2'
			}, {
				xtype: 'button',
				text: 'button 3'
			}, {
				xtype: 'dropdown',
				text: 'DropDown 1 ',
				id: 'exp-dropdown-1',
				size: 'md',
				items: [{
					xtype: 'a',
					text: 'Link 1'
				}, {
					xtype: 'a',
					text: 'Link 2'
				}],
				changeItems: function () {
					cb.sto(function () {
		            	cb.getCmp('#exp-dropdown-1').open();
		            }, 50);
				},
				loadItems: function () {
					// First load
				}
			}]
		}, {
		    xtype: 'container',
		    items: [{
		        xtype: 'button',
		        text: 'Add option to DropDown 1',
		        click: function () {
		            cb.getCmp('#exp-dropdown-1').addItems([{
		                text: 'Added option'
		            }]);
		        }
		    }, {
                xtype: 'button',
                text: 'Remove first and last option',
                click: function () {
                    cb.getCmp('#exp-dropdown-1').removeItems([0, -1]);
                }
            }, {
                xtype: 'button',
                text: 'Replace options',
                click: function () {
                    cb.getCmp('#exp-dropdown-1').replaceItems([{
                        text: 'Link 1'
                    }, {
                        text: 'Link 2'
                    }]);
                }
            }]
		}, {
			
		}, {
			xtype: 'h3',
			text: '...Panel',
		}, {
			xtype: 'panel',
			type: 'info',
			margin: 10,
			items: [{
				xtype: 'head',
				title: 'Head panel'
			}, {
				xtype: 'body',
				text: 'Body panel'
			}, {
				xtype: 'footer',
				text: 'Footer panel'
			}]
		}, {
			xtype: 'h3',
			text: '...Tabpanel'
		}, {
			xtype: 'tabpanel',
			margin: 10,
			items: [{
				id: 'home2',
				active: true,
				tab: {
					text: 'Tab button 1'
				},
				panel: {
					xtype: 'container',
					type: 'fluid',
					html: 'Texto panel 1',
					css: {
						padding: 10
					}
				}
			}, {
				id: 'profile2',
				tab: {
					text: 'Tab button 2'
				},
				panel: {
					xtype: 'container',
					type: 'fluid',
					html: 'Texto panel 2',
                    css: {
                        padding: 10
                    }
				}
			}, {
				tab: {
					xtype: 'dropdown',
					id: 'opciones2',
					text: 'Tab button 3',
					items: [{
						ref: 'inde-panel',
						text: 'Link 1'
					}, {
						xtype: 'separator'	
					}, {
						ref: 'inde-panel2',
						text: 'Link 2'
					}]
				},
				panel: [{
					id: 'inde-panel',
					xtype: 'container',
					type: 'fluid',
					html: 'Other panel',
                    css: {
                        padding: 10
                    }
				}, {
					id: 'inde-panel2',
					xtype: 'container',
					type: 'fluid',
					html: 'Other panel 2',
                    css: {
                        padding: 10
                    }
				}]
			}]
		}, {
			xtype: 'h3',
			text: '...Table'
		}, {
			xtype: 'table',
			width: 'calc(100% - 20px)',
			margin: 10,
			items: [{
				xtype: 'head',
				items: [{
					text: '#'
				}, {
					text: 'Name'
				}, {
					text: 'Type'
				}]
			}, {
				xtype: 'body',
				items: [{
					scope: 'row',
					text: '1'
				}, {
					text: 'Miguel'
				}, {
					text: 'root'
				}]
			}]
		}, {
			xtype: 'h3',
			text: '...Progress'
		}, {
			xtype: 'progress',
			margin: 10,
			items: [{
				striped: true,
				animated: true,
				min: 0,
				max: 100,
				value: 50
			}, {
				type: 'danger',
				min: 0,
				max: 100,
				value: 3
			}]
		}, {
			xtype: 'h3',
			text: '...Ico'
		}, {
			xtype: 'ico',
			type: 'glyphicon glyphicon-search',
			margin: 10
		}, {
			xtype: 'h3',
			text: '...Glyphicon'
		}, {
			xtype: 'glyphicon',
			type: 'search',
			margin: 10
		}, {
			xtype: 'h3',
			text: '...Thumbnail'
		}, {
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
		}, {
			xtype: 'h3',
			text: '...Alert'
		}, {
			xtype: 'alert',
			text: 'This is a alert!',
			margin: '10px'
		}, {
			xtype: 'h3',
			text: '...Badge'
		}, {
			xtype: 'badge',
			text: 'This is a badge',
			margin: '10px',
			padding: 5
		}, {
			xtype: 'h3',
			text: '...Row with 2 columns'
		}, {
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
			}, {
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
		}, {
			xtype: 'h3',
			text: '...Input'
		}, {
			xtype: 'input',
			type: 'text',
			width: 'calc(100% - 20px)',
			margin: 10,
			text: 'Input to example'
		}, {
			xtype: 'h3',
			text: '...Input select'
		}, {
			xtype: 'select',
			width: 'calc(100% - 20px)',
			margin: 10,
			items: [{
				xtype: 'option',
				value: 1,
				text: 'one'
			}, {
				xtype: 'option',
				value: 2,
				text: 'two'
			}]
		}, {
			xtype: 'h3',
			text: '...Label'
		}, {
			xtype: 'label',
			type: 'primary',
			margin: 10,
			text: 'Label to test'
		}, {
            xtype: 'h3',
            text: '...Toggle'
        }, {
            xtype: 'toggle',
            margin: 10,
            on: {
                type: 'primary',
                text: 'On'
            },
            off: {
                type: 'default',
                text: 'Off'
            },
            onRender: function (el) {
            	$(el).bootstrapToggle('on');
            }
        }, {
            xtype: 'h3',
            text: '...Polyline with storelink'
        }, {
            xtype: 'svg',
            width: 300,
            height: 200,
            margin: 10,
            border: '1px solid #AAA',
            items: [{
                xtype: 'polyline',
                store: 'example',
                field: 'a',
                storelink: true,
                'stroke-width': 1,
                color: '#AAA',
                width: 300,
                height: 200,
                fill: '#CCC',
                pointMax: 100,
                pointMin: 0
            }]
        }, {
            xtype: 'container',
            text: '<strong>Testing storelink </strong>',
            defaults: {
                xtype: 'button',
                margin: '0 10px 10px 0'
            },
            items: [{
                text: 'Order ASC',
                click: function(){
                    cb.getStore('example').sort('a', 'asc');
                }
            }, {
                text: 'Order DESC',
                click: function(){
                    cb.getStore('example').sort('a', 'desc');
                }
            }, {
                text: 'Reset order',
                click: function(){
                    cb.getStore('example').restore('a');
                }
            }, {
                text: 'Generate',
                click: function(){
                    if(!cb.aniline){
                        cb.aniline = setInterval(function(){
                            var ran = Math.floor((Math.random() * 100) + 1);
                            var data = cb.getStore('example', 'a');
                            data.push(ran);
                            data.shift();
                            cb.getStore('example').setData(data, 'a');
                        }, 100);
                        var butt = this;
                        cb.getCmp(this).html('<strong>Stop</strong>');
                    } else {
                        clearInterval(cb.aniline);
                        cb.aniline = false;
                        cb.getCmp(this).html('Generate');
                    }
                }
            }]
        }, {
        	xtype: 'h3',
            text: '...Route'
        }, {
        	xtype: 'container',
        	css: {
        		'margin-bottom': 10
        	},
        	defaults: {
        		margin: '0 10px'
        	},
        	items: [{
        		xtype: 'a',
        		href: '#aaa',
        		text: 'Route test 1'
        	}, {
        		xtype: 'a',
        		href: '#aaa/57',
        		text: 'Route test 2'
        	}, {
        		xtype: 'a',
        		href: '#aaa/57/test',
        		text: 'Route test 3'
        	}]
        }, {
        	xtype: 'alert',
        	id: 'hash_console',
        	hidden: true
        }, {
        	xtype: 'h3',
            text: '...Grid with storelink'
        }, {
        	xtype: 'grid',
        	type: 'primary',
        	id: 'gridexa',
        	store: 'example',
        	field: 'grid',
        	storelink: true,
        	alterdata: {
        		'date': function (date) {
        			var d = new Date(date);
        			return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
        		}
        	},
        	columns: [{
        		text: 'Name',
        		field: 'name'
        	}, {
        		text: 'Info',
        		field: 'info'
        	}, {
        		text: 'Date',
        		field: 'date'
        	}],
        	margin: 10,
        	
        	head: {
        		items: [{
	        		cls: 'panel-title',
	        		text: 'Grid example'
	        	}, {
	        		xtype: 'button',
	        		text: 'Add column name',
	        		css: {
	        			'margin-left': 10
	        		},
	        		click: function () {
	        			cb.getCmp('#gridexa').addColumns({
	                		text: 'Name',
	                		field: 'name'
	                	});
	        		}
	        	}, {
	        		xtype: 'button',
	        		text: 'Remove first column',
	        		click: function () {
	        			cb.getCmp('#gridexa').removeColumn(0);
	        		}
	        	}]
        	},
        	
        	body: {
        		css: {
        			overflow: 'auto'
        		},
        		table: {
        			css: {
        				'border': '1px solid #DDD',
                		'border-bottom': '1px solid #DDD'
        			},
        			beforeItems: {
                		xtype: 'div',
                		text: 'Item text before',
                		padding: 5,
                		background: '#f2f5f7'
                	},
                	afterItems: {
                		xtype: 'div',
                		text: 'Item text after',
                		padding: 5,
                		background: '#fafafa'
                	}
        		}
        	},
        	
        	footer: {
        		items: [{
            		xtype: 'button',
            		text: 'Add two rows',
            		click: function () {
            		    var grid = cb.getCmp(this).up('grid');
                        grid.addRows([{
            				name: 'Antonio',
                        	info: 'User',
                        	date: '2018-05-05'
                    	}, {
                    		name: 'Juan',
                        	info: 'User',
                        	date: '2018-05-06'
                    	}]);
                        if (grid.getStore().getFilters(grid.getOpt('field'))) {
                            alert('Filtering, remove filters to show changes');
                        }
            		}
            	}, {
            		xtype: 'button',
            		text: 'Add row first position',
            		click: function () {
            		    var grid = cb.getCmp(this).up('grid');
            		    grid.addRows({
            				name: 'Sergio',
                        	info: 'User',
                        	date: '2018-05-07'
                    	}, 0);
            			if (grid.getStore().getFilters(grid.getOpt('field'))) {
            			    alert('Filtering, remove filters to show changes');
            			}
            		}
            	}, {
            		xtype: 'button',
            		text: 'Remove first row',
            		click: function () {
            		    var grid = cb.getCmp(this).up('grid');
                        grid.removeRow(0);
                        if (grid.getStore().getFilters(grid.getOpt('field'))) {
                            alert('Filtering, remove filters to show changes');
                        }
            		}
            	}]
        	}
        }, {
            xtype: 'container',
            text: '<strong>Testing storelink </strong>',
            defaults: {
                xtype: 'button',
                margin: '0 10px 10px 0'
            },
            items: [{
                text: 'Filter name Miguel',
                click: function () {
                    // TODO in process
                    cb.getCmp('#gridexa').getStore().addFilter(function (r) {
                        if (r.name == 'Miguel') {
                            return true;
                        } else {
                            return false;
                        }
                    }, 'grid');
                    cb.setValue(this, '<b>Filtering</b>');
                }
            }, {
                text: 'Filter date 2018-05-06',
                click: function () {
                    // TODO in process
                    cb.getCmp('#gridexa').getStore().addFilter(function (r) {
                        if (r.date == '2018-05-06') {
                            return true;
                        } else {
                            return false;
                        }
                    }, 'grid');
                    cb.setValue(this, '<b>Filtering</b>');
                }
            }, {
                text: 'Remove filters',
                click: function () {
                	cb.getCmp('#gridexa').getStore().removeAllFilters('grid');
                	cb.setValue(cb.getCmp(this).prev(), 'Filter date 2018-05-06');
                    cb.setValue(cb.getCmp(this).prev().prev(), 'Filter name Miguel');
                }
            }]
        }, {
            xtype: 'h3',
            text: '...Custom component'
        }, {
            xtype: 'review',
            store: 'example',
            field: 'like'
        }]
	}]
});
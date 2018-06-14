/*
 * Este archivo es la base de Ci-bus
 * ---------------------------------
 * Ci-bus es un proyecto personal el cual hace de pegamento entre jQuery y bootstrap
 * creando elementos html en base a definiciones en objetos javascript
 * pero la cosa no queda ahí, también cuenta con todo lo necesatio para crear
 * una página web o applicación con las más novedosas técnicas de programación
 * 
 * Creado por: Miguel Ángel Calero Ponce
 * Email: miguelelinventor@gmail.com
 * Tlf: +34 722-128-106
 * 
 */

// Compatibilidad
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement) {
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // para verificar si es NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }
}


// [ INICIO DE CI-BUS ]// 

var cb = {};
cb.module = {};
cb.base = {};
cb.module.controller = {};
cb.module.view = {};
cb.module.store = {};
cb.module.component = {};
cb.module.model = {};
cb.module.parseData = {};
cb.module.storelink = {};
cb.config = [];
cb.elenamed = 0;
cb.eleids = 0;

// Por defecto cuando un record es un array
// se crea un elemento por cada valor
// añadiendo el xtype a este array lo evitamos
cb.eleAceptArrayRecord = ['polyline', 'tbody', 'grid'];
// Al crear un elemento si tiene field definido
// pero el store no tiene valor no se crea
// añadiendo el xtype a este array lo evitamos
cb.eleCreateWithoutRecord = ['td', 'tr', 'th'];

// El route te permine ejecutar una funcion de un controlador visitando un hash #ejemplo
cb.router = {
	routes: {},
	set: function(hash, ctr, fun) {
		if ($.type(hash) === 'string' && $.type(ctr) === 'string' && $.type(fun) === 'string') {
			this.routes[hash] = {
				ctr: ctr,
				fun: fun
			};
			return true;
		}
		return false;
	},
	get: function(hash) {
		if (this.routes[hash]) {
			return this.routes[hash];
		}
		return null;
	},
	getCtr: function(hash) {
		if (this.routes[hash] && this.routes[hash].ctr) {
			return this.routes[hash].ctr;
		}
		return null;
	},
	doFun: function(hash, hashpart) {
		var rt = this.get(hash);
		if (rt && cb.module.controller[rt.ctr]) {
			if ($.isFunction(cb.module.controller[rt.ctr][rt.fun])) {
				if ($.isFunction(cb.module.controller[rt.ctr][rt.fun])) {
					cb.module.controller[rt.ctr][rt.fun](hashpart);
				}
			}
		}
		return null;
	},
	route: function(hash) {
		var hashpart = hash.split('/');
		var hashend = hashpart[0];
		for (var i=1; i<hashpart.length; i++) {
			if ($.isNumeric(hashpart[i])) {
				hashend = hashend + '/:num';
				hashpart[i] = parseInt(hashpart[i]);
			}else if ($.type(hashpart[i]) === 'string' && hashpart[i] != "") {
				hashend = hashend + '/:str';
			}else if (hashpart[i] == "") {
				hashpart.splice(i, 1);
			}
		}
		this.doFun(hashend, hashpart);
	},
	hashchange: function() {
		if (top.window.location.hash) {
			this.route(top.window.location.hash);
		}
	},
	listener: addEventListener('hashchange', function() { cb.router.hashchange(); }, false)
};

// Funciones base para los store javascript
// TODO Re-do sort function
cb.base.store = {
	datarestore: null,
	data: null,
	filters: [],
	
	restore: function(field)
	{
		if (typeof field === 'string' && this.getRestoreData(field)) {
			this.setData(this.getRestoreData(field), field);
			cb.deleteToObject(this.datarestore, field);
		}else if (!field && this.datarestore) {
			this.setData(this.datarestore);
			cb.deleteToObject(this.datarestore);
		}
	},
	
	restoreWithoutStorelink: function (field) {
		if (typeof field === 'string' && this.getRestoreData(field)) {
			this.data = cb.clone(cb.putToObject(this.data, this.getRestoreData(field), field));
			cb.deleteToObject(this.datarestore, field);
		}else if (!field && this.datarestore) {
			this.data = cb.clone(this.datarestore);
			cb.deleteToObject(this.datarestore);
		}
	},
	
	setRestoreData: function(data, field) {
		if (typeof field == 'string') {
			this.datarestore = cb.clone(cb.putToObject(this.datarestore, data, field));
		} else {
		    this.datarestore = cb.clone(data);
		}
	},
	
	getRestoreData: function(field)
	{
		if (typeof field == 'string') {
		    return cb.fetchFromObject(this.datarestore, field);
		} else {
			return this.datarestore;
		}
	},
	
	getData: function(field)
	{
		if (typeof field == 'string') {
			return cb.fetchFromObject(this.data, field);
		}else{
			return this.data;
		}
		return null;
	},
	
	setData: function(data, field)
	{
        if (typeof field == 'string') {
        	this.data = cb.clone(cb.putToObject(this.data, data, field));
        } else {
            this.data = cb.clone(data);
        }
        // Do storelinks
        this.storelink(field);
	},
	
	removeData: function (pos, field) {
	    if ($.isNumeric(pos)) {
	        // Get data
	        if (this.getRestoreData(field)) {
	            var newData = this.getRestoreData(field);
	        } else {
	            var newData = this.getData(field);
	            // Set restore data
	            this.setRestoreData(newData, field);
	        }
	        
	        // Remove data
	        if ($.isArray(newData)) {
	            newData.splice(pos, 1);
	        }
	        
	        if (this.getFilters(field)) {
                // Apply filters and set data after
                this.applyFilters(field);
            } else {
                // Set new data
                this.setData(newData, field);
            }
	    }
	},
	
	addData: function (data, field, pos)
	{
		if (data !== undefined) {
		    
		    // Get data
	        if (this.getRestoreData(field)) {
	            var newData = this.getRestoreData(field);
	        } else {
	            var newData = this.getData(field);
	            // Set restore data
	            this.setRestoreData(newData, field);
	        }
	        
	        if ($.isPlainObject(data) && $.isPlainObject(newData))
	        {
	        	// Add new data
	        	$.each(data, function (key, val) {
	        		newData[key] = val;
	            });
	        }
	        else
	        {
	        	// Secure array type
		        if (!$.isArray(newData)) {
	                newData = [newData];
	            }
		        
		        // Add new data
		        if (typeof field == 'string')
		        {
		        	if ($.isNumeric(pos)) {
		        	    if ($.isArray(data)) {
		        	        for (var r = data.length; r >= 0; r --) {
		        	            newData.splice(pos, 0, data[r]);
		        	        }
		        	    } else {
		        	        newData.splice(pos, 0, data);
		        	    }
		        	} else {
		        	    if ($.isArray(data)) {
		        	        $.merge(newData, data);
		        	    } else {
		        	        newData.push(data);
		        	    }
		        	}
		        }
		        else
		        {
		        	if ($.isNumeric(pos)) {
		        	    newData.splice(pos, 0, data);
		        	} else {
		        	    newData.push(data);
		        	}
		        }
	        }
	        
	        // Save restore data
	        this.setRestoreData(newData, field);
	        
	        if (this.getFilters(field)) {
	            // Apply filters and set data after
	            this.applyFilters(field);
	        } else {
	            // Set new data
	            this.setData(newData, field);
	        }
	    }
	},
	
	extendData: function(data, field)
	{
	    if (data !== undefined) {
	        if (typeof field == 'string') {
	        	var newData = this.getData(field);
	        	$.extend(newData, data);
	            this.setData(newData, field);
	        } else {
	        	$.extend(this.data, data);
	        }
	        this.storelink(field);
	    }
	},
	
	mergeData: function(data, field)
	{
	    if (data !== undefined) {
	        if (typeof field == 'string') {
	        	var newData = this.getData(field);
	        	$.merge(newData, data);
	            this.setData(newData, field);
	        } else {
	        	$.merge(this.data, data);
	        }
	        this.storelink(field);
	    }
	},
	
	storelink: function(field)
	{
		if ($.isArray(cb.module.storelink[this.name])) {
			var strlk = cb.module.storelink[this.name];
			for (var i=0; i<strlk.length; i++) {
				var ele = cb.getCmp('#'+strlk[i].ele);
				if (!field) {
				    if (ele.getOpt().field) {
	                    var record = cb.fetchFromObject(this.getData(), ele.getOpt().field);
	                    ele.setData(record);
	                } else {
	                    ele.setData(this.getData());
	                }
				} else {
				    if (ele.getOpt().field == field) {
                        var record = cb.fetchFromObject(this.getData(), ele.getOpt().field);
                        ele.setData(record);
                    }
				}
			}
		}
	},
	
	getName: function()
	{
		return this.name;
	},
	
	sort: function(data, fun)
	{
		if ($.isFunction(data))
		{
			if ($.isFunction(this.data.sort)) {
				this.data.sort(data);
			}
		}
		else if (typeof data === 'string' && $.isFunction(fun))
		{
			if ($.isFunction(cb.fetchFromObject(this.data, data).sort)) {
				if (!this.getRestoreData(data)) {
					this.setRestoreData(this.getData(data), data);
				}
				if ($.isFunction(cb.fetchFromObject(this.data, data).sort)) {
					cb.fetchFromObject(this.data, data).sort(fun);
				}
			}
		}else if (typeof data === 'string' && typeof fun === 'string') {
			data = { data: data, order: fun };
		}
		if ($.isPlainObject(data)) {
			if (typeof data.data === 'string') {
				if (typeof data.order === 'string' && typeof data.field === 'string') {
					if ($.isFunction(cb.fetchFromObject(this.data, data).sort)) {
						if (!this.getRestoreData(data.data)) {
							this.setRestoreData(this.getData(data.data), data.data);
						}
						cb.fetchFromObject(this.data, data.data).sort(function(a, b) {
							if (data.order == 'desc' || data.order == 'DESC') {
								return b[data.field] - a[data.field];
							}else{
								return a[data.field] - b[data.field];
							}
						});
					}
				}else if (typeof data.order === 'string') {
					if ($.isFunction(cb.fetchFromObject(this.data, data.data).sort)) {
						if (!this.getRestoreData(data.data)) {
							this.setRestoreData(this.getData(data.data), data.data);
						}
						cb.fetchFromObject(this.data, data.data).sort(function(a, b) {
							if (data.order == 'desc' || data.order == 'DESC') {
								return b - a;
							}else{
								return a - b;
							}
						});
					}
				}
			}
		}
		this.storelink();
	},
	
	getFilters: function (field) {
	    var resf = [];
	    for (var i = 0; i < this.filters.length; i ++) {
            if (!field || this.filters[i].field == field) {
                resf.push(this.filters[i]);
            }
        }
	    return resf.length? resf: null;
	},
	
	applyFilters: function (field) {
		// Get data
	    if (this.getRestoreData(field)) {
            var data = this.getRestoreData(field);
        } else {
        	var data = this.getData(field);
        	// Set restore data
	        this.setRestoreData(data, field);
        }
	    // Apply filters to data
	    var filters = this.getFilters(field);
	    if (filters) {
	        for (var i = 0; i < filters.length; i ++) {
	            data = this.filter(data, filters[i].fun, filters[i].field);
	        }
	    }
        // Set filtered data
		this.setData(data, field);
	},
	
	filter: function (data, fun, field) {        
		if ($.isArray(data)) {
	        // Filter data
			var filtered_data = [];
			for (var i = 0; i < data.length; i ++) {
				if (fun(data[i])) {
					filtered_data.push(data[i]);
				}
			}
			return filtered_data;
		}
		return data;
	},
	
	addFilter: function (fun, field) {
		// Add filter
		this.filters.push({
			fun: fun,
			field: field
		});
		// Apply filters
		this.applyFilters(field);
		// Return array position
		return (this.filters.length -1);
	},
	
	removeFilter: function (pos) {
		if (this.filters[pos]) {
			// Get field
			var field = this.filters[pos].field;
			// Remove filter by array position
			this.filters.splice(pos, 1);
			// Apply filters
			this.applyFilters(field);
		}
	},
	
	removeAllFilters: function (field) {
		if (field) {
			var i = 0;
			while (i < this.filters.length) {
				if (this.filters[i].field == field) {
					this.removeFilter(i);
				} else {
					i ++;
				}
			}
		} else {
			// Remove all filters
			this.filters = [];
		}
		// Apply filters
		this.applyFilters(field);
	}
};

// Funciones base para todos los elementos
cb.base.element = {
	getType: function() {
		return this.opt.xtype;
	},
	getRecord: function() {
		return this.opt.record? this.opt.record: this.record? this.record: false;
	},
	getValue: function() {
		return this.val()? this.val(): this.getRecord();
	},
	getOpt: function(dt) {
		if (this.component) {
			if (this.opt) {
				var res = $.extend(this.component, this.opt);
			}else{
				var res = this.component
			}
		} else var res = this.opt? this.opt: false;
		
		return dt? res[dt]: res;
	},
	setRecord: function (record) {
		if (this.opt) {
			this.opt.record = record;
		}
		this.record = record;
		return this;
	},
	getStore: function () {
		return this.getOpt().store? cb.getStore(this.getOpt().store): false;
	},
	down: function (id, pos) {
		if (!pos) pos = 0;
	    if (typeof id == 'string') {
	        // Search by css selector
	        if (id.substr(0, 1) == '#' || id.substr(0, 1) == '.') {
	            if (cb.isNode(this.find(id)[pos])) {
	                return cb.getCmp(this.find(id)[pos]);
	            }
	        } else { // Search by xtype
	            var childs = this.find('*');
	            var count = 0;
	            for (var i = 0; i < childs.length; i ++) {
	                if (cb.isNode(childs[i]) && cb.getCmp(childs[i]).getOpt) {
	                    if (cb.getCmp(childs[i]).getOpt().xtype == id) {
	                        if (pos == count) {
	                            return cb.getCmp(childs[i]);
	                        } else {
	                            count ++;
	                        }
	                    }
	                }
	            }
	        }
	    } else if ($.isNumeric(id)) {
	        return this.children()[id]? cb.getCmp(this.children()[id]): null;
	    }
	    return null;
	},
	up: function (id, pos) {
	    if (!pos) pos = 0;
	    if (typeof id == 'string') {
	        // Search by css selector
	        if (id.substr(0, 1) == '#' || id.substr(0, 1) == '.') {
	            if (cb.isNode(this.parents(id)[pos])) {
	                return cb.getCmp(this.parents(id)[pos]);
	            }
	        } else { // Search by xtype
	            var parents = this.parents();
	            var count = 0;
	            for (var i = 0; i < parents.length; i ++) {
	                if (cb.isNode(parents[i]) && cb.getCmp(parents[i]).getOpt) {
	                    if (cb.getCmp(parents[i]).getOpt().xtype == id) {
	                        if (pos == count) {
	                            return cb.getCmp(parents[i]);
	                        } else {
	                            count ++;
	                        }
	                    }
	                }
	            }
	        }
	    } else if (!id) {
	        return cb.getCmp(this.parent());
	    }
        return null;
	}
};

// Funciones base para los polyline
cb.base.polyline = {
	setData: function(record) {
		if ($.isArray(record)) {
			var opt = this.getOpt();
			opt.xspace   = parseInt(opt.width) / (record.length - 1);
            if (opt.pointMax == undefined) opt.pointMax = Math.max.apply(null, record);
            if (opt.pointMin == undefined) opt.pointMin = Math.min.apply(null, record);
            var xwrite = 0;
            var ywrite = 0;
            var points = "0,"+parseInt(opt.height);
            for (var i=0; i<record.length; i++) {
                ywrite = parseInt(opt.height) - ((record[i]-opt.pointMin) * parseInt(opt.height) / (opt.pointMax-opt.pointMin));
                points += " "+xwrite+","+ywrite;
                xwrite = Math.round(xwrite + opt.xspace);
            }
            points += " "+parseInt(opt.width)+","+parseInt(opt.height);
		}
		this.removeAttr('points').attr({ points: points });
		opt.record = record;
	}
};

// Funciones base para los dropdown y dropup
cb.base.dropdown = {
	addItems: function(items, record, event) {
		if (!event) {
			event = 'changeItems';
		}
		if (items) {
			var eleCmp = cb.getCmp($.isArray(this)? this[0]: this);
			var ul = eleCmp.find('ul:first');
			if (!record) {
			    record = false;
			}
			if (!$.isArray(items))
			{
				items = [items];
			}
			for (var a=0;a<items.length;a++)
			{
				var li = document.createElement('li');
				if (items[a].xtype == 'separator' || items[a].xtype == 'divider')
				{
					li = cb.common_prop(li, {
						cls: 'divider',
						attr: {'role':'separator'}});
					li = cb.common_prop(li, items[a]);
				}
				else if (items[a].xtype == 'dropdown-header' || items[a].xtype == 'header')
				{
					items[a].cls? items[a].cls = 'dropdown-header '+items[a].cls : items[a].cls = 'dropdown-header';
					li = cb.common_prop(li, items[a]);
				}
				else
				{
					if (items[a].xtype == 'li') {
						li = cb.create(items[a], record);
					} else {
						if (!items[a].xtype) {
							items[a].xtype = 'a';
						}
						oli = {xtype: 'li'};
						if (items[a].store) {
							oli.store = items[a].store;
							delete items[a].store;
						}
						
						oli.items = items[a];
						li = cb.create(oli, record);
					}
				}
				$(ul).append(li);
			}
		}
		if ($.isFunction(this[event])) {
			this[event]();
		}
		return this;
	},
	removeItems: function (items, event) {
		if (!event) {
			event = 'changeItems';
		}
	    var eleCmp = cb.getCmp($.isArray(this)? this[0]: this);
        var ul = eleCmp.find('ul:first');
        var lis = ul.children();
	    if (items) {
            var toRemove = [];
            if (!$.isArray(items))
            {
                items = [items];
            }
            for (var a=0;a<items.length;a++)
            {
                if ($.isNumeric(items[a])) {
                    if (items[a] < 0) {
                        items[a] = lis.length + items[a];
                    }
                    if (lis[items[a]]) {
                        toRemove.push(lis[items[a]]);
                    }
                } else {
                    if (ul.find(items[a])[0]) {
                        toRemove.push(ul.find(items[a])[0])
                    }
                }
            }
            for (var a=0;a<toRemove.length;a++)
            {
                if ($.isFunction(toRemove[a].remove)) {
                    toRemove[a].remove();
                }
            }
	    } else {
	        ul.children().remove();
	    }
	    if ($.isFunction(this[event])) {
			this[event]();
		}
	    return this;
	},
	replaceItems: function (items, record, event) {
	    this.removeItems();
	    this.addItems(items, record, event);
	    return this;
	},
	open: function () {
		var eleCmp = cb.getCmp($.isArray(this)? this[0]: this);
        var button = eleCmp.find('button:first');
        if (button.attr('aria-expanded') == 'false') {
        	eleCmp.addClass('open');
        	button.attr('aria-expanded', 'true');
        }
        return this;
	},
	close: function () {
		var eleCmp = cb.getCmp($.isArray(this)? this[0]: this);
        var button = eleCmp.find('button:first');
        if (button.attr('aria-expanded') == 'true') {
        	eleCmp.removeClass('open');
        	button.attr('aria-expanded', false);
        }
        return this;
	}
};
cb.base.dropup = cb.base.dropdown;

// Funciones base para los grid
cb.base.grid = {
	addColumns: function (cols, pos) {
		var record = this.getRecord();
		if (cols) {
			if (!$.isArray(cols)) {
				cols = [cols];
			}
			if ($.isNumeric(pos)) {
				cols.reverse();
			}
			for (var i = 0; i < cols.length; i++) {
				var col = cols[i];
				if ($.isNumeric(pos)) {
					this.opt.columns.splice(pos, 0, cb.clone(col));
				} else {
					this.opt.columns.push(cb.clone(col));
				}
				if (col.text) {
					var th = cb.create({
						xtype: 'th',
						text: col.name
					});
					if ($.isNumeric(pos)) {
						this.find('thead').find('tr').find('th:eq(' + pos + ')').before(th);
					} else {
						this.find('thead').find('tr').append(th);
					}
					delete col.name;
				}
				if (record) {
					if (!$.isArray(record)) {
						record = [record];
					}
					col.xtype = 'td';
					for (var r = 0; r < record.length; r ++) {
						var td = cb.create(cb.clone(col), record[r]);
						if ($.isNumeric(pos)) {
							this.find('tbody').find('tr:eq(' + r + ')').find('th:eq(' + pos + ')').before(td);
						} else {
							this.find('tbody').find('tr:eq(' + r + ')').append(td);
						}
					}
				}
			}
		}
	},
	
	removeColumn: function (pos) {
		if ($.isNumeric(pos) && pos >= 0) {
			this.opt.columns.splice(pos, 1);
			this.find('thead').find('tr').find('th:eq(' + pos + ')').remove();
			this.find('tbody').find('tr').find(':eq(' + pos + ')').remove();
		}
	},
	
	addRows: function (record, pos, noSync) {
		if (!pos || pos >= 0) {
			// Save new record
		    if (this.getOpt().storelink && noSync !== true)
		    {
		        this.getStore().addData(record, this.getOpt().field, pos);
		    }
		    else
		    {
		        if ($.isPlainObject(this.getOpt().record)) {
	                this.getOpt().record = [this.getOpt().record];
	            } else if (!$.isArray(this.getOpt().record)) {
	                this.getOpt().record = [];
	            }
	            if ($.isPlainObject(record)) {
	                if ($.isNumeric(pos)) {
	                    this.getOpt().record.splice(pos, 0, record);
	                } else {
	                    this.getOpt().record.push(record);
	                }
	            } else if ($.isArray(record)) {
	                if ($.isNumeric(pos) && pos <= this.getOpt().record.length) {
	                    for (var f = record.length - 1; f >= 0; f --) {
	                        this.getOpt().record.splice(pos, 0, record[f]);
	                    }
	                } else {
	                    this.getOpt().record = this.getOpt().record.concat(record);
	                }
	            } else {
	                return;
	            }
	            // Add new row to table
	            var opt = cb.cloneObject(this.getOpt()),
	                bodyItems = [];
	            for (var i = 0; i < opt.columns.length; i ++) {
	                bodyItems.push(opt.columns[i]);
	            }
	            if (opt.alterdata) {
	                record = cb.clone(record);
	                cb.alterdata(opt.alterdata, record);
	            }
	            var tbody = cb.module.bootstrapComponent['tbody']({
	                items: bodyItems
	            }, record);
	            if ($.isNumeric(pos)) {
	                if (pos) {
	                    if (pos <= this.find('tbody').find('tr').length) {
	                        this.find('tbody').find('tr:eq(' + (pos - 1) + ')').after($(tbody).children());
	                    } else {
	                        this.find('tbody').append($(tbody).children());
	                    }
	                } else {
	                    this.find('tbody').prepend($(tbody).children());
	                }
	            } else {
	                this.find('tbody').append($(tbody).children());
	            }
		    }
		}
	},
	
	removeRow: function (pos) {
		// Remove record
		if (this.getOpt().storelink)
        {
            this.getStore().removeData(pos, this.getOpt().field);
        }
        else
        {
    		// Remove row table
    		this.find('tbody').find('tr:eq(' + pos + ')').remove();
        }
	},
	
	removeAllRows: function (noSync) {
		// Remove records
		this.getOpt().record = [];
		// Sync up store
		if (noSync !== true) {
			this.syncStore();
		}
		// Remove rows table
		this.find('tbody').children().remove();
	},
	
	addItems: function (items, place) {
		if (!$.isArray(items)) {
			items = [items];
		}
		if (typeof place == 'string' && (place == 'head' || place == 'beforeTable' || place == 'afterTable' || place == 'footer')) {
			var opt = this.getOpt();
			if ($.isPlainObject(opt[place])) {
				opt[place] = [opt[place]]
			} else if (!$.isArray(opt[place])) {
				opt[place] = [];
			}
			for (var i = 0; i < items.length; i ++) {
				var item = items[i];
				opt[place].push(item);
				var ele = cb.create(item);
				if (place == 'head') {
					this.find('.panel-heading').append(ele);
				}
				if (place == 'beforeTable') {
					this.find('.panel-body').find('table').before(ele);
				}
				if (place == 'afterTable') {
					this.find('.panel-body').find('table').after(ele);
				}
				if (place == 'footer') {
					this.find('.panel-footer').append(ele);
				}
			}
		}
	},
	
	setData: function (record) {
		this.removeAllRows(true);
		this.addRows(record, false, true);
	},
	
	syncStore: function () {
		// Sync up store
		var opt = this.getOpt();
		if (opt.storelink) {
			var record = this.getRecord();
			if (opt.field) {
				this.getStore().data[opt.field] = record;
			} else {
				this.getStore().data = record;
			}
		}
	}
};

// Funcion para generar un nombre único
cb.autoname = function(pre) {
	if (!pre) {
		pre = 'autoname';
	}
	var r = pre + '_' + this.elenamed;
	this.elenamed ++;
	return r;
};

// Funcion para generar un id único
cb.autoid = function(pre) {
	if (!pre) {
		pre = 'autoid';
	}
    var r = pre + '_' + this.eleids;
    this.eleids ++;
    return r;
};

// Funcion para ejecutar un método de un controlador
cb.ctr = function(ctr, fun, vals)
{
	if (cb.module.controller[ctr] && $.type(cb.module.controller[ctr][fun]) == 'function') {
		return cb.module.controller[ctr][fun](vals);
	}
};

// Funcion para coger un controlador, store, vista o componente
cb.get = function(type, name, field) {
	if (field) {
		if (type == 'store') {
			return cb.module[type]? cb.module[type][name]? cb.module[type][name].data[field]? cb.module[type][name].data[field]: null: null: null;
		}else{
			return cb.module[type]? cb.module[type][name]? cb.module[type][name][field]? cb.module[type][name][field]: null: null: null;
		}
	}else{
		return cb.module[type]? cb.module[type][name]? cb.module[type][name]: null: null;
	}
};

// Funcion para coger un store
cb.getStore = function(name, field) {
	return cb.get('store', name, field);
};

// Funcion para coger la definición de una vista
cb.getView = function(name, field) {
	return cb.get('view', name, field);
};

// Funcion para coger un controlador
cb.getController = function(name, field) {
	return cb.get('controller', name, field);
};

// Funcion para coger la definición de un componente
cb.getComponent = function(name, field) {
	return cb.get('component', name, field);
};

// Funcion para coger un elemento
// éste poseerá las funciones base de ci-bus y de jQuery
cb.getCmp = function(ref, idx) {
    if (!idx) idx = 0;
    if (typeof ref == 'string') {
        // Search by css selector
        if (ref.substr(0, 1) == '#' || ref.substr(0, 1) == '.') {
            if ($(ref).length > idx) {
                return $.extend($($(ref)[idx]), $($(ref)[idx])[0]);
            } else if (idx == 0){
                return $.extend($(ref), $(ref)[0]);
            } else {
                return null;
            }
        } else { // Search by xtype
            var childs = $('*');
            var count = 0;
            for (var i = 0; i < childs.length; i ++) {
                if (cb.isNode(childs[i]) && cb.getCmp(childs[i]).getOpt) {
                    if (cb.getCmp(childs[i]).getOpt().xtype == ref) {
                        if (idx == count) {
                            return cb.getCmp(childs[i]);
                        } else {
                            count ++;
                        }
                    }
                }
            }
        }
    } else {
        return $.extend($(ref), $(ref)[0]);
    }
    return null;
};

// Funcion para enviar un formulario a un store PHP
cb.send = function(formn,module,store,callback)
{
	$.ajax({
	  dataType: "script",
	  cache: true,
	  url: module+'/store/'+store,
	  method: 'post',
	  contentType: "application/x-www-form-urlencoded;charset=UTF-8",
	  data: $.type(formn) == 'string'? $("form[name='"+formn+"']").serializeArray(): formn,
	  success: callback
	});
};

cb.require = function(dt, callback)
{
	$.ajax({
		dataType: "script",
		cache: true,
		method: 'post',
		data: {data:JSON.stringify(dt)},
		url: 'require',
		success: callback
	});
};

// Funciona para cargar varios controladores y vistas en una sola llamada
cb.loadAll = function(dt, callback)
{
	$.ajax({
		dataType: "script",
		cache: true,
		method: 'post',
		data: {data:JSON.stringify(dt)},
		url: 'loadAll',
		success: callback
	});
};

// Funcion igual que loadAll pero haciendo una llamada por archivo
cb.loadLineal = function (arr)
{
	if ($.isArray(arr[0]))
	{
		cb.load(arr[0][0], arr[0][1], arr[0][2], arr[0][3], cb.loadSecondLineal(arr, 0));
	}
	else if ($.isArray(arr) && arr.length > 2)
	{
		cb.load(arr[0], arr[1], arr[2], arr[3]);
	}
};

cb.loadSecondLineal = function(arr, n)
{
	return function(data, textStatus, jqXHR) {
		n++;
		if ($.isArray(arr[n]))
		{
	        cb.load(arr[n][0], arr[n][1], arr[n][2], arr[n][3], cb.loadSecondLineal(arr, n));
		}
    };
};

// Funcion para cargar un controlador, vista, store  o componente
cb.load = function(type, module, name, data, callback)
{
	if ($.isFunction(name))
	{
		callback = name;
		name = module;
	}
	if (!name) name = module;
	if ($.isFunction(data))
	{
		callback = data;
		data = {};
	}
	if ($.isPlainObject(name))
	{
		data = name;
		name = module;
	}
	if ($.isPlainObject(data)) {
		cb.module.parseData[name] = data;
	}
	if (type == 'store')
	{
		$.ajax({
		  dataType: "script",
		  cache: true,
		  url: module+'/'+type+'/'+name,
		  method: 'post',
		  data: data,
		  success: callback
		});
	}
	else if (type == 'component')
	{		
		if (!this.module.component[name])
		{
			this.module.component[name] = {};
		}
		
		$.ajax({
		  dataType: "script",
		  cache: true,
		  url: module+'/'+type+'/'+name,
		  method: 'post',
		  data: data,
		  success: callback
		});
	}
	else
	{
		$.cachedScript(module+'/'+type+'/'+name,'js').done(callback);
	}
};

// Funcion para definir un controlador, vista, store o componente
cb.define = function(obj)
{
	if (obj.name && obj.xtype)
	{	
		if (!$.isArray(obj.data) && this.module[obj.xtype][obj.name])
		{
			for (var fie in this.module[obj.xtype][obj.name].data)
			{
				if (!obj.data[fie]) {
					obj.data[fie] = this.module[obj.xtype][obj.name].data[fie];
				}
			}
		}
		
		// Default extend
		if (obj.xtype == 'store')
		{			
			if ($.isArray(obj.extend)) {
				obj.extend.unshift('base.store');
			}else if (typeof obj.extend === 'string') {
				obj.extend = ['base.store', obj.extend];
			}else{
				obj.extend = 'base.store';
			}
		}
		
		// Extends
		this.module[obj.xtype][obj.name] = {};// Init object
		if (obj.extend) {
			if (typeof obj.extend === 'string') {
				$.extend( this.module[obj.xtype][obj.name], this.fetchFromObject(this, obj.extend));
			}
			else if ($.isArray(obj.extend)) {
				for (var i=0; i<obj.extend.length; i++) {
					if (typeof obj.extend[i] === 'string') {
						$.extend( this.module[obj.xtype][obj.name], this.fetchFromObject(this, obj.extend[i]));
					}
				}
			}
		}
		// To end Extend obj
		$.extend( this.module[obj.xtype][obj.name], obj);
		
		if (obj.xtype == 'store')
		{
			// TODO Refrescar elementos que carguen datos de este store
			// En planificación
		}
		
		if ($.isArray(obj['require'])) {
			this.require(obj['require']);
		}
		
		// Add routes
		if (obj.xtype == 'controller' && $.isPlainObject(obj.route)) {
			$.each(obj.route, function(hash, fun) {
				cb.router.set(hash, obj.name, fun);
			});
		}
		
		if (obj.xtype == 'view')
		{			
			if (obj.renderOnLoad !== false){
				this.render(obj);
			}
		}
		
		// OnLoad function
		if ($.isFunction(obj['onload'])) {
			if (cb.module.parseData[obj.name]) {
				obj['onload'](cb.module.parseData[obj.name]);
			}else{
				obj['onload']();
			}
		}
	}
};

cb.fetchFromObject = function(obj, prop) {
    if (!obj) {
        return obj;
    }
    var _index = prop.indexOf('.');
    if (_index > -1) {
        return this.fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
    }
    
    return obj[prop];
};

cb.putToObject = function(obj, data, prop) {
    if (prop && typeof prop == 'string') {
    	if (!obj) {
            obj = {};
        }
        var _index = prop.indexOf('.');
        if (_index > -1) {
        	if (typeof obj[prop.substring(0, _index)] != 'object') {
        		obj[prop.substring(0, _index)] = {};
        	}
            obj[prop.substring(0, _index)] = this.putToObject(obj[prop.substring(0, _index)], data, prop.substr(_index + 1));
        } else {
        	obj[prop] = data;
        }
    } else {
    	obj = data;
    }
    
    return obj;
};

cb.deleteToObject = function (obj, prop) {
	if (prop && typeof prop == 'string') {
		var _index = prop.indexOf('.');
		if (_index > -1) {
	    	obj[prop.substring(0, _index)] = this.deleteToObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
	    } else {
	    	delete obj[prop];
	    }
	} else {
		if (!delete obj) {
			obj = undefined;
		}
	}
	
	return obj;
};

cb.setMissingDinamicValue = function(obj, attr, value, nivels) {
	if (!nivels) {
		nivels=0;
	}
	
	if ($.isPlainObject(obj) && !obj[attr])
	{
		obj[attr] = value;
	}
	else if ($.isArray(obj))
	{
		for (n=0; n<obj.length; n++)
		{
			if ($.isPlainObject(obj[n]) && !obj[n][attr])
			{
				obj[n][attr] = value;
			}
		}
	}
	if (nivels > 0 && obj.items)
	{
		nivels--;
		obj.items = this.setMissingDinamicValue(obj.items, attr, value, nivels);
	}
	
	return obj;
}

cb.setDinamicValue = function(obj, attr, value, nivels) {
	if (!nivels) {
		nivels=0;
	}
	
	if ($.isPlainObject(obj))
	{
		obj[attr] = value;
	}
	else if ($.isArray(obj))
	{
		for (n=0; n<obj.length; n++)
		{
			if ($.isPlainObject(obj[n]))
			{
				obj[n][attr] = value;
			}
		}
	}
	if (nivels > 0 && obj.items)
	{
		nivels--;
		obj.items = this.setDinamicValue(obj.items, attr, value, nivels);
	}
	
	return obj;
}

cb.setValue = function(ele, value)
{
	if ($(ele).is('input'))
	{
		$(ele).val(value);
	}
	else
	{
		$(ele).html(value);
	}
	return ele;
}

// Funciona para setear valores de configuracion que necesitemos
cb.setConfig = function(va, val) {
			
	if ($.isArray(va) || $.isPlainObject(va))
	{	
		this.config = $.extend(this.config, va);
	}
	else
	{
		this.config[va] = val;
	}
}
// Funcion para coger valores de configuracion
cb.getConfig = function(va, var2) {
			
	if (!var2) {
		if (this.config[va])
		{
			return this.config[va];
		}
	}else{
		if (this.config[va])
		{
			if (this.config[va][var2])
			{
				return this.config[va][var2];
			}
		}
	}
}
// Funcion para borrar valores de configuracion
cb.delConfig = function(va, var2) {
	if (!var2) {
		if (this.config[va])
		{
			delete this.config[va];
		}
	}else{
		if (this.config[va])
		{
			if (this.config[va][var2])
			{
				delete this.config[va][var2];
			}
		}
	}
}

cb.render = function(obj, callback)
{
	var vw = obj.name;
	
	if (obj.renderTo)
	{
		// TODO No borrar los elementos con reload: false
		$(obj.renderTo).empty();
	}
	
	if (obj.items)
	{
	    if (obj.renderTo)
	    {
	        obj.items = this.setMissingDinamicValue(obj.items, 'appendTo', obj.renderTo);
	    }
	    else if (obj.appendTo)
		{
			obj.items = this.setMissingDinamicValue(obj.items, 'appendTo', obj.appendTo);
		}
		else if (obj.prependTo)
		{
			obj.items = this.setMissingDinamicValue(obj.items, 'prependTo', obj.prependTo);
		}
	}
	
	if ($.isPlainObject(obj.items))
	{
	    obj.items = [obj.items];
	}
	
	if ($.isArray(obj.items))
	{
		for (var j=0; j<obj.items.length; j++) {
			if (obj.items[j].reload !== false || !$('#'+obj.items[j].id).length) {
				if (obj.items[j].renderTo) {
					$(obj.items[j].renderTo).html('');
				}
				this.create(obj.items[j]);
			}
		}
	}
	
	if ($.isFunction(obj.onRender)) {
		obj.onRender();
	}
	
	if ($.isFunction(callback))
	{
		callback();
	}
}

cb.extend = function(opt1, opt2) {
	if (opt2.forEach) {
		opt2.forEach(function(ele, idx) {
			opt1[idx] = ele;
		});
	}
	return opt1;
}

//Funciones para clonar
cb.clone = function(data) {
    return JSON.parse(JSON.stringify(data));
};

cb.cloneObject = function(obj) {
	return $.extend({}, obj);
}

cb.cloneArray = function(arr) {
	return $.extend([], arr);
}

// Para la creación de componentes de boostrap
cb.module.bootstrapComponent = {
	'button': function(opt, record) {
		var ele = document.createElement(opt.xtype);
		if (!opt.type) opt.type = 'default';
		opt.cls? opt.cls = 'btn btn-'+opt.type+' '+opt.cls : opt.cls = 'btn btn-'+opt.type;
		if (opt.size) opt.cls += ' btn-'+opt.size;
		opt.type = null;
		if (!opt.margin && opt.margin !== 0) opt.margin = '0 5px 0 0';
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'nav': function(opt, record) {
		if (!opt.toggle)opt.toggle = cb.autoname();
		var ele = document.createElement('nav');
		$(ele).addClass('navbar');
		if (opt.type)
		{
			var tcls = opt.type.split(' ');
			for (var i=0; i<tcls.length; i++)
			{
				if (tcls[i].trim() != '') $(ele).addClass('navbar-'+tcls[i]);
			}
			opt.notype = true;
		}
		else
		{
			$(ele).addClass('navbar-default');
		}
		ele = cb.common_prop(ele, opt);
		var conta = document.createElement('div');
		$(conta).addClass('container-fluid');
		if ($.isArray(opt.items))
		{
			for (var a = 0; a < opt.items.length; a++)
			{
				if (opt.items[a].xtype == 'header')
				{
					opt.items[a].xtype = 'navbar-header';
					opt.items[a].target = opt.toggle;
				}
				else if (opt.items[a].xtype == 'collapse' || opt.items[a].xtype == 'navbar-collapse')
				{
					opt.items[a].xtype = 'navbar-collapse';
					opt.items[a].cls = opt.toggle;
					for (var b = 0; b < opt.items[a].items.length; b++)
		            {
					    if (opt.items[a].items[b].xtype == 'form') {
					        opt.items[a].items[b].xtype = 'navbar-form';
					    }
		            }
				}
				else if (opt.items[a].xtype == 'form')
                {
                    opt.items[a].xtype = 'navbar-form';
                }
				$(conta).append(cb.create(cb.cloneObject(opt.items[a]), record));
			}
		}
		opt.noitems = true;
		$(ele).append(conta);
		return ele;
	},
	'navbar-collapse': function(opt, record) {
		var ele = document.createElement('div');
		$(ele).addClass('collapse navbar-collapse');
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'navbar-header': function(opt, record) {
		var ele = document.createElement('div');
		$(ele).addClass('navbar-header');
		ele = cb.common_prop(ele, opt);
		$(ele).append(cb.create({
			xtype: 'button',
			type: 'button',
			cls: 'collapsed navbar-toggle',
			height: 35,
			margin: '8px 5px 0 0',
			padding: '5px 10px',
			attr: {
				'data-toggle': 'collapse',
				'data-target': '.'+opt.target
			},
			items: [{
				xtype: 'span',
				cls: 'sr-only',
				text: 'Toggle navigation'
			},{
				xtype: 'glyphicon',
				type: 'option-horizontal',
				size: 22
			}]
		}));
		if (!$.isArray(opt.items))
        {
		    opt.items = [];
        }
        for (var a = 0; a < opt.items.length; a++)
        {
            if (opt.items[a].xtype == 'brand') {
                opt.items[a].xtype = 'a';
                opt.items[a].cls = 'navbar-brand';
            }
        }
		return ele;
	},
	'navbar-button': function(opt, record) {
		opt.xtype = 'button';
		conta = cb.create(cb.cloneObject(opt), record);
		$(conta).addClass('navbar-btn');
		ele = document.createElement('li');
		$(ele).append(conta);
		return ele;
	},
	'navbar-text': function(opt, record) {
		conta = document.createElement('p');
		$(conta).addClass('navbar-text');
		conta = cb.common_prop(conta, opt);
		ele = document.createElement('li');
		$(ele).append(conta);
		return ele;
	},
	'navbar-a': function(opt, record) {
        conta = document.createElement('a');
        conta = cb.common_prop(conta, opt);
        ele = document.createElement('li');
        if (opt.active) {
            $(ele).addClass('active');
        }
        $(ele).append(conta);
        return ele;
    },
    'navbar-form': function(opt, record) {
        if (!opt.name) opt.name = cb.autoname();
        var ele = document.createElement('form');
        if ($.isArray(opt.items))
        {
            for (var s=0; s<opt.items.length; s++)
            {
                if (opt.items[s].xtype == 'group') opt.items[s].xtype = 'form-group';
            }
        }
        $(ele).addClass('navbar-form');
        if (opt.type)
        {
            var cls = '';
            var tcls = opt.type.split(' ');
            for (var i=0; i<tcls.length; i++)
            {
                cls = cls + ' navbar-'+tcls[i];
            }
            $(ele).addClass(cls);
            opt.type = null;
        }
        ele = cb.common_prop(ele, opt);
        return ele;
    },
	'navbar': function(opt, record) {
		opt.cls? opt.cls = 'nav navbar-nav '+opt.cls : opt.cls = 'nav navbar-nav';
		if (opt.type)
		{
			var tcls = opt.type.split(' ');
			for (var i=0; i<tcls.length; i++)
			{
				opt.cls = opt.cls + ' navbar-'+tcls[i];
			}
			opt.notype = true;
		}
		var ele = document.createElement('ul');
		ele = cb.common_prop(ele, opt);
		if ($.isArray(opt.items))
		{
			for (var a=0;a<opt.items.length;a++)
			{
				if (opt.items[a].xtype == 'dropdown') opt.items[a].xtype = 'navbar-dropdown';
				if (opt.items[a].xtype == 'button') opt.items[a].xtype = 'navbar-button';
				if (opt.items[a].xtype == 'text') opt.items[a].xtype = 'navbar-text';
				if (opt.items[a].xtype == 'a') opt.items[a].xtype = 'navbar-a';
				$(ele).append(cb.create(cb.cloneObject(opt.items[a]), record));
			}
		}
		opt.noitems = true;
		return ele;
	},
	'navbar-dropdown': function(opt, record) {
		opt.cls? opt.cls = 'dropdown '+opt.cls : opt.cls = 'dropdown';
		var ele = document.createElement('li');
		if (!opt.type) opt.type = 'dropdown';
		$(ele).addClass(opt.type);
		if (opt.id)
		{
			$(ele).attr('id',opt.id);
			opt.id = false;
		}
		var but = document.createElement('a');
		but = cb.common_prop(but, {
			cls:'dropdown-toggle',
			attr: {
				'data-toggle':'dropdown',
				'role':'button',
				'aria-haspopup':'true',
				'aria-expanded':'true'}});
		but = cb.common_prop(but, opt);
		if (opt.caret!==false)
		{
			$(but).append(cb.create({
				xtype: 'span',
				cls: 'caret'
			}));
		}
		$(ele).append(but);
		if ($.isArray(opt.items))
		{
			var ul = document.createElement('ul');
			$(ul).addClass('dropdown-menu');
			if (opt.items)
			{
				for (var a=0;a<opt.items.length;a++)
				{
					var li = document.createElement('li');
					if (opt.items[a].xtype == 'separator' || opt.items[a].xtype == 'divider')
					{
						li = cb.common_prop(li, {
							cls: 'divider',
							attr: {'role':'separator'}});
						li = cb.common_prop(li, opt.items[a]);
					}
					else if (opt.items[a].xtype == 'dropdown-header' || opt.items[a].xtype == 'header')
					{
						opt.items[a].cls? opt.items[a].cls = 'dropdown-header '+opt.items[a].cls : opt.items[a].cls = 'dropdown-header';
						li = cb.common_prop(li, opt.items[a]);
					}
					else
					{
						if (opt.items[a].xtype == 'li') {
							li = cb.create(opt.items[a], record);
						}else{
							oli = {xtype: 'li'};
							if (opt.items[a].store) {
								oli.store = opt.items[a].store;
								delete opt.items[a].store;
							}
							if (opt.items[a].field) {
								oli.field = opt.items[a].field;
								delete opt.items[a].field;
							}
							oli.items = opt.items[a];
							li = cb.create(oli, record);
						}
					}
					$(ul).append(li);
				}
			}
			$(ele).append(ul);
		}
		opt.noitems = true;
		return ele;
	},
	'dropdown': function(opt, record) {
		if (!opt.type) opt.type2 = 'default';
		else opt.type2 = opt.type;
		if (opt.xtype == 'dropup') var t_xtype = 'btn-group ' + opt.xtype;
		else var t_xtype = 'btn-group';
		var ele = document.createElement('div');
		$(ele).attr('role', 'group');
		$(ele).addClass(t_xtype);
		if (opt.id) {
			$(ele).attr('id', opt.id);
			opt.id = false;
		} else {
			$(ele).attr('id', cb.autoid(opt.xtype));
		}
		if (opt.group) {
			ele = cb.common_prop(ele, opt.group);
		}
		var but = document.createElement('button');
		but = cb.common_prop(but, {
			cls:'btn btn-'+opt.type2+' dropdown-toggle',
			attr: {
				'data-toggle': 'dropdown',
				'aria-haspopup': 'true',
				'aria-expanded': 'false',
				'type': 'button'
			}
		});
		opt.id=cb.autoid();
		if (opt.size) {
			if (opt.cls) opt.cls += ' btn-'+opt.size;
			else opt.cls = 'btn-'+opt.size;
		}
		if (opt.split)
		{
			var but2 = cb.create({
				xtype:'button',
				attr:{'type':'button'},
				cls:'btn btn-'+opt.type2
			});
			but2 = cb.common_prop(but2, opt);
			$(ele).append(but2);
			$(but).append(cb.create({xtype:'span',text:'&nbsp;'}));
			if (opt.caret!==false)
			{
				$(but).append(cb.create({xtype:'span', cls:'caret'}));
			}
			$(but).append(cb.create({xtype:'span',text:'&nbsp;'}));
		}
		else
		{
			but = cb.common_prop(but, opt);
			if (opt.caret!==false)
			{
				$(but).append(cb.create({xtype:'span', cls:'caret'}));
			}
		}
		$(ele).append(but);
		var ul = document.createElement('ul');
		$(ul).addClass('dropdown-menu').attr('aria-labelledby',opt.id);
		
		// Add options li
		ele.afterRender = function (ele) {
            ele.addItems(ele.getOpt().items, record, 'loadItems');
        }
		
		$(ele).append(ul);
		opt.noitems = true;
		return ele;
	},
	'dropup': function(opt, record) {
		var ele = cb.module.bootstrapComponent['dropdown'](opt, record);
		return ele;
	},
	'container': function(opt, record) {
		var ele = document.createElement('div');
		if (opt.type == 'fluid') {
			$(ele).addClass('container-fluid');
			opt.notype = true;
		}else{
			$(ele).addClass('container');
		}
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'progress': function(opt, record) {
		var ele = document.createElement('div');
		$(ele).addClass('progress');
		if ($.isArray(opt.items))
		{
			for (var a=0; a<opt.items.length; a++)
			{
				if (!opt.items[a].xtype) opt.items[a].xtype = 'progress-bar';
			}
		}
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'progress-bar': function(opt, record) {
		var ele = document.createElement('div');
		$(ele).addClass('progress-bar');
		if (opt.type) $(ele).addClass('progress-bar-'+opt.type);
		if (opt.striped) $(ele).addClass('progress-bar-striped');
		if (opt.animated || opt.active) $(ele).addClass('active');
		if (!opt.min) opt.min = 0;
		if (!opt.max) opt.max = 100;
		if (opt.value) opt.width = opt.value+'%';
		$(ele).attr({'aria-valuemin':opt.min, 'aria-valuemax':opt.max, 'aria-valuenow':opt.value});
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'table': function(opt, record) {
		var ele = document.createElement('table');
		$(ele).addClass('table');
		if ($.isArray(opt.items))
		{
			for (var a=0; a<opt.items.length; a++)
			{
				if (opt.items[a].xtype == 'head')
					opt.items[a].xtype = 'thead';
		 		if (opt.items[a].xtype == 'body')
					opt.items[a].xtype = 'tbody';
		 	}
		 }			 
		 ele = cb.common_prop(ele, opt);
		return ele;
	},
	'thead': function(opt, record) {
		var ele = document.createElement('thead');
	 	opt.t_tr = document.createElement('tr');
	 	for (var h=0;h<opt.items.length;h++)
	 	{
	 		if (!opt.items[h].xtype)
	 		{
	 			opt.items[h].xtype = 'th';
	 			opt.t_th = cb.create(cb.cloneObject(opt.items[h]), record);
	 		}
	 		else
	 		{
	 			opt.t_th = document.createElement('th');
	 			$(opt.t_th).append(cb.create(cb.cloneObject(opt.items[h]), record));
	 		}
	 		$(opt.t_tr).append(opt.t_th);
	 	}
	 	$(ele).append(opt.t_tr);
		opt.noitems = true;
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'tbody': function(opt, record) {
		var ele = document.createElement('tbody');
		if (!$.isArray(record)) {
			record = [record];
		}
		for (var i = 0; i < record.length; i ++) {
		 	if (opt.items)
		 	{
		 	    if (opt.items.length && !$.isArray(opt.items[0])) {
		 	       opt.items = [opt.items];
		 	    }
			 	for (var e = 0; e < opt.items.length; e++)
			 	{
			 	    opt.t_tr = document.createElement('tr');
			 	    var r_item = opt.items[e];
			 	    for (var h = 0; h < r_item.length; h++) {
			 	       if (!r_item[h].xtype || r_item[h].xtype == 'td' || r_item[h].xtype == 'th')
	                    {
	                        if (!r_item[h].xtype) r_item[h].xtype = 'td';
	                        opt.t_th = cb.create(cb.cloneObject(r_item[h]), record[i]);
	                    }
	                    else
	                    {
	                        opt.t_th = document.createElement('td');
	                        $(opt.t_th).append(cb.create(cb.cloneObject(r_item[h]), record[i]));
	                    }
	                    if (r_item[h].scope) $(opt.t_th).attr('scope', r_item[h].scope);
	                    
	                    $(opt.t_tr).append(opt.t_th);
			 	    }
			 	    $(ele).append(opt.t_tr);
			 	}
			 	
				opt.noitems = true;
		 	}
		}
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'th': function(opt, record) {
		var ele = document.createElement('th');
		if (opt.scope) $(ele).attr('scope', opt.scope);
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'ico': function(opt, record) {
		var ele = document.createElement('span');
		$(ele).addClass(opt.type).attr({'aria-hidden':'true'});
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'thumbnail': function(opt, record) {
		if (!opt.type) opt.type = 'div';
		var ele = document.createElement(opt.type);
		opt.notype = true;
		opt.cls? opt.cls = 'thumbnail '+opt.cls : opt.cls = 'thumbnail';
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'alert': function(opt, record) {
		if (!opt.type) opt.type = 'warning';
		if (opt.dismissible || opt.closable)
			opt.type += ' alert-dismissible';
		var ele = document.createElement('div');
		if (opt.dismissible || opt.closable)
		{
			var spa = document.createElement('span');
			spa = cb.common_prop(spa, {
				attr: {'aria-hidden':'true'},
				text: '&times;'});
			var but = document.createElement('button');
			but = cb.common_prop(but, {
				cls:'close',
				attr:{'data-dismiss':'alert',
					'aria-label':'Close'}});
			$(but).append(spa);
			$(ele).append(but);
		}
		ele = cb.common_prop(ele, {
			cls: 'alert alert-'+opt.type,
			attr: {'role':'alert'}});
		opt.notype = true;
		var spa2 = document.createElement('span');
		$(ele).append(spa2);
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'badge': function(opt, record) {
		var ele = document.createElement('span');
		opt.cls = 'badge';
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'toolbar': function(opt, record) {
		var ele = document.createElement('div');
		$(ele).addClass('btn-toolbar');
		$(ele).attr('role','toolbar');
		if (opt.label) $(ele).attr('aria-label', opt.label);
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'group': function(opt, record) {
		var ele = document.createElement('div');
		if (opt.type == 'vertical') $(ele).addClass('btn-group-vertical');
		else $(ele).addClass('btn-group');
		if (opt.type == 'justified') $(ele).addClass('btn-group-justified');
		$(ele).attr('role','group');
		if (opt.label) $(ele).attr('aria-label', opt.label);
		if (opt.size) $(ele).addClass('btn-group-'+opt.size);
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'callout': function(opt, record) {
		var ele = document.createElement('div');
		$(ele).addClass('bs-callout');
		if (opt.type) $(ele).addClass('bs-callout-'+opt.type);
		delete opt.type;
		if (opt.title) $(ele).append(cb.create({ xtype: 'h4', text: opt.title }));
		if (opt.text || opt.html)
		{
			opt.text? opt.ttext = opt.text : opt.ttext = opt.html;
			$(ele).html(opt.ttext);
			opt.notext = true;
			opt.nohtml = true;
		}
		if ($.isArray(opt.items))
		{
			for (var a=0;a<opt.items.length;a++)
				$(ele).append(cb.create(cb.cloneObject(opt.items[a]), record));
				
			opt.noitems = true;
		}
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'panel': function(opt, record) {
		var ele = document.createElement('div');
		$(ele).addClass('panel').css('margin-bottom', '0px');
		if (opt.type)
		{
			$(ele).addClass('panel-'+opt.type);
			opt.notype = true;
		}
		else
		{
			$(ele).addClass('panel-default');
		}
		if ($.isArray(opt.items))
		{
			for (var a=0;a<opt.items.length;a++)
			{
				if (opt.items[a].xtype == 'head' || opt.items[a].xtype == 'heading') {
					opt.items[a].xtype = 'panel-heading';
				}
				else if (opt.items[a].xtype == 'body' || opt.items[a].xtype == 'content') {
					opt.items[a].xtype = 'panel-body';
				}
				else if (opt.items[a].xtype == 'footer') {
					opt.items[a].xtype = 'panel-footer';
				}
				else if (opt.items[a].xtype == 'title') {
					opt.items[a].xtype = 'panel-title';
				}
			}
		}
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'panel-heading': function(opt, record) {
		var ele = document.createElement('div');
		$(ele).addClass(opt.xtype);
		if (opt.title) $(ele).append(cb.create({ xtype: 'panel-title', text: opt.title }))
		if ($.isArray(opt.items))
		{
			for (var a=0;a<opt.items.length;a++)
			{
				if (opt.items[a].xtype == 'title') {
					opt.items[a].xtype = 'panel-title';
				}
			}
		}
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'panel-body': function(opt, record) {
		var ele = cb.module.bootstrapComponent['panel-heading'](opt, record);
		return ele;
	},
	'panel-footer': function(opt, record) {
		var ele = cb.module.bootstrapComponent['panel-heading'](opt, record);
		return ele;
	},
	'panel-title': function(opt, record) {
		var ele = document.createElement('h3');
		$(ele).addClass(opt.xtype);
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'tabpanel': function(opt, record) {
		opt.t_ul = document.createElement('ul');
		$(opt.t_ul).addClass('nav nav-tabs');
		$(opt.t_ul).attr('role','tablist');
		
		opt.t_div = document.createElement('div');
		$(opt.t_div).addClass('tab-content');
		
		opt.t_content = document.createElement('div');
		$(opt.t_content).addClass('tab-content');
		
		if ($.isArray(opt.items))
		{
			opt.t_n = 1;
			for (var a=0; a<opt.items.length; a++)
			{
				if (!opt.items[a].id) opt.items[a].id = cb.autoid();
				
				if ($.isPlainObject(opt.items[a].tab))
				{
					opt.t_a = document.createElement('a');
					opt.t_li = document.createElement('li');
					
					if (opt.items[a].tab.xtype == 'dropdown')
					{
						opt.t_a = cb.common_prop(opt.t_a, {
							cls: 'dropdown-toggle',
							attr: { 'role': 'dropdown',
									'aria-controls': opt.items[a].id+'-contents',
									'data-toggle': 'dropdown'},
							id: opt.items[a].id
						});
						$(opt.t_a).attr('href', '#');
						opt.t_a = cb.common_prop(opt.t_a, opt.items[a].tab);
						$(opt.t_a).append('&nbsp;');
						if (opt.caret!==false)
						{
							$(opt.t_a).append(cb.create({xtype: 'span', cls: 'caret'}));
						}
						$(opt.t_li).addClass('dropdown');
						opt.t_ul2 = document.createElement('ul');
						$(opt.t_ul2).addClass('dropdown-menu');
						$(opt.t_ul2).attr({ 'aria-labelledby': opt.items[a].id,
										id: opt.items[a].id+'-contents'
						});
						if ($.isArray(opt.items[a].tab.items))
						{
							for (var k=0;k<opt.items[a].tab.items.length;k++)
							{
								opt.t_li2 = document.createElement('li');
								if (!opt.items[a].tab.items[k].xtype) opt.items[a].tab.items[k].xtype = "a";
								if (opt.items[a].tab.items[k].xtype == 'separator' || opt.items[a].tab.items[k].xtype == 'divider')
								{
									opt.t_li2 = cb.common_prop(opt.t_li2, {
										cls: 'divider',
										attr: {'role':'separator'}});
									opt.t_li2 = cb.common_prop(opt.t_li2, opt.items[a].tab.items[k]);
								}
								else if (opt.items[a].tab.items[k].xtype == 'dropdown-header' || opt.items[a].tab.items[k].xtype == 'header')
								{
									opt.items[a].tab.items[k].cls? opt.items[a].tab.items[k].cls = 'dropdown-header '+opt.items[a].tab.items[k].cls : opt.items[a].tab.items[k].cls = 'dropdown-header';
									opt.t_li2 = cb.common_prop(opt.t_li2, opt.items[a].tab.items[k]);
								}
								else
								{
									if (opt.items[a].tab.items[k].xtype == "a")
									{
										if (opt.items[a].tab.items[k].ref)
										{
											opt.items[a].tab.items[k].attr = {
												role: 'tab',
												'data-toggle': 'tab',
												'aria-controls': opt.items[a].tab.items[k].ref,
												'aria-expanded': opt.items[a].tab.items[k].active
											};
											opt.items[a].tab.items[k].id = opt.items[a].tab.items[k].ref+'-tab';
											opt.items[a].tab.items[k].href = '#'+opt.items[a].tab.items[k].ref;
										}
									}
									$(opt.t_li2).append(cb.create(cb.cloneObject(opt.items[a].tab.items[k]), record));
								}
								$(opt.t_ul2).append(opt.t_li2);
							}
						}
						opt.items[a].tab.noitems = true;
					}
					else
					{
						opt.t_a = cb.common_prop(opt.t_a, {
						id: opt.items[a].id+'-tab',
							attr: {
								'aria-controls': opt.items[a].id,
								'role': 'tab',
								'data-toggle': 'tab'
							}
						});
						$(opt.t_a).attr('href', '#'+opt.items[a].id);
						$(opt.t_a).append(cb.create(cb.cloneObject(opt.items[a].tab), record));
					}
					
					if (opt.items[a].active) $(opt.t_a).attr('aria-expanded', 'true');
					else $(opt.t_a).attr('aria-expanded', 'false');
					
					$(opt.t_li).append(opt.t_a);
					if (opt.t_ul2)
					{
						$(opt.t_li).append(opt.t_ul2);
						opt.t_ul2 = false;
					}
					$(opt.t_li).attr('role', 'presentation');
					if (opt.items[a].active) $(opt.t_li).addClass('active');
					$(opt.t_ul).append(opt.t_li);
					opt.t_li = false;
				}
				
				if ($.isPlainObject(opt.items[a].panel))
				{
					opt.items[a].panel = [opt.items[a].panel];
				}
				
				if ($.isArray(opt.items[a].panel))
				{
					for (var k=0;k<opt.items[a].panel.length;k++)
					{
						if ($.isPlainObject(opt.items[a].panel[k]))
						{
							if (!opt.items[a].panel[k].id) opt.items[a].panel[k].id = opt.items[a].id;
							if (!opt.items[a].panel[k].active && opt.items[a].panel.length == 1) opt.items[a].panel[k].active = opt.items[a].active;
							opt.t_div = document.createElement('div');
							opt.t_div = cb.common_prop(opt.t_div, {
								cls: 'tab-pane fade',
								id: opt.items[a].panel[k].id,
								attr: { 'role': 'tabpanel',
										'aria-labelledby': opt.items[a].panel[k].id + '-tab' },
								css: { 'border-left': '1px solid #DDD',
										'border-right': '1px solid #DDD',
										'border-bottom': '1px solid #DDD'}
							});
							if (opt.items[a].panel[k].active) $(opt.t_div).addClass('active in');
							$(opt.t_div).append(cb.create(cb.cloneObject(opt.items[a].panel[k]), record));
							$(opt.t_content).append(opt.t_div);
							opt.t_div = false;
						}
					}
				}
			}
		}
		opt.noitems = true;
		
		var ele = document.createElement('div');
		ele = cb.common_prop(ele, opt);
		$(ele).attr('data-example-id', 'togglable-tabs');
		$(ele).append(opt.t_ul);
		$(ele).append(opt.t_content);
		return ele;
	},
	'row': function(opt, record) {
		var ele = document.createElement('div');
		$(ele).addClass('row');
		if (opt.margin==null || opt.margin==undefined) opt.margin = '3px';
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'col': function(opt, record) {
		var ele = document.createElement('div');
		if (!opt.size) opt.size = 12;
		if ($.isPlainObject(opt.size))
		{
			for (var key in opt.size) {
				$(ele).addClass('col-'+key+'-'+opt.size[key]);
			}
		}
		else if (!$.isArray(opt.size))
		{
			$(ele).addClass('col-xs-'+opt.size);
		}
		if ($.isPlainObject(opt.offset))
		{
			for (var key in opt.offset) {
				if (opt.offset[key]) {
					$(ele).addClass('col-'+key+'-offset-'+opt.offset[key]);
				}
			}
		}
		else if (!$.isArray(opt.offset))
		{
			if (opt.offset) {
				$(ele).addClass('col-xs-offset-'+opt.offset);
			}
		}
		if (!opt.padding && opt.padding!==0)opt.padding = '0px 5px';
		delete opt.size;
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'input': function(opt, record) {
		
		if (opt.type == 'file')
		{
			var ele = document.createElement('label');
			$(ele).addClass('btn btn-default btn-file');
			if (opt.items) {
				if ($.isArray(opt.items))
				{
					for (var r=0; r<opt.items.length; r++)
					{
						$(ele).append(cb.create(cb.cloneObject(opt.items[r]), record));
					}
				}
			}
			var input = document.createElement('input');
			$(input).attr({type: 'file', hidden: 'hidden'});
			if (opt.id) {
				$(input).attr('id', opt.id);
				delete opt.type;
			}
			if (opt.name) {
				$(input).attr('name', opt.name);
				delete opt.name;
			}
			if (opt.listener) {
				$(input).on(opt.listener);
				delete opt.listener;
			}
			delete opt.type;
			if (!opt.text && !opt.html && !opt.items && opt.name) {
				opt.text = opt.name;
			}
			ele = cb.common_prop(ele, opt);
			$(ele).append(input);
		}
		else
		{
			var ele = document.createElement(opt.xtype);
			$(ele).addClass('form-control');
			
			if (!opt.type)opt.type = "text";
			
			ele = cb.common_prop(ele, opt);
		}
		
		return ele;
	},
	'select': function(opt, record) {
		var ele = document.createElement(opt.xtype);
		$(ele).addClass('form-control');
		if ($.isArray(opt.items))
		{
			for (var s=0; s<opt.items.length; s++)
			{
				if (!opt.items[s].xtype) opt.items[s].xtype = 'option';
			}
		}
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'form': function(opt, record) {
		if (!opt.name) opt.name = cb.autoname();
		var ele = document.createElement('form');
		if ($.isArray(opt.items))
		{
			for (var s=0; s<opt.items.length; s++)
			{
				if (opt.items[s].xtype == 'group') opt.items[s].xtype = 'form-group';
			}
		}
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'form-group': function(opt, record) {
		var ele = document.createElement('div');
		$(ele).addClass('form-group');
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'label': function(opt, record) {
		var ele = document.createElement(opt.xtype);
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'glyphicon': function(opt, record) {
		var ele = document.createElement('span');
		$(ele).addClass('glyphicon glyphicon-'+opt.type);
		ele = cb.common_prop(ele, opt);
		return ele;
	},
	'toggle': function (opt, record) {
	    var ele = document.createElement('input');
	    $(ele).attr('type', 'checkbox');
        $(ele).attr('data-toggle', 'toggle');
        
        if (!opt.on) {
            opt.on = {text: 'On'};
        }
        if (!opt.off) {
            opt.off = {text: 'Off'};
        }
        if (!opt.on.type && opt.type) {
            opt.on.type = opt.type;
        }
        $(ele).attr('data-on', opt.on.text);
        $(ele).attr('data-off', opt.off.text);
        if (opt.size) {
            $(ele).attr('data-size', opt.size);
            opt.size = null;
        }
        if (opt.on.type) {
            $(ele).attr('data-onstyle', opt.on.type);
        }
        if (opt.off.type) {
            $(ele).attr('data-offstyle', opt.off.type);
        }
        opt.on = null;
        opt.off = null;
        if (opt.width) {
            $(ele).attr('data-width', opt.width);
            opt.width = null;
        }
        if (opt.height) {
            $(ele).attr('data-height', opt.height);
            opt.height = null;
        }
        if (!opt.id) {
            opt.id = cb.autoid();
        }
        $(ele).attr('id', opt.id);
        opt.id = null;
        if (opt.require) {
        	cb.require(opt.require);
        	opt.require = null;
        }
        if (opt.name) {
        	$(ele).attr('name', opt.name);
        	opt.name = null;
        }
        if (opt.value) {
        	if (!opt.novalue) {
    			$(ele).attr('value', opt.value);
    		}
        	opt.name = null;
        }
        if (opt.disabled) {
        	$(ele).attr('disabled', 'disabled');
        }
        
        ele.afterRender = function (ele) {
            $(ele).bootstrapToggle();
            cb.common_prop($(ele).parent(), ele.getOpt());
        }
            
        return ele;
	}
};

// Para la creación de componentes de cibus
cb.module.cbComponent = {
    'svg': function(opt, record) {
        var ele = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (!opt.width) opt.width = 300;
        if (!opt.height) opt.height = 150;
        ele = cb.common_prop(ele, opt);
        return ele;
    },
    'polyline': function(opt, record) {
        var ele = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        if (!opt.fill) opt.fill = 'none';
        if (typeof opt.width === 'undefined') opt.width = 300;
        if (typeof opt.height === 'undefined') opt.height = 150;
        if (!opt.stroke && opt.color) opt.stroke = opt.color;
        else if (!opt.stroke) opt.stroke = '#0074d9';
        if (!opt['stroke-width']) opt['stroke-width'] = 3;
        if ($.isArray(record)) {
            opt.xspace   = parseInt(opt.width) / (record.length - 1);
            if (opt.pointMax == undefined) opt.pointMax = Math.max.apply(null, record);
            if (opt.pointMin == undefined) opt.pointMin = Math.min.apply(null, record);
            var xwrite = 0;
            var ywrite = 0;
            var points = "0,"+parseInt(opt.height);
            for (var i=0; i<record.length; i++) {
                ywrite = parseInt(opt.height) - ((record[i]-opt.pointMin) * parseInt(opt.height) / (opt.pointMax-opt.pointMin));
                points += " "+xwrite+","+ywrite;
                xwrite = Math.round(xwrite + opt.xspace);
            }
            points += " "+parseInt(opt.width)+","+parseInt(opt.height);
        }
        
        $(ele).attr({
            fill: opt.fill,
            stroke: opt.stroke,
            'stroke-width': opt['stroke-width'],
            points: points
        });
        ele = cb.common_prop(ele, opt);
        
        ele.clearPoints = function() {
            var ele = $.isArray(this)? this[0]: this;
            $(ele).removeAttr('points');
        };
        
        ele.opt = opt;
        
        return ele;
    },
	'grid': function (opt, record) {
		// To no edit original opts
		opt = cb.cloneObject(opt);
		
		// Create table
		var headItems = [],
			bodyItems = [];
		for (var i = 0; i < opt.columns.length; i ++) {
			var col = opt.columns[i];
			headItems.push({
				text: col.name
			});
			bodyItems.push(col);
		}
		var tableItems = [{
			xtype: 'head',
			items: headItems
		}, {
			xtype: 'body',
			record: record,
			items: bodyItems
		}];
		delete opt.columns;
		delete opt.store;
		delete opt.field;
		
		// Create panel
		opt.xtype = 'panel';
		opt.items = [];
		// Head panel
		if (opt.head) {
			opt.head.xtype = 'head';
			opt.items.push(opt.head);
			delete opt.head;
		}
		// Body panel with table
		if (opt.body) {
			opt.body.xtype = 'body';
			if (!opt.body.css) {
				opt.body.css = {
					padding: 0
				};
			} else if (!opt.body.css.padding) {
				opt.body.css.padding = 0;
			}
			if (!opt.body.table) {
				opt.body.table = {
					xtype: 'table',
					css: {
						margin: 0
					},
					items: tableItems
				};
			} else {
				opt.body.table.xtype = 'table';
				opt.body.table.items = tableItems;
				if (!opt.body.table.css) {
					opt.body.table.css = {
						margin: 0
					};
				} else if (!opt.body.table.css.margin) {
					opt.body.table.css.margin = 0;
				}
			}
			if ($.isPlainObject(opt.body.table.beforeItems)) {
				var beforeItems = [opt.body.table.beforeItems];
			} else if ($.isArray(opt.body.table.beforeItems)) {
				var beforeItems = opt.body.table.beforeItems;
			} else {
				var beforeItems = [];
			}
			if ($.isPlainObject(opt.body.table.afterItems)) {
				var afterItems = [opt.body.table.afterItems];
			} else if ($.isArray(opt.body.table.afterItems)) {
				var afterItems = opt.body.table.afterItems;
			} else {
				var afterItems = [];
			}
			delete opt.body.table.beforeItems;
			delete opt.body.table.afterItems;
			
			opt.body.items = beforeItems.concat(opt.body.table).concat(afterItems);
			delete opt.body.table;
			
			opt.items.push(opt.body);
			delete opt.body;
		} else {
			opt.items.push({
				xtype: 'body',
				css: {
					padding: 0
				},
				items: {
					xtype: 'table',
					css: {
						margin: 0
					},
					items: tableItems
				}
			});
		}
		if (opt.footer) {
			opt.footer.xtype = 'footer';
			opt.items.push(opt.footer);
			delete opt.footer;
		}
		
		var ele = cb.create(opt);
		
		return ele;
	}
};

// Para el seteo de propiedades
cb.props = {
	'require': function(ele, opt) {
		cb.require(opt.require);
	},
	'cls': function(ele, opt) {
		if (!opt.nocls) {
			$(ele).addClass(opt.cls);
		}
	},
	'html': function(ele, opt) {
		if (!opt.nohtml) {
			$(ele).html(opt.html);
		}
	},
	'text': function(ele, opt) {
		if (!opt.notext) {
			$(ele).append(opt.text);
		}
	},
	'glyphicon': function(ele, opt) {
		$(ele).prepend(cb.create({xtype:'glyphicon',type:opt.glyphicon}));
	},
	'id': function(ele, opt) {
		$(ele).attr('id', opt.id);
	},
	'disable': function(ele, opt) {
		if (opt) $(ele).attr('disable', 'disable');
	},
	'disabled': function(ele, opt) {
		$(ele).attr('disabled', 'disabled');
	},
	'name': function(ele, opt) {
		if (!opt.noname) {
			$(ele).attr('name', opt.name);
		}
	},
	'type': function(ele, opt) {
		if (!opt.notype) {
			$(ele).attr('type', opt.type);
		}
	},
	'href': function(ele, opt) {
		$(ele).attr('href', opt.href);
	},
	'value': function(ele, opt) {
		if (!opt.novalue) {
			$(ele).attr('value', opt.value);
		}
	},
	'margin': function(ele, opt) {
		$(ele).css('margin', opt.margin);
	},
	'padding': function(ele, opt) {
		$(ele).css('padding', opt.padding);
	},
	'color': function(ele, opt) {
		$(ele).css('color', opt.color);
	},
	'border': function(ele, opt) {
		$(ele).css('border', opt.border);
	},
	'src': function(ele, opt) {
		$(ele).attr('src', opt.src);
	},
	'float': function(ele, opt) {
		$(ele).css('float', opt.float);
	},
	'shadow': function(ele, opt) {
		$(ele).css('box-shadow', opt.shadow);
	},
	'size': function(ele, opt) {
		$(ele).css('font-size', opt.size);
	},
	'weight': function(ele, opt) {
		$(ele).css('font-weight', opt.weight);
	},
	'align': function(ele, opt) {
		$(ele).css('text-align', opt.align);
	},
	'pull': function(ele, opt) {
		$(ele).addClass('pull-'+opt.pull);
	},
	'height': function(ele, opt) {
		$(ele).css('height', opt.height);
	},
	'width': function(ele, opt) {
		$(ele).css('width', opt.width);
	},
	'placeholder': function(ele, opt) {
		$(ele).attr('placeholder', opt.placeholder);
	},
	'display': function(ele, opt) {
		$(ele).css('display', opt.display);
	},
	'cursor': function(ele, opt) {
		$(ele).css('cursor', opt.cursor);
	},
	'background': function(ele, opt) {
		$(ele).css('background', opt.background);
	},
	'hidden': function(ele, opt) {
		if (opt.hidden) {
			$(ele).hide();
		} else {
			$(ele).show();
		}
	},
	'badge': function(ele, opt) {
		$(ele).append('&nbsp;').append(cb.create({
			xtype: 'badge',
			text: opt.badge }));
	},
	'reload': function(ele, opt) {
		$(ele).attr('reload', opt.reload);
	},
	'target': function(ele, opt) {
		$(ele).attr('target', opt.target);
	},
	'click': function(ele, opt) {
		$(ele).click(opt.click);
	},
	'dblclick': function(ele, opt) {
		$(ele).dblclick(opt.dblclick);
	},
	'mouseover': function(ele, opt) {
		$(ele).mouseover(opt.mouseover);
	},
	'mouseout': function(ele, opt) {
		$(ele).mouseout(opt.mouseout);
	},
	'focus': function(ele, opt) {
        $(ele).focus(opt.focus);
    },
    'blur': function(ele, opt) {
        $(ele).blur(opt.blur);
    }
};

cb.mergeDataStore = function(record) {
	// TODO en planificación, lo necesitaré en alguna circunstancia?
};

// Funciton alterdata to changes in record data before processing
cb.alterdata = function (alterdata, record) {
	if ($.type(record) === 'string' || $.type(record) === 'number')
	{
		if ($.isFunction(alterdata)) {
			record = alterdata(record);
		}else if ($.isPlainObject(alterdata) && opt.field && alterdata[opt.field]) {
			record = alterdata[opt.field](record);
		}
	}
	else if ($.isPlainObject(alterdata) && $.isPlainObject(record))
	{
		$.each(record, function(i) {
			if ($.isFunction(alterdata[i])) {
				record[i] = alterdata[i](record[i]);
			}
		});
	}
	else if ($.isArray(record))
	{
		if ($.isFunction(alterdata))
		{
			for (var i = 0; i < record.length; i ++) {
				record[i] = alterdata(record[i]);
			}
		}
		else if ($.isPlainObject(alterdata))
		{
			for (var j = 0; j < record.length; j ++) {
				$.each(record[j], function(i) {
					if ($.isFunction(alterdata[i])) {
						record[j][i] = alterdata[i](record[j][i]);
					}
				});
			}
		}
	}
	return record;
}

// Funciona para la creación de elementos
cb.create = function(opt, record) {

	if (!opt.xtype) opt.xtype='span';
	
	if ($.type(opt.xtype) == 'string')
	{
		// Variables temp
		var store = false;
		var temp_record = false;
				
		// Default extend
		if ($.isArray(opt.extend)) {
			opt.extend.unshift('base.element');
		} else if (typeof opt.extend === 'string') {
			opt.extend = ['base.element', opt.extend];
		} else {
			opt.extend = 'base.element';
		}
		
		// Extends
		var opt_extended = {};
		if (typeof opt.extend === 'string') {
			$.extend( opt_extended, this.fetchFromObject(this, opt.extend));
		}
		else if ($.isArray(opt.extend)) {
			for (var i=0; i<opt.extend.length; i++) {
				if (typeof opt.extend[i] === 'string') {
					$.extend( opt_extended, this.fetchFromObject(this, opt.extend[i]));
				}
			}
		}
		// Extend by xtype
		$.extend( opt_extended, this.fetchFromObject(this, 'base.' + opt.xtype));
		// To end Extend obj
		$.extend( opt_extended, opt);
		delete opt_extended.extend;
		
		// Required id if storelink
        if (opt.storelink && !opt.id) {
            opt.id = this.autoid(opt.xtype);
        }
		
        // Get record
        if (!record) {
            // Get record from opt
            if (opt.record) {
                record = opt.record;
            }
        }
        if (opt.store) {
            if (this.module.store[opt.store]) {
                record = this.module.store[opt.store]['data'];
            }else{
                return;
            }
        }
        
		// If have record
        if (record) {
            
            // Get field del store
            if (opt.field) {
                if (typeof opt.field === 'string') {
                    if (record) {
                        if (record[opt.field]) {
                            record = record[opt.field];
                        } else if (cb.eleCreateWithoutRecord.indexOf(opt.xtype) < 0) {
                            return;
                        }
                    } else if (cb.eleCreateWithoutRecord.indexOf(opt.xtype) < 0) {
                        return;
                    }
                }
                else if ($.isArray(opt.field))
                {
                    if (record)
                    {
                        // Recorre los fields
                        for (var o=0; o<opt.field.length; o++)
                        {
                            // Si el field es un string
                            if (typeof opt.field[o] === 'string')
                            {
                                // Si existe datos en el store para ese field
                                if (record[opt.field[o]])
                                {
                                    // Si no existen record temporal
                                    if (!temp_record)
                                    {
                                        temp_record = record[opt.field[o]];
                                    }
                                    // Si el record temporal es un array
                                    else if ($.isArray(temp_record))
                                    {
                                        // Si el record actual es un array
                                        for (var o2=0; o2<temp_record.length; o2++)
                                        {
                                            if ($.isPlainObject(temp_record[o2]))
                                            {
                                                temp_record[o2][opt.field[o]] = record[opt.field[o]]; 
                                            }else{
                                                $.extend(temp_record, record[opt.field[o]]);
                                                o2 = opt.temp_record.length;
                                            }
                                        }
                                    }
                                    // Si el record temporal es un objeto
                                    else if ($.isPlainObject(temp_record))
                                    {
                                        temp_record[opt.field[o]] = record[opt.field[o]];
                                    }
                                    else
                                    {
                                        $.extend(temp_record, record[opt.field[o]]);
                                    }
                                }
                            }
                            // Si el field es un objecto
                            else if ($.isPlainObject(opt.field[o])) {
                                
                            }
                        }
                        if (temp_record) {
                            record = temp_record;
                        }
                    }else{
                        return;
                    }
                }
            }
            
            // Copy of original record data and Alterdata
            var raw_record = cb.clone(record);
            if (opt.alterdata) {
                record = this.alterdata(opt.alterdata, cb.clone(raw_record));
            }
        }
		
		// Arreglo para cuando se define items como objeto
		if ($.isPlainObject(opt.items)) {
			opt.items = [opt.items];
		}
		
		// Si el record contiene un array y no acepta arrays y no es un array de arrays creamos varios elementos
		if ($.isArray(record) && ((cb.eleAceptArrayRecord.indexOf(opt.xtype) < 0) || $.isArray(record[0]))) {
			ele = [];
			for (var c=0; c<record.length; c++) {
				if (record[c]) {
					// Se borra store y field para que no entre en un bucle infinito
					delete opt.store;
					delete opt.field;
					ele.push(cb.create(cb.cloneObject(opt), record[c]));
				}
			}
			return ele;
		}
		else
		{
			// If record is object
			if ($.isPlainObject(record)) {
				// Replace {field} to record value
			    for (ix in opt) {
			        var el = opt[ix];
			        if ($.type(el) === 'string') {                       
                        for (ix2 in record) {
                            opt[ix] = opt[ix].replace(new RegExp('{'+ix2+'}',"g"), record[ix2]);
                        }
                        // Clear missing
                        opt[ix] = opt[ix].replace(/{.+}/, '');
                    }
                    else if ($.isPlainObject(el) && ix !== 'items') {
                        el = cb.cloneObject(el);
                        for (ix3 in opt[ix]) {
                            if (typeof opt[ix][ix3] == 'string') {
                                for (ix2 in record) {
                                    opt[ix][ix3] = opt[ix][ix3].replace(new RegExp('{'+ix2+'}',"g"), record[ix2]);
                                }
                                // Clear missing
                                opt[ix][ix3] = opt[ix][ix3].replace(/{.+}/, '');
                            }
                        }
                    }
			    }
			}
		
			// Set defaults to child items
			if (opt.defaults && opt.items)
			{
				for (var def in opt.defaults) {
					opt.items = this.setMissingDinamicValue(opt.items, def, opt.defaults[def]);
				}
			}
			
			// If is bootstrap component
			if ($.isFunction(cb.module.bootstrapComponent[opt.xtype]))
			{
				var ele = cb.module.bootstrapComponent[opt.xtype](opt, record);
			}
			// If is ci-bus component
			else if ($.isFunction(cb.module.cbComponent[opt.xtype]))
			{
				var ele = cb.module.cbComponent[opt.xtype](opt, record);
			}
			// If is custom component
			else if ($.isPlainObject(cb.module.component[opt.xtype]))
			{
				var ele = this.create(cb.module.component[opt.xtype], record);
				ele = this.common_prop(ele, opt);
				ele.component = cb.module.component[opt.xtype];
				if (cb.module.component[opt.xtype].onRender && !opt.onRender) {
					opt.onRender = cb.module.component[opt.xtype].onRender;
				}
			}
			// By default create xtype element
			else
			{
				var ele = document.createElement(opt.xtype);
				ele = this.common_prop(ele, opt);
			}
			
			// If have record
			if (record) {
				opt_extended.record = raw_record;
				// If record is string
				if ($.type(record) === 'string' || $.type(record) === 'number') {
					ele = this.setValue(ele, record);
				}
				// If record is dom element
				else if (this.isNode(record) || this.isElement(record)) {
					$(ele).append(record);
				}
			}
			
			// Storelink // // // // /
			if (opt.storelink) {
				if (opt.store) {
					if (!cb.module.storelink[opt.store]) {
						cb.module.storelink[opt.store] = [];
					}
					cb.module.storelink[opt.store].push({ele: ele.id});
				}
			}
						
			// Add child items
			if ($.isArray(opt.items) && !opt.noitems)
			{
				for (var a=0; a<opt.items.length; a++)
				{
					$(ele).append(this.create(cb.cloneObject(opt.items[a]), record));
				}
			}
			
			// Set opt and methods
			ele.opt = {};
			opt_extended.element = $(ele);
			var methods = Object.getOwnPropertyNames(opt_extended);
			for (var i=0; i<methods.length; i++) {
				if (typeof opt_extended[methods[i]] === 'function') {
					ele[methods[i]] = opt_extended[methods[i]];
				}else{
					ele.opt[methods[i]] = opt_extended[methods[i]];
				}
			}

			// Render element
			if (opt.renderTo)
			{
				$(opt.renderTo).empty().append(ele);
			}
			else if (opt.appendTo)
			{
				$(opt.appendTo).append(ele);
			}
			else if (opt.prependTo)
			{
				$(opt.prependTo).prepend(ele);
			}
			else if (opt.beforeTo)
			{
				$(opt.beforeTo).before(ele);
			}
			else if (opt.afterTo)
			{
				$(opt.afterTo).after(ele);
			}
			else
			{
			    cb.doRenderFunctions(ele);
				return ele;
			}
			cb.doRenderFunctions(ele);
		}
	}
}

cb.doRenderFunctions = function (ele) {
    if ($.isFunction(ele.afterRender)) {
        ele.afterRender(ele);
        delete ele.afterRender;
    }
    if ($.isFunction(ele.onRender)) {
    	ele.onRender(ele);
    	delete ele.onRender;
    }
    var childNodes = ele.childNodes;
    for (var i = 0; i < childNodes.length; i ++) {
        if (childNodes[i].nodeType == 1) {
            cb.doRenderFunctions(childNodes[i]);
        }
    }
}

cb.common_prop = function(ele, opt)
{
	for (var prop in opt) {
		if (this.props[prop]) {
			this.props[prop](ele, opt);
		}
	}
	
	if ($.isPlainObject(opt.css)) {
		$(ele).css(opt.css);
	}
	
	if ($.isPlainObject(opt.attr)) {
		$(ele).attr(opt.attr);
	}
	
	if (opt.listener) {
		$(ele).on(opt.listener);
	}
	
	return ele;
}

cb.strpos = function(texto, word) {
	for (var i=0;i<texto.length;i++) {
		if (texto[i]==word[0]) {
			for (var r=1;r<=word.length;r++) {
				if (r==word.length) {
					return (i-word.length+1);
				}
				if (texto[i]!=word[r]) {
					r = word.length+1;
				}
			}
		}
	}
	return false;
}

// // [ General functions ]// // 

cb.enable = function(ele) {
	$(ele).removeAttr('disabled');
}

cb.disable = function(ele) {
	$(ele).attr('disabled','disabled');
}

cb.sto = function(fn, to) {
	setTimeout(fn, to);
}

cb.popup = function(pp) {
	
	if ($.isPlainObject(pp))
	{
		if (!pp.xtype)pp.xtype = 'panel';
		if (!pp.css) pp.css = {};
		if (!pp.id) pp.id = this.autoid();
		if (!pp.offsetTop) pp.offsetTop = 0;
		pp.css.margin = 'auto';
		
		var popup = this.create({
			xtype: 'div',
			css :{
				position: 'fixed',
				top: '0px',
				left: '0px',
				width: '100%',
				height: '100%',
				background: 'rgba(0, 0, 0, 0.5)',
				overflow: 'hidden',
				'z-index': 16777271
			}
		});
		var tid = pp.id;
		var pp_item = this.create(pp);
		$(pp_item).bind('destroy', function() {
			$(this).parent().remove();
		});
		$(popup).append(pp_item);
		$(document.body).append(popup);
		this.verticalCenter('#'+tid, pp.offsetTop);
		if (pp.effect) {
			this.effect('#'+tid, pp.effect);
		}
	}
}

cb.verticalCenter = function(obj, offset) {
	var wh = $(window).height();
	var oh = $(obj).height();
	var mt = (wh-oh)/2-offset;
	if (mt<0)mt=0;
	$(obj).css({'margin-top': mt});
	return obj;
}

cb.effect = function(obj, eff) {
	if ($.type(eff) == 'string') {
		var effe = eff;
	}else if ($.isArray(eff)) {
		if (eff[0]) var effe = eff[0];
		if (eff[1]) var vel = eff[1];
		if (eff[2]) var val = eff[2];
		if (eff[3]) var dire = eff[3];
	}else if ($.isPlainObject(eff)) {
		if (eff.type) var effe = eff.type;
		if (eff.value) var val = eff.value;
		if (eff.vel) var vel = eff.vel;
		if (eff.dire) var dire = eff.dire;
		if ($.isFunction(eff.fn)) var fun = eff.fn;
	}
	if (!fun) var fun = function() {};
	if (!vel) {
		var vel = 'fast';
	}else if ($.isFunction(vel)) {
		fun = vel;
		vel = 'fast';
	}
	if (!val || !$.isNumeric(val)) {
		var val = 20;
	}else if ($.isFunction(val)) {
		fun = val;
		val = 20;
	}
	if (!dire) {
		var dire = 'up';
	}else if ($.isFunction(dire)) {
		fun = dire;
		dire = 'up';
	}
	if (effe == 'fadein') {
		$(obj).fadeIn(vel, fun);
	}
	if (effe == 'fadeout') {
		$(obj).fadeOut(vel, fun);
	}
	if (effe == 'flipin') {
		if (dire == 'up') {
			var wh = $(window).height();
			var mt = $(obj).css('margin-top').replace('px', '');
			var tt = $(obj).css('top').replace('px', '');
			if ($.isNumeric(mt)) {
				$(obj).css({'margin-top': wh, opacity: 0}).animate({opacity: 1, 'margin-top': mt+'px'}, vel, fun);
			}else if ($.isNumeric(tt)) {
				$(obj).css({top: wh+'px', opacity: 0}).animate({opacity: 1, top: tt+'px'}, vel, fun);
			}
		}else if (dire == 'down') {
			var th = $(obj).height() * -1;
			var tt = $(obj).css('top').replace('px', '');
			if ($.isNumeric(tt)) {
				$(obj).css({top: th+'px', opacity: 0}).animate({opacity: 1, top: tt+'px'}, vel, fun);
			}else{
				var mt = $(obj).css('margin-top').replace('px', '');
				if (!$.isNumeric(mt)) { mt = 0; }
				$(obj).css({'margin-top': th+'px', opacity: 0}).animate({opacity: 1, 'margin-top': mt+'px'}, vel, fun);
			}
		}else if (dire == 'right') {
			var tw = $(obj).width() * -1;
			var tl = $(obj).css('left').replace('px', '');
			if ($.isNumeric(tl)) {
				$(obj).css({left: tw+'px', opacity: 0}).animate({opacity: 1, left: tl+'px'}, vel, fun);
			}else{
				var mt = $(obj).css('margin-left').replace('px', '');
				if (!$.isNumeric(mt)) { mt = 0; }
				$(obj).css({'margin-left': tw+'px', opacity: 0}).animate({opacity: 1, 'margin-left': mt+'px'}, vel, fun);
			}
		}else if (dire == 'left') {
			var tw = $(window).width();
			var tl = $(obj).css('left').replace('px', '');
			if ($.isNumeric(tl)) {
				$(obj).css({left: tw+'px', opacity: 0}).animate({opacity: 1, left: tl+'px'}, vel, fun);
			}else{
				var mt = $(obj).css('margin-left').replace('px', '');
				if (!$.isNumeric(mt)) { mt = 0; }
				$(obj).css({'margin-left': tw+'px', opacity: 0}).animate({opacity: 1, 'margin-left': mt+'px'}, vel, fun);
			}
		}
	}
	if (effe == 'flipout') {
		if (dire == 'down') {
			var wh = $(window).height();
			var tt = $(obj).css('top').replace('px', '');
			if ($.isNumeric(tt)) {
				$(obj).animate({top: wh+'px', opacity: 0}, vel, fun);
			}else{
				$(obj).animate({'margin-top': wh+'px', opacity: 0}, vel, fun);
			}
		}else if (dire == 'up') {
			var th = $(obj).height() * -1;
			var tt = $(obj).css('top').replace('px', '');
			if ($.isNumeric(tt)) {
				$(obj).animate({top: th+'px', opacity: 0}, vel, fun);
			}else{
				$(obj).animate({'margin-top': th+'px', opacity: 0}, vel, fun);
			}
		}else if (dire == 'left') {
			var tw = $(obj).width() * -1;
			var tl = $(obj).css('left').replace('px', '');
			if ($.isNumeric(tl)) {
				$(obj).animate({left: tw+'px', opacity: 0}, vel, fun);
			}else{
				$(obj).animate({'margin-left': tw+'px', opacity: 0}, vel, fun);
			}
		}else if (dire == 'right') {
			var tw = $(window).width();
			var tl = $(obj).css('left').replace('px', '');
			if ($.isNumeric(tl)) {
				$(obj).animate({left: tw+'px', opacity: 0}, vel, fun);
			}else{
				$(obj).animate({'margin-left': tw+'px', opacity: 0}, vel, fun);
			}
		}
	}
}

cb.fileUpload = function(file, module, store, progessbar, vals, callback) {
	if ($.isFunction(vals)) {
		callback = vals;
		delete vals;
	}
	if ($.isFunction(progessbar)) {
		callback = progessbar;
		delete progessbar;
	}
	
	if (window.XMLHttpRequest) {
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP")
	}
	
	var fd = new FormData();
	if ($.isPlainObject(vals)) {
		for (var ke in vals) {
			fd.append(ke, vals[ke]);
		}
	}
	fd.append('file', file);
	
	if (progessbar) {
		if (!$(progessbar).hasClass('progress-bar')) {
			var progessbarFinded = $(progessbar).find('.progress-bar');
		}
		if (progessbarFinded) {
			progessbar = progessbarFinded;
		}
		xhr.progessbar = progessbar;
	}
	
	if ($.isFunction(callback)) {
		xhr.callback = callback;
	}
	
	xhr.addEventListener('progress', function(e) {
		var done = e.position || e.loaded;
		var total = e.totalSize || e.total;
		$(this.progessbar).css('width', (Math.floor(done/total*1000)/10)+'%');
	});
	
	if (xhr.upload) {
		xhr.upload.progessbar = progessbar;
		xhr.upload.addEventListener('progress', function(e) {
			var done = e.position || e.loaded;
			var total = e.totalSize || e.total;
			$(this.progessbar).css('width', (Math.floor(done/total*1000)/10)+'%');
		});
	}
	
	xhr.onreadystatechange = function(e) {
		if (this.readyState == 4) {
			if (this.callback) {
				this.callback(this.response, e);
			}
		}
	}
	
	xhr.open('post', module+'/store/'+store, true);
	xhr.send(fd);
},

cb.isNode = function(o) {
  return (
    typeof Node === "object" ? o instanceof Node : 
    o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
  );
},

cb.isElement = function(o) {
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement :
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
  );
}

cb.scrollTo = function (ele, time) {
	if (!time) {
		time = 1000;
	}
	$('html, body').animate({
        scrollTop: $(ele).offset().top
    }, time);
}
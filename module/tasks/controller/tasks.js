cb.define({
    
    xtype: 'controller',
    name: 'tasks',
    
    onload: function () {
        cb.loadAll([
            ['store', 'tasks', 'task'],
            ['view', 'common', 'base'],
            ['view', 'tasks', 'dashboard']
        ], function(){
            // TODO do after load
            //alert('loaded dashboard');
        });
    },
    
    changeStatus: function (dt) {
        dt.action = 'changeStatus';
        cb.load('store', 'tasks', 'task', dt);
    }
});
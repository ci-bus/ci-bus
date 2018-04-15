cb.define({
    
    xtype: 'controller',
    name: 'tasks',
    
    onload: function () {
        cb.loadAll([
            ['view', 'common', 'base'],
            ['view', 'tasks', 'dashboard']
        ], function(){
            // TODO do after load
            alert('loaded dashboard');
        });
    }
});
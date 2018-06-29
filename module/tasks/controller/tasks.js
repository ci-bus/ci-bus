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
    },
    
    changeTask: function (ev) {
        var id = ev.dataTransfer.getData("id");
        var callout = cb.getCmp('#' + id).down('callout');
        var r = confirm("Change task?");
        if (r == true) {
            if (cb.getCmp(ev.target).getType() == 'td') {
                var td = cb.getCmp(ev.target);
            } else {
                var td = cb.getCmp(ev.target).up('td');
            }
            
            if ($.isNumeric(td.getOpt('status'))) {
                
                if (cb.getCmp(ev.target).getType() == 'callout') {
                    cb.getCmp(ev.target).after(document.getElementById(id));
                } else if (cb.getCmp(ev.target).up('callout')) {
                    cb.getCmp(ev.target).up('callout').after(document.getElementById(id));
                } else {
                    td.append(document.getElementById(id));
                }
                
                var new_status = td.getOpt('status');
                var user_id = td.getRecord().user? td.getRecord().user.id: callout.getRecord().task_user_id;
                var task_id = callout.getRecord().id;
                cb.ctr('tasks', 'changeStatus', {
                    'new_step': new_status,
                    'user_id': user_id,
                    'task_id': task_id
                });
            }
            if (new_status) {
                callout.removeClass('pull-left').css('margin-right', 0);
            } else {
                callout.addClass('pull-left').css('margin-right', 10);
            }
        }
        callout.css('opacity', '');
    },
    
    allowDrop: function (ev) {
        ev.preventDefault();
    },
    
    drag: function (ev) {
        ev.dataTransfer.setData("id", ev.target.parentElement.id);
        cb.getCmp('#' + ev.target.parentElement.id).down('callout').css('opacity', '0.2');
    }
});
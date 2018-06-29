cb.define({
    
    xtype: 'controller',
    name: 'tasks',
    
    onload: function () {
        // Tynimce
        $.cachedScript("libraries/tinymce/js/tinymce/tinymce.min.js", "js").done(function () {
            $.cachedScript("libraries/tinymce/js/tinymce/themes/modern/theme.min.js", "js");
        });
        $.cachedScript("libraries/tinymce/js/tinymce/skins/lightgray/content.min.css", "css");
        $.cachedScript("libraries/tinymce/js/tinymce/skins/lightgray/skin.min.css", "css");
        // Load all
        cb.loadAll([
            ['store', 'tasks', 'task'],
            ['view', 'common', 'base'],
            ['component', 'tasks', 'taskMini'],
            ['component', 'tasks', 'taskMaxi'],
            ['component', 'tasks', 'taskCreateForm'],
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
        if (cb.getCmp(ev.target).getType() == 'td') {
            var td = cb.getCmp(ev.target);
        } else {
            var td = cb.getCmp(ev.target).up('td');
        }
        var new_status = td.getOpt('status');
        var user_id = td.getRecord().user? td.getRecord().user.id: callout.getRecord().task_user_id;
        if (new_status != callout.getRecord().step || user_id != callout.getRecord().task_user_id) {
            var r = confirm('Change task ' + callout.getRecord().title + '?');
            if (r == true) {
                if ($.isNumeric(td.getOpt('status'))) {
                    if (cb.getCmp(ev.target).up('component')) {
                        cb.getCmp(ev.target).up('component').after(document.getElementById(id));
                    } else {
                        td.append(document.getElementById(id));
                    }
                    var task_id = callout.getRecord().id;
                    callout.getRecord().step = new_status;
                    callout.getRecord().task_user_id = user_id;
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
        }
        callout.css('opacity', '');
    },
    
    allowDrop: function (ev) {
        ev.preventDefault();
    },
    
    drag: function (ev) {
        ev.dataTransfer.setData("id", ev.target.parentElement.id);
        cb.getCmp('#' + ev.target.parentElement.id).down('callout').css('opacity', '0.2');
    },
    
    openTask: function (record) {
        var pp = cb.getComponent('taskMaxi','items');
        pp.record = record;
        cb.popup(pp);
    },
    
    openCreateForm: function () {
        var pp = cb.getComponent('taskCreateForm','items');
        cb.popup(pp);
        var tasks = cb.getStore('tasks').getData();
        for (var i = 0; i < tasks.length; i ++) {
            cb.getCmp("#createtaskform").down('dropdown').addItems({
                xtype: 'a',
                value: tasks[i].user.id,
                text: tasks[i].user.name,
                click: function () {
                    var a = cb.getCmp(this),
                        val = a.getOpt('value'),
                        txt = a.getOpt('text'),
                        id = a.up().up().attr('aria-labelledby');
                    
                    cb.getCmp('#' + id).html(txt + ' <span class="caret"></span>');
                    cb.getCmp("#createtaskform").down('dropdown').getOpt().value = val;
                }
            });
        }
        cb.sto(function () {
            tinymce.init({
                selector: 'textarea.form-control'
            });
        }, 200);
    }
});
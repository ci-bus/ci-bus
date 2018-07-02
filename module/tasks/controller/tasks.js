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
            ['store', 'tasks', 'project'],
            ['store', 'tasks', 'user'],
            ['view', 'common', 'base'],
            ['component', 'tasks', 'taskMicro'],
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
        var pp = cb.clone(cb.getComponent('taskMaxi', 'items'));
        pp.record = record;
        cb.popup(pp);
    },
    
    openCreateForm: function () {
        var pp = cb.clone(cb.getComponent('taskCreateForm', 'items'));
        cb.popup(pp);
        
        cb.sto(function () {
            tinymce.init({
                selector: 'textarea.form-control'
            });
        }, 200);
    },
    
    createNewTask: function () {
        var panel = cb.getCmp('#createtaskform'),
            title = panel.down('input').getValue(),
            user = panel.down('dropdown').getValue(),
            step = panel.down('dropdown', 1).getValue(),
            project = panel.down('dropdown', 2).getValue(),
            type = panel.down('dropdown', 3).getValue(),
            content = tinyMCE.get('tcf_content').getContent();
        
        cb.load('store', 'tasks', 'task', {
            action: 'create',
            title: title,
            user: user.id,
            step: step,
            project: project.id,
            type: type,
            content: content
        }, function () {
            tinymce.EditorManager.execCommand('mceRemoveEditor',true, 'tcf_content');
            cb.effect('#createtaskform', {
                type: 'flipout',
                dire: 'up',
                fn: function(){
                    $(this).parent().remove();
                }
            });
        });
    }
});
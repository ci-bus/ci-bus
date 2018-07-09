cb.define({
    
    xtype: 'controller',
    name: 'tasks',
    
    onload: function () {
        if (getCookie('task_user_id')) {
            if (!cb.getConfig('user_id')) {
                cb.setConfig('user_id', getCookie('task_user_id'));
            }
            this.loadDashboard();
        } else {
            cb.load('component', 'tasks', 'login', function () {
                var pp = cb.clone(cb.getComponent('login', 'items'));
                cb.popup(pp);
            });
        }
    },
    
    loadDashboard: function () {
        var me = this;
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
            ['component', 'tasks', 'taskMini'],
            ['component', 'tasks', 'taskMaxi'],
            ['component', 'tasks', 'taskCreateForm'],
            ['view', 'tasks', 'dashboard']
        ], function () {
            // Check new chat messages
            me.checkNewMessage();
            // Interval
            cb.sit(function () {
                me.checkNewMessage();
            }, 3000);
        });
    },
    
    checkNewMessage: function () {
        var chat_opened = cb.getConfig('chat_opened');
        cb.load('store', 'tasks', 'chat', {
            task_id: chat_opened,
            action: 'check',
            chat_opened: chat_opened
        }, this.processChatAlerts);
    },
    
    processChatAlerts: function () {
        var data = cb.getStore('chat_alert').getData();
        for (var i = 0; i < data.length; i ++) {
            var dt = data[i];
            if (cb.getCmp('#task-mini-' + dt.task_id).down) {
                var label = cb.getCmp('#task-mini-' + dt.task_id).down('label');
                if (dt.reg == "0" || (dt.reg != "0" && dt.new_msg != "0")) {
                    if (label.css('display') == 'none') {
                        cb.ctr('tasks', 'showChatNotification', dt.task_id);
                    }
                    label.html(dt.all_msg).show();
                } else {
                    label.html('').hide();
                }
            }
        }
    },
    
    showChatNotification: function (task_id) {
        if (Notification.permission != "granted") {
            Notification.requestPermission();
        }
        var noti = new Notification('Ci-bus Task managenment', {
            icon: "https://raw.githubusercontent.com/ci-bus/ci-bus/master/assets/img/cb_logo.png",
            body: "New chat message"
        });
        noti.onclick = function () {
            noti.close();
            if (cb.getConfig('chat_opened')) {
                tinymce.EditorManager.execCommand('mceRemoveEditor', true, 'doc-textarea');
                cb.getCmp('#task-maxi-' + cb.getConfig('chat_opened')).destroy();
                cb.setConfig('chat_opened', 0);
            }
            $('#task-mini-' + task_id).click();
        };
        cb.sto(function () {
            noti.close();
        }, 5000)
    },
    
    sendChat: function (dt) {
        if (dt['msg']) {
            cb.load('store', 'tasks', 'chat', {
                action: 'send',
                msg: dt['msg'],
                task_id: dt['r'].id
            });
        }
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
    
    openTask: function (r) {
        if (r) {
            cb.setConfig('task_opened', r.id);
            cb.setConfig('chat_opened', r.id);
            var pp = cb.clone(cb.getComponent('taskMaxi', 'items'));
            cb.popup(pp, r);
        }
    },
    
    openCreateForm: function () {
        var pp = cb.clone(cb.getComponent('taskCreateForm', 'items'));
        cb.popup(pp);
        
        cb.sto(function () {
            tinymce.init({
                selector: '#tcf_content'
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
    },
    
    loadTaskContents: function (r) {
        cb.load('store', 'tasks', 'chat', {
            'task_id': r.id
        })
    },
    
    doLogin: function () {
        var me = this;
        cb.send('task-login', 'tasks', 'login', function(){
            if (cb.getConfig('user_id')) {
                setCookie('task_user_id', cb.getConfig('user_id'));
                me.loadDashboard();
            } else {
                cb.getCmp('panel').changeType('danger');
                cb.sto(function () {
                    cb.getCmp('panel').changeType('primary');
                }, 1000);
            }
        });
    },
    
    logout: function () {
        cb.setConfig('user_id', null);
        delCookie('task_user_id');
        location.reload();
    } 
});
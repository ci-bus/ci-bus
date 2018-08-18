cb.define({
    xtype: 'controller',
    name: 'webtesting',
    
    onload: function () {
        cb.loadAll([
            ['view', 'common', 'base'],
            ['store', 'webtesting', 'main', {action: 'get_texts'}],
            ['view', 'webtesting', 'main']
        ], function () {
            
        });
    }
});
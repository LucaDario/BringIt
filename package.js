Package.describe({
    name: 'bringit',
    version: '0.0.1',
    summary: '',
    git: 'https://github.com/NPE-Developers/bringit'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use([
        'monolith',
        'jquery',
        'coffeescript',
        'ecmascript',
        'underscore',
        'templating',
        'session',
        'less',
        'random',
        'rocketchat:lib',
        'rocketchat:ui-message',
        'vue:vue@1.0.8'
    ]);

    // api.addFiles('bringit.js');

});

Package.onTest(function(api) {
    api.use([
        'jquery',
        'ecmascript',
        'practicalmeteor:mocha',
        'practicalmeteor:chai',
        'practicalmeteor:sinon',
        'monolith'
    ]);

});


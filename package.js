Package.describe({
    name: 'bringit',
    version: '0.0.1',
    summary: 'Real-time multi-user shopping list',
    git: 'https://github.com/NPE-Developers/bringit'
});

Npm.depends({
    "can": "3.5.1",
    "can-stache": "3.0.20",
    "dependency-injection-es6": "1.2.1",
    "es6-event-emitter" : "1.8.2",
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use([
        'jquery',
        'ecmascript',
        'underscore',
        'templating',
        'session',
        'less',
        'random',
        'rocketchat:lib',
        'rocketchat:ui-message',
        'fourseven:scss@3.9.0',
        'ejson',
        'monolith'
    ]);

    api.use(['templating'],
                'client');

    api.addFiles(['client/GeneralView.js',
                    'client/event/SaveListEvent.js',
                    'client/view/list/create/CreateListView.js',
                     'client/view/list/create/presenter/CreateListViewPresenter.js',
                    'client/view/list/create/view/CreateListViewImpl.js',
                    'client/view/list/create/view/CreateListViewImplContainer.js',

                    'client/view/list/input/view/stylesheets/input.scss',
                    'client/view/list/input/view/input.html',
                    'client/view/list/input/view/input.js',
                    'data/ListData.js',
                    'data/ListItem.js',


                    'client/view/list/create/tabBar.js'],'client');

    api.addFiles(['server/publications/addList.js',
        'server/usecase/ManageListsUseCase.js',
        'server/database/DatabaseSource.js'],'server');
});

Package.onTest(function(api) {
    api.use([
    	'coffeescript',
      'jquery',
      'ecmascript',
      'practicalmeteor:mocha',
      'practicalmeteor:chai',
      'practicalmeteor:sinon'
    ]);

	api.use('templating', 'client');
});


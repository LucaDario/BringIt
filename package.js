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
    "bootstrap-jquery" : "3.3.2",
    "bootbox" : "4.4.0"
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
        'fourseven:scss@3.9.0',
        'ejson',
        'monolith'
    ]);

    api.use(['templating'],
        'client');

    api.addFiles([
        'client/bringit/Bringit.js',
        'bringit.js',
        'client/modal.css',
        'client/chat/ChatSource.js',
        'client/GeneralView.js',
        'client/event/SaveListEventEmitter.js',
        'client/event/SaveItemEventEmitter.js',
        'client/view/list/create/CreateListView.js',
        'client/view/list/create/presenter/CreateListViewPresenter.js',
        'client/view/list/create/view/CreateListViewImpl.js',
        'client/view/list/input/view/stylesheets/input.scss',
        'client/view/list/input/view/input.html',
        'client/view/list/input/view/input.js',
        'client/view/item/inputitem/view/inputItem.html',
        'client/view/item/inputitem/view/InputItemInfoViewImpl.js',
        'client/view/item/inputitem/InputItemInfoView.js',
        'client/view/item/inputitem/presenter/InputItemInfoViewPresenter.js',
        'client/view/item/showinfoitem/ShowInfoItem.js',
        'client/view/list/ShareListWithGroup/view/ShareWithGroupViewImpl.js',
        'client/view/list/ShareListWithGroup/ShareWithGroupView.js',
        'client/view/list/ShareListWithGroup/presenter/ShareWithGroupViewPresenter.js',
        'client/view/list/shareListWithContact/view/ShareWithContactViewImpl.js',
        'client/view/list/shareListWithContact/ShareWithContactView.js',
        'client/view/list/shareListWithContact/presenter/ShareWithContactViewPresenter.js',
        'client/usecase/ShowPopupUseCase.js',
        'client/bringit/bringit.less',
        'client/view/list/delete/DeleteListView.js',
        'client/view/list/delete/presenter/DeleteListViewPresenter.js',
        'client/view/list/delete/view/DeleteListViewImpl.js',
        'client/usecase/popup.html',
        'data/ListData.js',
        'data/ListItem.js',
        'client/view/list/create/tabBar.js',
        'client/messageActionButton.js'
    ],'client');

    api.addFiles([
            'server/publications/addList.js',
            'server/publications/sendMessage.js',
            'server/publications/sharePermissionsContact.js',
            'server/publications/removePermissionContact.js',
            'server/usecase/ManageListsUseCase.js',
            'server/usecase/ShareListUseCase.js',
            'server/methods/getUsers.js',
            'server/methods/getMessage.js',
            'server/methods/getIdUser.js',
            'server/database/DatabaseSource.js',
            'server/publications/updateItemInDb.js',
            'server/publications/deleteList.js',
            'server/publications/addItemInList.js',
            'server/publications/sendMessageToUser.js',
            'server/publications/deleteItem.js'
        ],
        'server');
});

Package.onTest(function(api) {
    api.versionsFrom('1.4.1.1');
    api.use([
        'coffeescript',
        'jquery',
        'ecmascript',
        'practicalmeteor:mocha',
        'practicalmeteor:chai',
        'practicalmeteor:sinon',
        'monolith',
        'lmieulet:meteor-coverage@1.1.4'
    ]);

    api.use('templating', 'client');
    api.use('mongo',['client','server']);

    api.addFiles([
        'client/view/list/ShareListWithGroup/view/ShareWithGroupViewImpl.test.js',
        'client/view/list/create/view/CreateListViewImpl.test.js',
        'client/view/list/create/presenter/CreateListViewPresenter.test.js',
        'client/view/list/delete/presenter/DeleteListViewPresenter.test.js',
        'client/view/list/delete/view/DeleteListViewImpl.test.js',
        'client/view/list/input/presenter/InputListInfoViewPresenter.test.js',
        'client/view/list/input/view/InputListInfoViewImpl.test.js',
        'client/view/list/ShareListWithGroup/presenter/ShareWithGroupViewPresenter.test.js',
        'client/view/list/ShareListWithGroup/view/ShareWithGroupViewImpl.test.js',
        'client/view/list/shareListWithContact/view/ShareWithContactViewImpl.test.js',
        'client/view/list/shareListWithContact/presenter/ShareWithContactViewPresenter.test.js',
        'client/view/item/inputitem/presenter/InputItemInfoViewPresenter.test.js',
        'client/view/item/inputitem/view/InputItemInfoViewImpl.test.js',
        'client/test/testSistema.js',
        'client/test/testIntegrazione.js'
    ], 'client');

    api.addFiles([
        'server/usecase/GetItemInfoUseCase.test.js',
        'server/usecase/GetListInfoUseCase.test.js',
        'server/usecase/ManageListUseCase.test.js',
        'server/usecase/ModifyListUseCase.test.js',
        'server/usecase/ShareListUseCase.test.js',
        'server/database/DatabaseSource.test.js'
    ], 'server');


});



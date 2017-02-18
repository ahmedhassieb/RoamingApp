/// <reference path="../../../../typings/index.d.ts" />
var app;
(function (app) {
    var views;
    (function (views) {
        var layout;
        (function (layout) {
            var header = (function () {
                function header($rootScope, $state, appSession, dialogs) {
                    this.$state = $state;
                    this.dialogs = dialogs;
                    this.languages = {};
                    this.currentLanguage = {};
                    this.menu = {};
                    this.currentMenuName = {};
                    var self = this;
                    self.languages = abp.localization.languages;
                    self.currentLanguage = abp.localization.currentLanguage;
                    self.menu = abp.nav.menus.MainMenu;
                    self.currentMenuName = $state.current.menu;
                    self.getShownUserName = function () {
                        if (!abp.multiTenancy.isEnabled) {
                            return appSession.user.userName;
                        }
                        else {
                            if (appSession.tenant) {
                                return appSession.tenant.tenancyName + '\\' + appSession.user.userName;
                            }
                            else {
                                return '.\\' + appSession.user.userName;
                            }
                        }
                    };
                    self.loadProfile = function () {
                        console.log('inisde profile load method');
                        self.dialogs.create('/App/Main/views/profile/modal.cshtml', 'app.views.profile.modal', appSession.user, { windowClass: 'profile-modal-lg' }, 'vm');
                    };
                    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                        self.currentMenuName = toState.menu;
                    });
                    abp.event.on('abp.notifications.received', function (userNotification) {
                        console.log(userNotification);
                    });
                }
                header.inject = [
                    '$rootScope',
                    '$state',
                    'appSession',
                    'dialogs'
                ];
                return header;
            }());
            layout.header = header;
        })(layout = views.layout || (views.layout = {}));
    })(views = app.views || (app.views = {}));
})(app || (app = {}));
var myapp = angular.module("app");
myapp.controller('app.views.layout.header', app.views.layout.header);

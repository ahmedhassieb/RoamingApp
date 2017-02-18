
/// <reference path="../../../../typings/index.d.ts" />

module app.views.layout {

    export class header {

        private languages: any = {};
        private currentLanguage: any = {};
        private menu: any = {};
        private currentMenuName: any = {};

        private getShownUserName: () => void;
        private loadProfile: () => void;

        public static inject = [
            '$rootScope',
            '$state',
            'appSession',
            'dialogs'
        ];
        constructor($rootScope: ng.IRootScopeService, private $state: any,
            appSession: app.appSession, private dialogs: any) {

            var self = this;

            self.languages = abp.localization.languages;
            self.currentLanguage = abp.localization.currentLanguage;

           self.menu = abp.nav.menus.MainMenu;
            self.currentMenuName = $state.current.menu;

            self.getShownUserName = function () {

                if (!abp.multiTenancy.isEnabled) {

                    return appSession.user.userName;
                } else {
                    if (appSession.tenant) {

                        return appSession.tenant.tenancyName + '\\' + appSession.user.userName;
                    } else {
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
    }
}
var myapp = angular.module("app");
myapp.controller('app.views.layout.header', app.views.layout.header);
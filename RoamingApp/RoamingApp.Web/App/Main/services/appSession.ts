/// <reference path="../../../typings/index.d.ts" />

module app {
    export class appSession {
        static $inject = ['abp.services.app.session'];
        public user: abp.services.app.userLoginInfoDto = <abp.services.app.userLoginInfoDto>{};
        public tenant: abp.services.app.tenantLoginInfoDto = <abp.services.app.tenantLoginInfoDto>{};
        constructor(sessionService: abp.services.app.session) {
            var self = this;
         
            sessionService.getCurrentLoginInformations({ async: false }).success(function (result) {
                self.user = result.user;
                self.tenant = result.tenant;
            });
        }
    }
}

angular.module('app').service('appSession', app.appSession);
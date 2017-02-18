/// <reference path="../../../../typings/index.d.ts" />
module app.views.users {
    export class createModal {

        public user: any = {};
        public createUser: () => void;
        public cancel: () => void;

        public static $inject = [
            '$scope',
            '$uibModalInstance',
            'abp.services.app.user'
        ];

        constructor($scope: ng.IScope, private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private userService: abp.services.app.user) {
            var self = this;

            self.user = {
                isActive: true
            };

            self.createUser = () => {
                abp.ui.setBusy(null,
                    self.userService.createUser(self.user).success(function () {
                        abp.notify.info(abp.localization.localize('SavedSuccessfully', 'SavedSuccessfully'));
                        self.$uibModalInstance.close();
                    }));

            }

            self.cancel = () => {
                self.$uibModalInstance.dismiss();
            };
        }
    }
}

angular.module('app').controller('app.views.users.createModal', app.views.users.createModal);
/// <reference path="../../../../typings/index.d.ts" />

module app.views.users {

    export class index {
        public users: any;

        public getUsers: () => void;
        public openUserCreationModal: () => void;

        public static $inject = [
            '$scope',
            '$uibModal',
            'abp.services.app.user'
        ];

        constructor($scope: ng.IScope, $uibModal: ng.ui.bootstrap.IModalService, private userService: abp.services.app.user) {
            var self = this;
            self.users = [];
            self.getUsers = () => {
                abp.ui.setBusy(null,
                    self.userService.getUsers({})
                        .success(function (result) {
                            self.users = result.items;
                        }));
            };
            self.openUserCreationModal = function () {
                var modalInstance = $uibModal.open({
                    templateUrl: '/App/Main/views/users/createModal.cshtml',
                    controller: 'app.views.users.createModal as vm',
                    backdrop: 'static'
                }); modalInstance.result.then(function () {
                    self.getUsers();
                });
            };
        }
    }
}

angular.module('app').controller('app.views.users.index', app.views.users.index);


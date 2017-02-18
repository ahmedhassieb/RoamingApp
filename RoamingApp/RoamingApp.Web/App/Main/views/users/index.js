/// <reference path="../../../../typings/index.d.ts" />
var app;
(function (app) {
    var views;
    (function (views) {
        var users;
        (function (users) {
            var index = (function () {
                function index($scope, $uibModal, userService) {
                    this.userService = userService;
                    var self = this;
                    self.users = [];
                    self.getUsers = function () {
                        abp.ui.setBusy(null, self.userService.getUsers({})
                            .success(function (result) {
                            self.users = result.items;
                        }));
                    };
                    self.openUserCreationModal = function () {
                        var modalInstance = $uibModal.open({
                            templateUrl: '/App/Main/views/users/createModal.cshtml',
                            controller: 'app.views.users.createModal as vm',
                            backdrop: 'static'
                        });
                        modalInstance.result.then(function () {
                            self.getUsers();
                        });
                    };
                }
                index.$inject = [
                    '$scope',
                    '$uibModal',
                    'abp.services.app.user'
                ];
                return index;
            }());
            users.index = index;
        })(users = views.users || (views.users = {}));
    })(views = app.views || (app.views = {}));
})(app || (app = {}));
angular.module('app').controller('app.views.users.index', app.views.users.index);

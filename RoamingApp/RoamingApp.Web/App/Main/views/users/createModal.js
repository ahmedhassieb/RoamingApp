/// <reference path="../../../../typings/index.d.ts" />
var app;
(function (app) {
    var views;
    (function (views) {
        var users;
        (function (users) {
            var createModal = (function () {
                function createModal($scope, $uibModalInstance, userService) {
                    this.$uibModalInstance = $uibModalInstance;
                    this.userService = userService;
                    this.user = {};
                    var self = this;
                    self.user = {
                        isActive: true
                    };
                    self.createUser = function () {
                        abp.ui.setBusy(null, self.userService.createUser(self.user).success(function () {
                            abp.notify.info(abp.localization.localize('SavedSuccessfully', 'SavedSuccessfully'));
                            self.$uibModalInstance.close();
                        }));
                    };
                    self.cancel = function () {
                        self.$uibModalInstance.dismiss();
                    };
                }
                createModal.$inject = [
                    '$scope',
                    '$uibModalInstance',
                    'abp.services.app.user'
                ];
                return createModal;
            }());
            users.createModal = createModal;
        })(users = views.users || (views.users = {}));
    })(views = app.views || (app.views = {}));
})(app || (app = {}));
angular.module('app').controller('app.views.users.createModal', app.views.users.createModal);

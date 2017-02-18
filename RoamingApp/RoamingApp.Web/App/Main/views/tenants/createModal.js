/// <reference path="../../../../typings/index.d.ts" />
var app;
(function (app) {
    var views;
    (function (views) {
        var tenants;
        (function (tenants) {
            var createModal = (function () {
                function createModal($scope, $modalInstance, tenantService) {
                    this.tenantService = tenantService;
                    var self = this;
                    self.tenant = {
                        tenancyName: '',
                        name: '',
                        adminEmailAddress: '',
                        connectionString: ''
                    };
                    self.save = function () {
                        abp.ui.setBusy(null, self.tenantService.createTenant(self.tenant)
                            .success(function () {
                            abp.notify.info(abp.localization.localize('SavedSuccessfully', 'SavedSuccessfully'));
                            $modalInstance.close();
                        }).finally(function () {
                            abp.ui.clearBusy();
                        }));
                    };
                    self.cancel = function () {
                        $modalInstance.dismiss();
                    };
                }
                createModal.$inject = [
                    '$scope', '$modalInstance', 'abp.services.app.tenant'
                ];
                return createModal;
            }());
            tenants.createModal = createModal;
        })(tenants = views.tenants || (views.tenants = {}));
    })(views = app.views || (app.views = {}));
})(app || (app = {}));
angular.module('app').controller('app.views.tenants.createModal', app.views.tenants.createModal);

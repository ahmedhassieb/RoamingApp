/// <reference path="../../../../typings/index.d.ts" />

module app.views.tenants {
    export class createModal {
        public tenant: any;
        public save : ()=> void ;
        public cancel: () => void;
        public static $inject = [
            '$scope', '$modalInstance', 'abp.services.app.tenant'
        ];
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, private tenantService: abp.services.app.tenant) {
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
    }
}
angular.module('app').controller('app.views.tenants.createModal', app.views.tenants.createModal);
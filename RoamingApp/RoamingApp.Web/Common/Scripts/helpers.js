var App = App || {};
(function () {

    var appLocalizationSource = abp.localization.getSource('RoamingApp');
    App.localize = function () {
        return appLocalizationSource.apply(this, arguments);
    };

})(App);
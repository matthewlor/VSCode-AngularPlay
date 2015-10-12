var app;
(function (app) {
    var commom;
    (function (commom) {
        angular.module('common.services', ['ngResource']);
    })(commom = app.commom || (app.commom = {}));
})(app || (app = {}));

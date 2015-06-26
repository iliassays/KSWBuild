"use strict";
(function () {
    angular.module('kswDirectiveModule')
        .directive("kswComposeSignal", ["$parse",
            function ($parse) {
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: "views/directives/kswComposeSignal.html",
                    controller: function ($scope, $element) {

                    },
                    link: function (scope, element, attrs) {

                    }
                };
            }]);
})();
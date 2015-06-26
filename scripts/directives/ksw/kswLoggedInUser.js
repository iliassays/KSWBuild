"use strict";
(function () {
    angular.module('kswDirectiveModule')
        .directive("kswLoggedInUser", function ($parse) {
            return {
                restrict: "A",
                scope: {
                    currentUserPhoto: '@'
                },
                controller:function($scope, $element, $attrs){

                },
                link: function (scope, element, attrs) {
                    attrs.$observe('currentUserPhoto', function(value) {
                        element.css({
                            'background-image': "url("+value+")",
                            'width': '60px',
                            'background-size': '100% 100%',
                            'background-repeat': 'no-repeat'
                        });
                    });
                }
            }
        });
})();
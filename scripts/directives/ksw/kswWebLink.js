"use strict";
(function () {
    angular.module('kswDirectiveModule')
        .directive("kswWebLink", function ($window) {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    var linkUrl = attrs.url;
                    element.bind('click',function(){
                        $window.open(linkUrl,'_blank');
                        $window.focus();
                    });
                }
            }
        });
})();
"use strict";
(function () {
    angular.module('kswDirectiveModule')
        .directive("kswOnScroll", function (EventService) {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {

                    element.bind('scroll',function(){
                        EventService.trigger("onBodyScroll");
                    });
                }
            }
        });
})();
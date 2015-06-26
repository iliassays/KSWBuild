"use strict";
(function () {
    angular.module('kswDirectiveModule')
        .directive("kswUpdateStringArea", function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {

                    var updateAreaString = attrs.string.replace(/(<vote[^>]*>|<attribute[^>]*>|<user[^>]*>)/g,'<span>')
                                                        .replace(/(<\/vote>|<\/attribute>|<\/user>)/g,'</span>');
                    element.html(updateAreaString);
                }
            }
        });
})();
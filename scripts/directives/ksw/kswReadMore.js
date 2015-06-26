"use strict";
(function () {
    angular.module('kswDirectiveModule')
        .directive("kswReadMore", function ($timeout) {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {

                    var content = attrs.content;
                    var moreOption = angular.element('<a class="readmore"> ....More</a>');
                    var lessOption = angular.element('<a class="readless"> ^Less</a>');

                    if (content.length > 150) {
                        content = content.substr(0, 140);
                        element.html(content).append(moreOption);
                    } else {
                        element.html(content);
                    }

                    function updateContent() {
                        if (element.text().length < 151) {
                            element.html(attrs.content).append(lessOption);
                            element.find('a').bind('click', updateContent);
                        } else {
                            element.html(attrs.content.substr(0, 140)).append(moreOption);
                            element.find('a').bind('click', updateContent);
                        }
                    }
                    element.find('a').bind('click', updateContent);
                }
            }
        });
})();
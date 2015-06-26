"use strict";
(function(){
    angular.module("kswDirectiveModule")
        .directive("kswIsAppeared",["$window", function($window){
            var $win = angular.element($window);
            return {
                restrict: "A",
                scope : {
                    handler: '&'
                },
                link:function(scope,element,attrs){

                    function isAppeared(){
                        var $elem = element;
                        var $window = $(window);

                        var docViewTop = $window.scrollTop();
                        var docViewBottom = docViewTop + $window.height();

                        var elemTop = $elem.offset().top;
                        var elemBottom = elemTop + $elem.height();
                        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
                    }
                    $win.on('scroll', function (e) {
                        console.log('ff');
                        if(isAppeared()){
                            console.log('ff');
                        }
                    });
                }
            }
        }]);
})();
"use strict";
(function(){
    angular.module("kswDirectiveModule")
        .directive("kswDynamicHeight",["$window",function($window){
            return {
                link:function(scope,element,attr){
                    var window = angular.element($window);

                    function getCurrentHeight(){
                        var reduceHeight = attr.reduce;
                        if(reduceHeight){
                          return  angular.element(attr.parent).height() -reduceHeight;
                        }
                        return angular.element(attr.parent).height();
                    }

                    element.css({'height':getCurrentHeight()});

                    window.bind('resize',function(){
                        element.css({'height':getCurrentHeight()});
                    });
                }
            }
        }]);
})();
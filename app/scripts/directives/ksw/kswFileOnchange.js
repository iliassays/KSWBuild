"use strict";
(function(){
    angular.module('kswDirectiveModule')
        .directive("kswFileOnChange",function($parse){
            return {
                restrict: "A",
                scope : {
                   kswFileOnChange: '&'
                },
                controller:function($scope, $element,$attrs){

                    var updateFile = function () {
                        $scope.kswFileOnChange();
                        $scope.$apply();
                    };

                    $scope.$watch(function () {
                    }, function (value) {
                        if (!value) {
                            $element.bind('change', updateFile);
                        }
                    });


                },
                link: function (scope, element,attrs,ctrl) {

                }
            };
        });
})();
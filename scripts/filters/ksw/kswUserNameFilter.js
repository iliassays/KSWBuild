"use strict";
(function(){
    angular.module('kswFilterModule')
        .filter('kswUserNameFilter',function(){
            return function(input){
                return input.replace(/<\/?(user|attribute)\b[^<>]*>/g, "").replace(" commented.","");
            }
        });
})();
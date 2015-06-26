(function(){
    angular.module('kswFilterModule')
        .filter('kswUrlFilter',["ApiService",function(ApiService){
            return function(input){

                return ApiService.apiUrl + "/"+ input;
            }
        }]);
})();
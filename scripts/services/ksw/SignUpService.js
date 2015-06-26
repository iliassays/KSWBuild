"use strict";
(function(){
    angular.module("app")
        .factory("SignUpService",["ApiService",function(ApiService){
            var register = function(email){
               var data = {
                   email:email,
                   clientURI:""
               };
                return ApiService.post("/api/register",data);
            }
            return{
                register:register
            }
        }]);
})();
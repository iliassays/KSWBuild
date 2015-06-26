"use strict";
(function () {
    angular.module('app')
        .factory('LoginService', ["ApiService", function (ApiService) {

            var signOut = function () {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("accountId");
            };

            var sendLoginRequest = function (data) {
                return ApiService.post("/api/login", data);
            };

            return {
                sendLoginRequest: sendLoginRequest,
                signOut: signOut
            };
        }]);
})();
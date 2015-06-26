"use strict";
(function () {
    angular.module("app")
        .controller("currentAccountCtrl", [
            "$scope", "EventService", "UserContextService", "LoginService", "$location", "$rootScope", "LoggerService",
            function ($scope, EventService, UserContextService, LoginService, $location, $rootScope, LoggerService) {
                //EventService.on('signedIn', function () {
                //    $scope.corporateConnections = UserContextService.getCorporateConnection();
                //    $scope.personalAccountInfo = UserContextService.getPersonalAccountInfo();
                //    UserContextService.changeCurrentlySignedAsAccount(true, $scope.personalAccountInfo);
                //    $scope.currentAccount = UserContextService.getCurrentAccountInfo();
                //});
                $scope.currentAccount = UserContextService.getCurrentAccountInfo();
                $scope.corporateConnections = UserContextService.getCorporateConnection();
                $scope.personalAccountInfo = UserContextService.getPersonalAccountInfo();

                $scope.changeAccount = function (account, isPersonal) {
                    UserContextService.changeCurrentlySignedAsAccount(isPersonal, account);
                    $scope.currentAccount = UserContextService.getCurrentAccountInfo();
                };

                $scope.signOut = function () {
                    LoginService.signOut();
                    $rootScope.isLoggedIn = false;
                    $location.path('/');

                };
            }
        ]);
})();
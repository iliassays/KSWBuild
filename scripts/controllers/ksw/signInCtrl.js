'use strict';
(function () {
    angular.module('app')
        .controller('signInCtrl',
        ['$scope',
            'LoginService',
            '$location',
            '$rootScope',
            'EventService',
            'MixPanelService',
            'UserContextService',
            '$state',
            'LoggerService',
            function ($scope, LoginService, $location, $rootScope, EventService,
                      MixPanelService, UserContextService,$state,LoggerService) {
                MixPanelService.track("Login Page");

                if (UserContextService.isLoggedIn()) {
                    EventService.trigger('signedIn');
                    $state.go('app.accounts');
                }

                //$scope.user = {
                //    loginEmail: "brian.tobey123@gmail.com",
                //    loginPassword: "@ddinstagram",
                //    clientURI: "NO_CLIENT_URI",
                //    timeOffset: 360,
                //    deviceId:"3036205801742285013458501820760104018013402423402308740622061044101202541709024832",
                //    clientUriExpiryDate:"2015-05-08T07:44:42.000Z",
                //    appId:"knotsuite"
                //}

                //$scope.user = {
                //     loginEmail: "brian.tobey123@gmail.com",
                //    loginPassword: "@ddinstagram",
                //    clientURI: "NO_CLIENT_URI",
                //    timeOffset: 360
                //}

                $scope.user = {
                    loginEmail: "",
                    loginPassword: "",
                    clientURI: "NO_CLIENT_URI",
                    timeOffset: 360
                };


                $scope.loginNow = function () {
                    LoginService.sendLoginRequest($scope.user).then(function (response) {
                        var data = response.data;
                        if (data.accountStatus == 2) {
                            LoggerService.log(response.data);
                            UserContextService.saveCurrentUserData(data.userObj);
                            UserContextService.changeCurrentlySignedAsAccount(true, data.userObj);
                            EventService.trigger('signedIn');
                            EventService.trigger('updateProfilePicture', data.userObj);
                            $state.go('app.accounts',{accountId:data.userObj.accountId});
                        } else {
                        }
                    });
                };

                $scope.loginAlert = function () {

                }

            }]);
})();


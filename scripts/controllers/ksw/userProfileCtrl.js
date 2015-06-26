"use strict";
(function () {
    angular.module("app")
        .controller("userProfileCtrl", ["$scope", "$stateParams", "UserContextService","AwardService","LoggerService",
            function ($scope, $stateParams, UserContextService,AwardService,LoggerService) {

                UserContextService.getProfileById($stateParams.accountId)
                    .then(function(response){
                        LoggerService.log(response.data);
                        $scope.userProfile = response.data.connData;
                    });

                AwardService.getAwardListByUserId($stateParams.accountId)
                    .then(function(response){
                        LoggerService.log(response.data);
                        $scope.userProfile.awardList = response.data.data.awardList;
                    });
            }]);
})();
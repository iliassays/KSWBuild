"use strict";
(function () {
    angular.module("app")
        .controller("nominateAwardCtrl", ["$scope", "UserContextService", "$rootScope", "$stateParams", "AwardService","LoggerService",
            function ($scope, UserContextService, $rootScope, $stateParams, AwardService,LoggerService) {

                $scope.connections = {
                    isShow: false,
                    people: []
                };

                $scope.selectedCandidate = {};

                var awardId = $stateParams.awardId;

                $scope.award = $rootScope.selectedAward;

                var currentAccount = UserContextService.getCurrentlySignedAsAccount();

                $scope.awardNominationData = {
                    whoCanPledge: currentAccount.isPersonalAccount == true ? currentAccount.accountId : currentAccount.accountInfo.id,
                    candidates: [],
                    templateId: $scope.award._id,
                    initialPledgeRequired: $scope.initialPledgeRequired,
                    comment: "",
                    accessToken: ""
                };

                $scope.whoCanPledge = currentAccount.isPersonalAccount == true ? "Public" : currentAccount.accountInfo.title;

                $scope.showConnection = function () {
                    UserContextService.getCurrentAccountConnections('').then(function (response) {
                        var data = response.data;
                        $scope.connections.people = data;
                        $scope.connections.isShow = true;
                    });
                };

                $scope.selectCandidate = function (person) {
                    $scope.selectedCandidate = person;
                    $scope.connections.isShow = false;
                };

                $scope.nominate = function () {
                    $scope.awardNominationData.candidates.push($scope.selectedCandidate.id);
                    AwardService.nominateAward($scope.awardNominationData)
                        .then(function (response) {
                        });
                };

                $scope.selectedItem = null;
                $scope.searchText = null;
                $scope.simulateQuery = false;
                $scope.isDisabled = false;

                $scope.querySearch = function (query) {
                    return UserContextService.getCurrentAccountConnections(query).then(function (response) {
                        return response.data;
                    });
                };

                $scope.selectedItemChange = function (item) {
                    $scope.selectedCandidate = $scope.selectedItem;
                };
            }]);
})();
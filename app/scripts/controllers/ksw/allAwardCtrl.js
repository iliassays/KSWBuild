"use strict";
(function () {
    angular.module("app")
        .controller("allAwardCtrl", ["$scope", "AwardService", "$state", "$rootScope", "LoggerService",
            function ($scope, AwardService, $state, $rootScope, LoggerService) {
                AwardService.getAllAwards()
                    .then(function (response) {
                        var data = response.data;
                        if (data.code) {
                            $scope.awards = data.data;
                            $scope.totalAwards = $scope.awards.length;
                            $scope.awardsGroup = {
                                "#UNTAGGED": []
                            };

                            var temp = angular.copy(data.data);

                            angular.forEach(temp, function (award) {
                                if (award.tags.length > 0) {
                                    angular.forEach(award.tags, function (tag) {
                                        if (!$scope.awardsGroup.hasOwnProperty(tag.tagName)) {
                                            $scope.awardsGroup[tag.tagName] = [];
                                        }
                                        $scope.awardsGroup[tag.tagName].push(award);
                                    });
                                } else {
                                    if (!$scope.awardsGroup.hasOwnProperty("#UNTAGGED")) {
                                        $scope.awardsGroup["#UNTAGGED"] = [];
                                    }
                                    $scope.awardsGroup["#UNTAGGED"].push(award);
                                }
                            });
                        }
                    });

                $scope.onAwardSelect = function (award) {
                    $rootScope.selectedAward = award;
                    $scope.award = award;
                    $state.go('award.nominate', {awardId: award._id});
                }
            }]);
})();
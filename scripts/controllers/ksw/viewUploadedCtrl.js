"use strict";
(function () {
    angular.module("app")
        .controller("viewUploadedCtrl", ["$scope", "SpaceService", "LoggerService", "$stateParams",
            function ($scope, SpaceService, LoggerService, $stateParams) {
                var spaceId = $stateParams.spaceId;
                $scope.space = {entityType: 'Uploaded'};
                SpaceService.getSpaceById(spaceId)
                    .then(function (response) {
                        LoggerService.log(response);
                        $scope.space = response.data.data;
                    });
                SpaceService.getFrequentAndRecentRecordAccess()
                    .then(function (response) {
                        LoggerService.log('getFrequentAndRecentRecordAccess');
                        LoggerService.log(response);
                    });
                SpaceService.getRelatedNeighboursWithRelation(spaceId)
                    .then(function (response) {
                        LoggerService.log('getRelatedNeighboursWithRelation');
                        LoggerService.log(response);
                    });
                SpaceService.getSpaceAscendantsBySpaceId(spaceId)
                    .then(function (response) {
                        LoggerService.log('getSpaceAscendantsBySpaceId');
                        LoggerService.log(response);
                    });
                SpaceService.getSpaceAttributes(spaceId)
                    .then(function (response) {
                        LoggerService.log('getSpaceAttributes');
                        LoggerService.log(response);
                    });
                SpaceService.getUpdateById(spaceId, 0)
                    .then(function (response) {
                        LoggerService.log('getUpdateById');
                        LoggerService.log(response);
                    });

                $scope.updateSpace = function () {
                    SpaceService.updateSpace($scope.space)
                        .then(function (response) {
                            LoggerService.log(response);
                        });
                };
            }]);
})();
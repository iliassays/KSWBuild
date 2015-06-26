"use strict";
(function () {
    angular.module("app")
        .controller("viewSpaceCtrl", ["$scope", "SpaceService", "$stateParams","$state","LoggerService",
            function ($scope, SpaceService, $stateParams,$state,LoggerService) {
                var parentSpaceId = $stateParams.parentSpaceId;
                $scope.groupCollection = {
                    entityType:{},
                    tagName:{}
                };

                $scope.spaceGroupBy = [
                    {key: "entityType", value: "Group by type"},
                    {key: "tagName", value: "Group by tag"}
                ];
                
                $scope.selectedSpaceGroup = $scope.spaceGroupBy[1];

                SpaceService.getSpaceElements(parentSpaceId)
                    .then(function (response) {
                        $scope.groupCollection["entityType"] = _.groupBy(response.data.data, function (m) {
                            return m.entityType;
                        });

                        angular.forEach(response.data.data, function (space) {
                            if (space.tags.length > 0) {
                                angular.forEach(space.tags, function (tag) {
                                    if (!$scope.groupCollection.tagName.hasOwnProperty(tag)) {
                                        $scope.groupCollection.tagName[tag] = [];
                                    }
                                    $scope.groupCollection.tagName[tag].push(space);
                                });
                            } else {
                                if (!$scope.groupCollection.tagName.hasOwnProperty("#UNTAGGED")) {
                                    $scope.groupCollection.tagName["#UNTAGGED"] = [];
                                }
                                $scope.groupCollection.tagName["#UNTAGGED"].push(space);
                            }
                        });

                        if ($scope.selectedSpaceGroup) {
                            $scope.selectedSpaces = $scope.groupCollection[$scope.selectedSpaceGroup.key];
                        } else {
                            $scope.selectedSpaces = $scope.groupCollection["tagName"];
                        }
                        LoggerService.log($scope.groupCollection);
                    });

                $scope.spaceGroupOnSelect = function(selectedSpaceGroup){
                    if (selectedSpaceGroup) {
                        $scope.selectedSpaces = $scope.groupCollection[selectedSpaceGroup.key];
                    }
                };

                $scope.spaceOnSelect = function(space){
                    switch (space.entityType){
                        case 'Space':
                            $state.go('space.viewAll', {parentSpaceId: space._id});
                            break;
                        case 'WebLink':
                            $state.go('space.viewWebLink', {spaceId: space._id});
                            break;
                        case 'Uploaded':
                            $state.go('space.viewUploaded', {spaceId: space._id});
                            break;
                        case 'Text':
                            $state.go('space.viewText', {spaceId: space._id});
                            break;
                    }
                };
            }]);
})();
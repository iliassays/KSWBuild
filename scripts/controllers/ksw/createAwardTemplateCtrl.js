"use strict";
(function () {
    angular.module("app")
        .controller("createAwardTemplateCtrl", ["$scope", "UserContextService", "LoggerService",
            function ($scope, UserContextService, LoggerService) {
                $scope.awardTemplate = {
                    title: '',
                    description: '',
                    initialPledgeRequired: 5,
                    tags: [],
                    imageUri: 'api/defaultImages/image/award.png',
                    awardBelongsTo: {}
                };

                $scope.newTemplatePicure = {
                    imageData: '',
                    fileBase64: '',
                    name: ''
                };

                UserContextService.getUserOwnedOrganization()
                    .then(function (response) {
                        $scope.corporateConnections = response.data;
                    });

                $scope.addTag = function (tagName) {
                    $scope.awardTemplate.tags.push({
                        tagName: tagName
                    });
                };

                $scope.onTemplateChange = function () {
                    var templatePicture = window.event.target.files[0];
                    var fileReader = new FileReader();
                    fileReader.onload = function (fileLoadedEvent) {
                        $scope.newTemplatePicure.imageData = fileLoadedEvent.target.result;
                        $scope.newTemplatePicure.fileBase64 = fileLoadedEvent.target.result.replace(/^data(.*?),/, '');
                        $scope.newTemplatePicure.name = templatePicture.name;
                        $scope.$apply();
                    };
                    fileReader.readAsDataURL(templatePicture);
                };

                $scope.saveNewTemplate = function () {
                    if ($scope.newTemplatePicure.fileBase64 != '') {
                        SignalService.attachNewFileMobile($scope.newTemplatePicure)
                            .then(function (response) {
                                $scope.awardTemplate.imageUri = response.data.url;
                                AwardService.saveAwardTemplate($scope.awardTemplate)
                                    .then(function (response) {
                                        $rootScope.selectedAward = response.data.data;
                                        $state.go('award.nominate', {awardId: $rootScope.selectedAward._id});
                                    });
                            });
                    } else {
                        AwardService.saveAwardTemplate($scope.awardTemplate)
                            .then(function (response) {
                                $rootScope.selectedAward = response.data.data;
                                $state.go('award.nominate', {awardId: $rootScope.selectedAward._id});
                            });
                    }
                };
            }]);
})();
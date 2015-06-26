"use strict";
(function () {
    angular.module("app")
        .controller("createConnectionCtrl", ["$scope", "ConnectionRequestService","LoggerService",
            function ($scope, ConnectionRequestService,LoggerService) {
                ConnectionRequestService.getOrganizationsConnectionRequestCount()
                    .then(function (response) {
                        $scope.organizationsConnectionRequest = response.data;
                        $scope.selectedAccount = $scope.organizationsConnectionRequest[0];
                        $scope.accountOnChange($scope.selectedAccount);
                    });
                $scope.selectedConnections = [];

                $scope.accountOnChange = function (selectedAccount) {
                    ConnectionRequestService.getCreateConnectionsData(selectedAccount)
                        .then(function (response) {
                            $scope.allConnections = response.data;
                        });
                };

                $scope.acceptRequest = function (request) {
                    ConnectionRequestService.acceptConnectionRequests(request)
                        .then(function (response) {
                            if (response.data.code == 1) {
                                $scope.accountOnChange($scope.selectedAccount);
                            } else {
                            }
                        });
                };

                $scope.rejectRequest = function (request) {
                    ConnectionRequestService.rejectConnectionRequests(request)
                        .then(function (response) {
                            if (response.data.code == 1) {
                                $scope.accountOnChange($scope.selectedAccount);
                            } else {
                            }
                        });

                };

                $scope.acceptAll = function () {

                    if (!$scope.allConnections.connectionRequests.length) {
                        return;
                    }

                    ConnectionRequestService.acceptConnectionRequests($scope.allConnections.connectionRequests)
                        .then(function (response) {
                            FoundationApi.publish('loaderModal', 'close');
                            if (response.data.code == 1) {
                                $scope.accountOnChange($scope.selectedAccount);
                            } else {
                            }
                        });
                };

                $scope.sendRequest = function (recommended) {
                    ConnectionRequestService.sendConnectionRequests($scope.selectedAccount, recommended)
                        .then(function (response) {
                            if (response.data.code == 1) {
                                $scope.accountOnChange($scope.selectedAccount);
                            } else {
                            }
                        });
                };

                $scope.sendRequestAll = function () {
                    if (!$scope.allConnections.recommendedConnections.length) {
                        return;
                    }

                    ConnectionRequestService.sendConnectionRequests($scope.selectedAccount, $scope.allConnections.recommendedConnections)
                        .then(function (response) {
                            if (response.data.code == 1) {
                            } else {
                            }
                        });
                };

                $scope.updateSearchResults = function (searchKey) {
                    if (searchKey == "") {
                        $scope.searchResults = [];
                        return;
                    }
                    ConnectionRequestService.getSuggestedConnections($scope.selectedAccount, searchKey)
                        .then(function (response) {
                            if ($scope.searchKey != "") {
                                $scope.searchResults = response.data;
                            }
                        });
                };

                $scope.selectResult = function (result) {
                    $scope.selectedConnections.push(result);
                    $scope.searchResults = [];
                    $scope.searchKey = '';
                };

                $scope.sendInvitation = function (connection) {
                    ConnectionRequestService.sendConnectionRequests($scope.selectedAccount, connection)
                        .then(function (response) {
                            $scope.selectedConnections = [];
                            if (response.data.code == 1) {
                                $scope.accountOnChange($scope.selectedAccount);
                            } else {
                            }
                        });
                };

                $scope.removeInvitation = function (connection) {
                    var connectionIndex = $scope.selectedConnections.indexOf(connection);
                    $scope.selectedConnections.splice(connectionIndex, 1);
                };

                $scope.sendInvitationToAll = function () {
                    if (!$scope.selectedConnections.length) {
                        return;
                    }

                    ConnectionRequestService.sendConnectionRequests($scope.selectedAccount, $scope.selectedConnections)
                        .then(function (response) {
                            $scope.selectedConnections = [];
                            if (response.data.code == 1) {
                            } else {
                            }
                        });
                };

            }]);
})();
"use strict";
(function () {
    angular.module("app")
        .factory("ConnectionRequestService", ["ApiService", "UserContextService", function (ApiService, UserContextService) {
            var getOrganizationsConnectionRequestCount = function () {
                var data = {
                    accessToken: UserContextService.getAccessToken()
                }
                return ApiService.post("/api/connections/getOrganizationsConnectionRequestCount", data);
            };
            var getCreateConnectionsData = function (account) {
                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    entityId: account._id,
                    entityType: account.entityType
                };
                return ApiService.post("/api/connections/getCreateConnectionsData", data);
            };
            var acceptConnectionRequests = function (object) {
                var connectionRequests = [];

                if (angular.isArray(object)) {
                    angular.forEach(object, function (request) {
                        connectionRequests.push({connectionRequestId: request._id, relation: request.relation});
                    });
                } else {
                    connectionRequests.push({connectionRequestId: object._id, relation: object.relation});
                }

                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    connectionRequests: connectionRequests,
                    requestingEntityId: null,
                    requestingEntityType: null
                };
                return ApiService.post("/api/connections/acceptConnectionRequests", data);
            };

            var rejectConnectionRequests = function (request) {
                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    connectionRequests: [{connectionRequestId: request._id, connectionToBeEdited: null}],
                    requestingEntityId: null,
                    requestingEntityType: null
                };
                return ApiService.post("/api/connections/rejectConnectionRequests", data);
            };

            var sendConnectionRequests = function (selectedAccount, object) {

                var connectionRequests = [];

                if (angular.isArray(object)) {
                    angular.forEach(object, function (obj) {
                        connectionRequests.push(
                            {
                                firstEntityId: selectedAccount._id,
                                firstEntityType: selectedAccount.entityType,
                                secondEntityId: obj.entityId,
                                secondEntityType: obj.entityType,
                                secondEntityEmail: null,
                                relation: obj.relation,
                                message: null
                            }
                        );
                    });
                } else {
                    connectionRequests.push(
                        {
                            firstEntityId: selectedAccount._id,
                            firstEntityType: selectedAccount.entityType,
                            secondEntityId: object.entityId,
                            secondEntityType: object.entityType,
                            secondEntityEmail: null,
                            relation: object.relation,
                            message: null
                        }
                    );
                }

                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    connectionRequests: connectionRequests,
                    requestingEntityId: null,
                    requestingEntityType: null
                };


                return ApiService.post("/api/connections/sendConnectionRequests", data);
            };

            var getSuggestedConnections = function (account, searchKey) {
                var entityId = account == null ? null : account._id;
                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    entityId: entityId,
                    searchKey: searchKey
                };
                return ApiService.post("/api/connections/getSuggestedConnections", data);
            }

            return {
                getOrganizationsConnectionRequestCount: getOrganizationsConnectionRequestCount,
                getCreateConnectionsData: getCreateConnectionsData,
                acceptConnectionRequests: acceptConnectionRequests,
                rejectConnectionRequests: rejectConnectionRequests,
                sendConnectionRequests: sendConnectionRequests,
                getSuggestedConnections: getSuggestedConnections
            };
        }]);
})();
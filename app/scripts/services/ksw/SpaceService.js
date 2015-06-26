"use strict";
(function () {
    angular.module("app")
        .factory("SpaceService", ["ApiService", "UserContextService","LoggerService",
            function (ApiService, UserContextService,LoggerService) {
                var getTotalSpaceCountAccessLevel = function () {
                    var currentlySignedAs = UserContextService.getCurrentlySignedAsAccount();
                    var data = {
                        orgId: currentlySignedAs.isPersonalAccount == true ? null : currentlySignedAs.accountInfo.id,
                        accessLevel: "Shared",
                        accessToken: UserContextService.getAccessToken()
                    };
                    if (currentlySignedAs.isPersonalAccount) {
                        return ApiService.post("/api/spaces/getTotalSpaceCountForPersonalByAccessLevel", data);
                    }
                    return ApiService.post("/api/spaces/getTotalSpaceCountForOrganizationByAccessLevel", data);
                };
                var getSpaceElements = function (parentSpaceId) {
                    var currentlySignedAs = UserContextService.getCurrentlySignedAsAccount();
                    var data = {
                        parentSpaceId: parentSpaceId,
                        orgId: currentlySignedAs.isPersonalAccount == true ? null : currentlySignedAs.accountInfo.id,
                        accessToken: UserContextService.getAccessToken()
                    };
                    return ApiService.post("/api/spaces/getSpaceElements", data);
                }
                var getSpaceById = function (spaceId) {
                    var currentlySignedAs = UserContextService.getCurrentlySignedAsAccount();
                    var data = {
                        id: spaceId,
                        selectedOrgId: currentlySignedAs.isPersonalAccount == true ? null : currentlySignedAs.accountInfo.id,
                        accessToken: UserContextService.getAccessToken()
                    };
                    return ApiService.post("/api/spaces/getSpaceById", data);
                };
                var getSpaceAscendantsBySpaceId = function (spaceId) {
                    var data = {
                        spaceId: spaceId,
                        accessToken: UserContextService.getAccessToken()
                    };
                    return ApiService.post("/api/graph/getSpaceAscendantsBySpaceId", data);
                };
                var getRelatedNeighboursWithRelation = function (spaceId) {
                    var data = {
                        dbId: spaceId,
                        accessToken: UserContextService.getAccessToken()
                    };
                    return ApiService.post("/api/graph/getRelatedNeighboursWithRelation", data);
                };
                var getUpdateById = function (spaceId, offset) {
                    var currentlySignedAs = UserContextService.getCurrentlySignedAsAccount();
                    var data = {
                        spaceId: spaceId,
                        orgId: currentlySignedAs.isPersonalAccount == true ? null : currentlySignedAs.accountInfo.id,
                        offset: offset,
                        count: 10,
                        destination: "Space",
                        accessToken: UserContextService.getAccessToken()
                    };
                    return ApiService.post("/api/spaces/getSpaceById", data);
                };
                var getSpaceAttributes = function (spaceId) {
                    var data = {
                        spaceId: spaceId,
                        accessToken: UserContextService.getAccessToken()
                    };
                    return ApiService.post("/api/spaces/getSpaceAttributes", data);
                };
                var getFrequentAndRecentRecordAccess = function () {
                    var currentlySignedAs = UserContextService.getCurrentlySignedAsAccount();
                    var data = {
                        accessToken: UserContextService.getAccessToken(),
                        selectedOrgId: currentlySignedAs.isPersonalAccount == true ? null : currentlySignedAs.accountInfo.id
                    };
                    return ApiService.post("/api/account/getFrequentAndRecentRecordAccess", data);
                }
                var updateSpace = function (space) {
                    var data = {
                        spaceId: space._id,
                        title: space.spaceName,
                        contents: space.docContents,
                        fileUrl: space.fileUrl,
                        imgSrc: space.imgSrc,
                        entityType: space.entityType,
                        accessToken: UserContextService.getAccessToken()
                    };
                    LoggerService.log(data);
                    return ApiService.post("/api/spaces/update", data);
                };
                return {
                    getTotalSpaceCountAccessLevel: getTotalSpaceCountAccessLevel,
                    getUpdateById: getUpdateById,
                    getSpaceElements: getSpaceElements,
                    getSpaceById: getSpaceById,
                    getSpaceAscendantsBySpaceId: getSpaceAscendantsBySpaceId,
                    getRelatedNeighboursWithRelation: getRelatedNeighboursWithRelation,
                    getSpaceAttributes: getSpaceAttributes,
                    getFrequentAndRecentRecordAccess: getFrequentAndRecentRecordAccess,
                    updateSpace: updateSpace
                };
            }])
})();
"use strict";
(function () {
    angular.module("app")
        .factory("hashTagService", ["ApiService", "UserContextService",
            function (ApiService, UserContextService) {
                var getHotHashTagsByPersona = function () {
                    var currentlySignedAs = UserContextService.getCurrentlySignedAsAccount();
                    var data = {
                        accessToken: UserContextService.getAccessToken(),
                        orgId: currentlySignedAs.isPersonalAccount == true ? null : currentlySignedAs.accountInfo.id,
                        limit: 3
                    };
                    return ApiService.post("/api/tag/getHotHashTagsByPersona",data);
                };
                return {
                    getHotHashTagsByPersona: getHotHashTagsByPersona
                }
            }]);
})();
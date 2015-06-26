"use strict";
(function () {
    angular.module("application")
        .factory("OrgService", ["ApiService", "UserContextService",
            function (ApiService, UserContextService) {
                var createOrg = function (org) {
                    var data = {
                        accessToken: UserContextService.getAccessToken(),
                        organizationName: org.name,
                        domain: org.domain
                    };
                    return ApiService.post("/api/registerOrganization", data);
                };
                return {
                    createOrg: createOrg
                };
            }]);
})();
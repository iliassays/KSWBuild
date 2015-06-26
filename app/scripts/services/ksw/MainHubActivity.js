"use strict";
(function () {
    angular.module("application")
        .factory("MainHubActivityService", ["UserContextService", "ApiService", function (UserContextService, ApiService) {
            var getMainHubActivities = function (offset) {

                var currentlySignedAs = UserContextService.getCurrentlySignedAsAccount();

                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    orgId: currentlySignedAs.isPersonalAccount == true ? null : currentlySignedAs.accountInfo.accountId,
                    offset: offset,
                    count: 10
                };

                return ApiService.post('/api/corporateHub/getMainHubActivities', data);
            };

            return {
                getMainHubActivities: getMainHubActivities
            }

        }]);
})();
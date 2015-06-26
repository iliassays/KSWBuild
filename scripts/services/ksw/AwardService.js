"use strict";
(function () {
    angular.module("app")
        .factory("AwardService", ["ApiService", "UserContextService", function (ApiService, UserContextService) {
            var url = "";
            var getAllAwards = function () {
                var data = {
                    accessToken: UserContextService.getAccessToken()
                };
                return ApiService.post('/api/getAllAwards', data);
            };

           var getAwardListByUserId = function (userId) {
                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    userId: userId,
                    limit: 20
                };
                return ApiService.post('/api/getAwardListByUserId', data);
            };

            var getNominatedAwardById = function (userId) {
                var data = {
                    userId: userId,
                    accessToken: UserContextService.getAccessToken()
                };
                return ApiService.post('/api/getNominatedAwardsByUserId', data);
            };

            var nominateAward = function (award) {
                award.accessToken = UserContextService.getAccessToken();
                return ApiService.post('/api/nominateAward', award);
            };

            var saveAwardTemplate = function (awardTemplate) {
                var data = {
                    __v: 0,
                    title: awardTemplate.title,
                    description: awardTemplate.description,
                    imageUri: awardTemplate.imageUri,
                    _id: "",
                    initialPledgeRequired: awardTemplate.initialPledgeRequired,
                    awardScope: awardTemplate.awardBelongsTo._id,
                    tags: awardTemplate.tags,
                    accessToken: UserContextService.getAccessToken()
                };
                return ApiService.post('/api/saveAwardTemplate',data);
            }

            return {
                getAllAwards: getAllAwards,
                getNominatedAwardById: getNominatedAwardById,
                nominateAward: nominateAward,
                saveAwardTemplate:saveAwardTemplate,
                getAwardListByUserId:getAwardListByUserId
            }
        }]);
})();
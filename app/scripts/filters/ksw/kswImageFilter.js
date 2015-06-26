"use strict";
(function () {
    angular.module("kswFilterModule")
        .filter("kswImageFilter", ["ApiService", function (ApiService) {
            return function (input, imageSize, id, isOrg) {

                if (isOrg) {
                    return ApiService.fileCdnServer +
                        '/getOrgProfilePictureThumbnail/' +
                        id +
                        '/' +
                        imageSize +
                        '/org.jpg';
                }

                return ApiService.fileCdnServer +
                    '/getProfilePictureThumbnail/' +
                    id +
                    '/' +
                    imageSize +
                    '/profile.jpg';
            }
        }]);
})();
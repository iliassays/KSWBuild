"use strict";
(function () {
    angular.module("app").
        factory("SignalService",
        ["UserContextService", "ApiService", function (UserContextService, ApiService) {
            var getConnections = function (searchKey) {

                var currentlySignedAs = UserContextService.getCurrentlySignedAsAccount();


                if (currentlySignedAs.isPersonalAccount) {
                    var data = {
                        searchKey: searchKey == "" ? null : searchKey,
                        accessToken: UserContextService.getAccessToken(),
                        orgIds: [],
                        includeOrgs: false
                    }
                    return ApiService.post('/personalHub/personalConnections', data);

                } else {

                    var data = {
                        searchKey: searchKey == "" ? null : searchKey,
                        accessToken: UserContextService.getAccessToken(),
                        orgIds: [currentlySignedAs.accountInfo.id],
                        includeOrgs: false
                    }
                    return ApiService.post('/api/connections/getAllEmployeesOfOrgs', data);
                }
            }

            var getSignals = function (offset) {
                var currentlySignedAs = UserContextService.getCurrentlySignedAsAccount();
                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    orgId: currentlySignedAs.isPersonalAccount == true ? null : currentlySignedAs.accountInfo.id,
                    offset: offset,
                    count: 10
                };
                return ApiService.post('/corporateHub/getMainHubActivities', data);
            };

            var saveFeedback = function (fbType, signalId) {
                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    signalId: signalId,
                    fbType: fbType
                };
                return ApiService.post('/api/signals/saveFeedback', data);
            }

            var attachNewFileMobile = function (attachment) {
                var data = {
                    filename: attachment.name,
                    fileBase64: attachment.fileBase64,
                    accessToken: UserContextService.getAccessToken()
                }
              return ApiService.post('/api/signals/attachFile_Mobile', data);
             // return ApiService.postWithHeader('/uploadFile', data,ApiService.fileCdnServer);
            }

            var saveComment = function (signal) {

                signal.newComment.objectTags = [];

                angular.forEach(signal.newComment.taggedPeople, function (person) {
                    signal.newComment.objectTags.push({
                        objId: person.id,
                        objPicture: person.picture,
                        objType: person.entityType,
                        objTitle: person.title
                    });
                });

                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    content: signal.newComment.message,
                    spaceId: null,
                    rootId: signal.doc._id,
                    verb: "commented",
                    object: null,
                    activityType: signal.doc.activityType,
                    objectTags: {
                        objectTags: signal.newComment.objectTags,
                        hashTags: [],
                        privateTags: []
                    },
                    ogdataObject: null,
                    attachments: signal.newComment.attachmentUrls,
                    orgId: null,
                    visibility: {
                        scope: "Self",
                        privacy: "AllConnection"
                    }
                };
                return ApiService.post('/api/signals/saveSignal', data);
            }

            var saveSignal = function (signal) {

                signal.objectTags = [];

                angular.forEach(signal.taggedPeople, function (person) {
                    var object = {
                        objId: person.id,
                        objPicture: person.smallpicture,
                        objType: person.entityType,
                        objTitle: person.title
                    }
                    signal.objectTags.push(object);
                });

                var currentlySignedAs = UserContextService.getCurrentlySignedAsAccount();

                if (currentlySignedAs.isPersonalAccount) {
                    signal.visibility = {
                        scope: "Self",
                        privacy: "AllConnection"
                    }
                } else {
                    signal.visibility = {
                        scope: "Organization",
                        privacy: "AllEmployee"
                    }
                }

                var data = {
                    accessToken: UserContextService.getAccessToken(),
                    content: signal.content,
                    spaceId: null,
                    rootId: null,
                    verb: null,
                    object: null,
                    activityType: "Composed-DashBoard",
                    objectTags: {
                        objectTags: signal.objectTags,
                        hashTags: [],
                        privateTags: []
                    },
                    ogdataObject: {
                        ogTitle: "",
                        ogDescription: "",
                        ogImage: "",
                        isOgData: false,
                        url: ""
                    },
                    attachments: signal.attachmentUrl,
                    orgId: currentlySignedAs.isPersonalAccount == true ? null : currentlySignedAs.accountInfo.id,
                    visibility: signal.visibility
                };
                return ApiService.post('/api/signals/saveSignal', data);
            }

            return {
                getConnections: getConnections,
                getSignals: getSignals,
                saveFeedback: saveFeedback,
                attachNewFileMobile: attachNewFileMobile,
                saveComment: saveComment,
                saveSignal: saveSignal
            }
        }]);
})();
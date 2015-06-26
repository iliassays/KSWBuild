"use strict";
(function () {
    angular.module("app")
        .factory("ChatService", ["ApiService", "UserContextService", function (ApiService, UserContextService) {
            var getMessageHistory = function () {
                var data = {
                    actorId: UserContextService.getCurrentUserId(),
                    accessToken: UserContextService.getAccessToken()
                };
                return ApiService.post('/messages/getMessageHistory', data, ApiService.chatServerUrl);
            };

            var getMessages = function (conversation) {
                var data = {
                    conversationId: conversation._id,
                    actorId: conversation.participants[0]._id,
                    accessToken: UserContextService.getAccessToken()
                };
                return ApiService.post('/messages/getMessages', data, ApiService.chatServerUrl);
            };

            var sendMessage = function(selectedConversation){
                var data = {
                    conversationId:selectedConversation.conversation._id,
                    message: selectedConversation.newMessage,
                    actorId: UserContextService.getCurrentUserId(),
                    attachments:[],
                    accessToken:UserContextService.getAccessToken()
                };
                return ApiService.post('/messages/saveMessage', data, ApiService.chatServerUrl);
            };

            var createConversation = function(selectedConversation){
                var data = {
                    participants:[selectedConversation.conversation.target._id,UserContextService.getCurrentUserId()],
                    accessToken:UserContextService.getAccessToken()
                };
                return ApiService.post('/messages/createConversation', data, ApiService.chatServerUrl);
            };

            var getChatSocketIo = function(){
                return io.connect(ApiService.chatServerUrl,{ forceNew: true, query: 'accessToken=' + UserContextService.getAccessToken()});
            }

            return {
                getMessageHistory: getMessageHistory,
                getMessages : getMessages,
                sendMessage : sendMessage,
                createConversation : createConversation,
                getChatSocketIo:getChatSocketIo
            }
        }]);
})();
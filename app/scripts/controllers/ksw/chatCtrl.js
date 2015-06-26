"use strict";
(function () {
    angular.module("app")
        .controller("chatCtrl", ["$scope", "ChatService", "UserContextService", "LoggerService",
            function ($scope, ChatService, UserContextService, LoggerService) {

                var chatSocket = ChatService.getChatSocketIo();

                $scope.selectedConversion = {
                    conversation: {},
                    messages: [],
                    newMessage: ''
                };

                var currentUserId = UserContextService.getCurrentUserId();

                ChatService.getMessageHistory().then(function (response) {
                    var data = response.data;
                    if (data.code) {
                        $scope.conversations = data.data;
                        if (!$scope.conversations.length) {
                            return;
                        }

                        angular.forEach($scope.conversations, function (conversation) {
                            if (conversation.participants[0]._id == currentUserId) {
                                conversation.target = conversation.participants[1];
                            } else {
                                conversation.target = conversation.participants[0];
                            }
                        });

                        $scope.selectedConversion.conversation = $scope.conversations[0];
                        ChatService.getMessages($scope.selectedConversion.conversation).then(function (response) {
                            var data = response.data;
                            if (data.code) {
                                $scope.selectedConversion.messages = data.data;
                            }
                        });
                    }
                });

                UserContextService.getCurrentAccountConnections('').then(function (response) {
                    $scope.personalConnections = response.data;
                });

                $scope.loadAllMessage = function (conversation) {
                    $scope.selectedConversion.conversation = conversation;
                    ChatService.getMessages(conversation).then(function (response) {
                        var data = response.data;
                        if (data.code) {
                            $scope.selectedConversion.messages = data.data;
                        }
                    });
                };

                $scope.sendNewMessage = function (selectedConversation) {
                    if (!selectedConversation.conversation._id) {

                        ChatService.createConversation(selectedConversation).then(function (response) {
                            var data = response.data;
                            if (data.code) {

                                var conversation = response.data.data;

                                if (conversation.participants[0]._id == currentUserId) {
                                    conversation.target = conversation.participants[1];
                                } else {
                                    conversation.target = conversation.participants[0];
                                }

                                selectedConversation.conversation = conversation;

                                ChatService.sendMessage(selectedConversation)
                                    .then(function (response) {

                                        var data = response.data;

                                        if (data.code) {
                                            selectedConversation.messages.push(data.data);
                                        }

                                        conversation.lastMessage = selectedConversation.newMessage;

                                        $scope.conversations.unshift(conversation);

                                        selectedConversation.newMessage = '';
                                    });
                            }
                        });
                    }
                    else {
                        ChatService.sendMessage(selectedConversation)
                            .then(function (response) {

                                var data = response.data;

                                if (data.code) {
                                    selectedConversation.messages.push(data.data);
                                }

                                selectedConversation.newMessage = '';
                            });
                    }
                }

                $scope.selectNewPeople = function (connection) {

                    $scope.selectedConversion.conversation = {};

                    $scope.selectedConversion.conversation.target = {
                        _id: connection.id,
                        firstName: connection.title,
                        lastName: ''
                    };

                    $scope.selectedConversion.messages = [];

                    $scope.selectedConversion.newMessage = '';
                }

                chatSocket.on("sisigma_chat_message", function (response) {

                    if (response) {

                        if ($scope.selectedConversion.conversation._id == response.conversationId) {

                            var messageIsExist = _.find($scope.selectedConversion.messages, {_id: response._id});

                            if (!messageIsExist) {
                                $scope.selectedConversion.messages.push(response);
                                $scope.$apply();
                            }
                        }
                    }
                });

                chatSocket.on("sisigma_chat_new_conversation", function (response) {
                    if (response) {

                        ChatService.getMessageHistory().then(function (response) {

                            if (response.code) {
                                $scope.conversations = [];

                                $scope.conversations = response.data;

                                angular.forEach($scope.conversations, function (conversation) {

                                    if (conversation.participants[0]._id == currentUserId) {
                                        conversation.target = conversation.participants[1];
                                    } else {
                                        conversation.target = conversation.participants[0];
                                    }

                                });
                            }
                        });
                    }
                });
            }]);
})();
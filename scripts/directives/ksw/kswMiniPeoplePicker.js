"use strict";
(function () {
    angular.module("kswDirectiveModule")
        .directive("kswMiniPeoplePicker", function () {
            return {
                restrict: "E",
                require:'ngIf',
                scope: {
                    people: '=',
                    tagThisPerson:'&',
                    comment:'='
                },
                controller:function($scope,$element){
                    $scope.selectPerson = function(person, comment){
                        var isExists = _.find(comment.taggedPeople,{id:person.id});
                        if(!isExists){
                            var commentMessage = [comment.message.slice(0, comment.caretPosition +1),
                                person.title, comment.message.slice(comment.caretPosition+1)].join('');
                            comment.taggedPeople.push(person);
                            comment.message = commentMessage;
                        }
                        comment.showMiniPeoplePicker = false;
                        $element.parent().find('textarea').focus();
                    }
                },
                replace: true,
                templateUrl: "views/directives/kswMiniPeoplePicker.html"
            }
        });
})();
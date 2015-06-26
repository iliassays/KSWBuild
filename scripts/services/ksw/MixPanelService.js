"use strict";
(function(){
    angular.module("app")
        .service("MixPanelService",[function(){
            this.isEnabled = false;
            this.track = function(eventName){
                if(this.isEnabled){
                    mixpanel.track(eventName);
                }
            }
        }]);
})();
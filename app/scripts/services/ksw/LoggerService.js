"use strict";
(function(){
    angular.module("app")
        .service("LoggerService",function(){
            this.isLoggerEnabled = false;
            this.log = function(message){
              if(this.isLoggerEnabled){
                  console.log(message);
              }
            };
        });
})();
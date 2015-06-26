"use strict";
(function(){
    angular.module('kswFilterModule')
        .filter('kswDateDifference',function(){
            return function(input){

                var diff = Math.floor(new Date() - new Date(input));
                var secs = Math.floor(diff/1000);
                var mins = Math.floor(secs/60);
                var hours = Math.floor(mins/60);
                var days = Math.floor(hours/24);
                var months = Math.floor(days/31);
                var years = Math.floor(months/12);
                months=Math.floor(months%12);
                days = Math.floor(days%31);
                hours = Math.floor(hours%24);
                mins = Math.floor(mins%60);
                secs = Math.floor(secs%60);

                var message = "";



                if(days<=0){
                   return new Date(input).toLocaleTimeString().toLowerCase() + " Today";
                }else{
                    message += days + " days ";
                    if(months>0 || years>0){
                        message += months + " months ";
                    }
                    if(years>0){
                        message += years + " years ";
                    }
                }

                return message +" ago";
            }
        });
})();
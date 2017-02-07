angular.module('myApp',['ngAnimate','chou.home'])
    .controller('myCtrl',['$scope','$interval',function($scope,$interval){
        $scope.nowPage='home-page';
        $scope.$on('to.banjiang.page',function(val,data){
            console.log(data);
            $scope.nowPage='gift-page';
        });

        $scope.$on('back.to.chou',function(evt,data){
            $scope.nowPage='chou-page';
        })
        /*var number=person.length;
        var intervalId=$interval(function(){
            number--;
            if(number==-1){
                number=person.length-1;
            };
            $scope.tempPerson=person[number];
            console.log($scope.tempPerson.name);
        },50)

        $scope.stop=function(){
            console.log(number);
            person.splice(number,1);
            console.log(person);
            $interval.cancel(intervalId);
        }

        $scope.start=function(){
            $interval.start(intervalId);
        }*/
    }])

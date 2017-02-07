angular.module('chou.home', [])
    .directive('homePage', function () {
        return {
            restrict: 'AE',
            scope: {},
            controller: function controller($scope,$interval,$timeout) {
                //第几轮抽奖
                $scope.roundNumber=0;
                //显示和隐藏被抽中的某个人
                $scope.awardPerson=false;
                //单轮被抽中的列表
                $scope.tempArray=[];
                $scope.showAwardsMask=false;

                //奖品数组
                $scope.giftArray=surprising;
                //遮罩层
                $scope.allPerson=shuffle(mask);
                //$scope.allPerson=shuffle(person);
                person=shuffle(person);
                console.log(person);
                $scope.shawNumber=60;
                var interValId;
                $scope.isFilter=false;
                $scope.start=function(){
                    if($scope.isFilter){
                        return;
                    }
                    if($scope.shawNumber>=60){
                        $scope.shawNumber=49;
                    }
                    $scope.isFilter=true;
                    interValId=$interval(function(){
                        $scope.shawNumber--;
                        if($scope.shawNumber==-1){
                            $scope.shawNumber=49;
                        }
                    },50)
                }



                $scope.stop=function(){
                    if(!$scope.isFilter){
                        return;
                    }
                    $scope.isFilter=false;
                    $interval.cancel(interValId);

                    //判断这个同学是不是已经被抽中过
                    hasSelected();

                    $scope.allPerson[$scope.shawNumber].portrait=person[$scope.shawNumber].portrait;
                    $scope.tempArray.push(person[$scope.shawNumber]);

                    $scope.awardPerson=true;
                    $('#win-per').css('display','block');
                    var timeOutId=$timeout(function(){
                        $scope.awardPerson=false;
                        $timeout.cancel(timeOutId);
                    },3000)
                    $scope.$digest();

                    function hasSelected(){
                        if($scope.roundNumber!=3){
                            console.log('-----------------第一二三轮');
                            if(person[$scope.shawNumber].select||person[$scope.shawNumber].name=='鲍总'){
                                $scope.shawNumber++;
                                if($scope.shawNumber>=person.length){
                                    $scope.shawNumber=0;
                                }
                                hasSelected();
                            }else{
                                person[$scope.shawNumber].select=true;
                            }
                        }else if($scope.roundNumber==3){
                            console.log('-----------------第四轮');
                            for(var i=0;i<person.length;i++){
                                if(person[i].name=='鲍总'){
                                    console.log(person[i]);
                                    $scope.shawNumber=i;
                                    break;
                                }
                            }
                        }

                    }
                }


                /*$scope.keyUp=function(e){
                    if($scope.awardPerson){
                        return;
                    }
                    var keycode = window.event ? e.keyCode : e.which;
                    if(keycode==32){
                        if($scope.isFilter||$scope.tempArray.length==0){
                            return;
                        }
                        $('#gift-win').css('display','block');
                        if($scope.showAwardsMask){
                            $scope.showAwardsMask=false;
                            $scope.shawNumber=60
                            $scope.tempArray=[];
                            var hideId=$timeout(function(){
                                $scope.roundNumber++;
                                $timeout.cancel(hideId);
                            },1000)
                        }else{
                            $scope.showAwardsMask=true;
                        }
                        $scope.$digest();
                    }
                    if(keycode==13){
                        if($scope.showAwardsMask){
                            return;
                        }
                        if($scope.isFilter){
                            $scope.stop();
                        }else{
                            $scope.start();
                        }
                    }
                    if(keycode==38||keycode==39||keycode==40||keycode==41){
                        var num=50;
                        var inId=$interval(function(){
                            num--;
                            if(num<=-1){
                                $interval.cancel(inId);
                            }
                            $scope.allPerson[num]=person[num]
                        },100);
                    }
                }*/

                $scope.keyUp=function(e){
                    if($scope.awardPerson){
                        return;
                    }
                    var keycode = window.event ? e.keyCode : e.which;
                    /*if(keycode==32){
                        if($scope.isFilter||$scope.tempArray.length==0){
                            return;
                        }
                        $('#gift-win').css('display','block');
                        if($scope.showAwardsMask){
                            $scope.showAwardsMask=false;
                            $scope.shawNumber=60
                            $scope.tempArray=[];
                            var hideId=$timeout(function(){
                                $scope.roundNumber++;
                                $timeout.cancel(hideId);
                            },1000)
                        }else{
                            $scope.showAwardsMask=true;
                        }
                        $scope.$digest();
                    }*/
                    if(keycode==13&&$scope.roundNumber<=4){
                        if($scope.roundNumber==0){
                            if($scope.tempArray.length<10){
                                if($scope.isFilter){
                                    $scope.stop();
                                }else{
                                    $scope.start();
                                }
                            }else{
                                $('#gift-win').css('display','block');
                                if($scope.showAwardsMask){
                                    $scope.showAwardsMask=false;
                                    $scope.shawNumber=60
                                    $scope.tempArray=[];
                                    var hideId=$timeout(function(){
                                        $scope.roundNumber++;
                                        $timeout.cancel(hideId);
                                    },1000)
                                }else{
                                    $scope.showAwardsMask=true;
                                }
                                $scope.$digest();
                            }
                        }else if($scope.roundNumber==1){
                            if($scope.tempArray.length<5){
                                if($scope.isFilter){
                                    $scope.stop();
                                }else{
                                    $scope.start();
                                }
                            }else{
                                $('#gift-win').css('display','block');
                                if($scope.showAwardsMask){
                                    $scope.showAwardsMask=false;
                                    $scope.shawNumber=60
                                    $scope.tempArray=[];
                                    var hideId=$timeout(function(){
                                        $scope.roundNumber++;
                                        $timeout.cancel(hideId);
                                    },1000)
                                }else{
                                    $scope.showAwardsMask=true;
                                }
                                $scope.$digest();
                            }
                        }else if($scope.roundNumber==2){
                            if($scope.tempArray.length<1){
                                if($scope.isFilter){
                                    $scope.stop();
                                }else{
                                    $scope.start();
                                }
                            }else{
                                $('#gift-win').css('display','block');
                                if($scope.showAwardsMask){
                                    $scope.showAwardsMask=false;
                                    $scope.shawNumber=60
                                    $scope.tempArray=[];
                                    var hideId=$timeout(function(){
                                        $scope.roundNumber++;
                                        $timeout.cancel(hideId);
                                    },1000)
                                }else{
                                    $scope.showAwardsMask=true;
                                }
                                $scope.$digest();
                            }
                        }else if($scope.roundNumber==3){
                            if($scope.tempArray.length<1){
                                if($scope.isFilter){
                                    $scope.stop();
                                }else{
                                    $scope.start();
                                }
                            }else{
                                $('#gift-win').css('display','block');
                                if($scope.showAwardsMask){
                                    $scope.showAwardsMask=false;
                                    $scope.shawNumber=60
                                    $scope.tempArray=[];
                                    var hideId=$timeout(function(){
                                        $scope.roundNumber++;
                                        $timeout.cancel(hideId);
                                    },1000)
                                }else{
                                    $scope.showAwardsMask=true;
                                }
                                $scope.$digest();
                            }
                        }

                    }
                    if(keycode==38||keycode==39||keycode==40||keycode==41){
                        var num=50;
                        var inId=$interval(function(){
                            num--;
                            if(num<=-1){
                                $interval.cancel(inId);
                            }
                            $scope.allPerson[num]=person[num]
                        },100);
                    }
                }

                document.onkeyup=$scope.keyUp;
                function shuffle(arr) {
                    var i, j, temp;
                    for (i = arr.length - 1; i > 0; i--) {
                        j = Math.floor(Math.random() * (i + 1));
                        temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                    return arr;
                };

            },
            link: function () {

            },
            templateUrl: 'html/home.html'
        }
    })

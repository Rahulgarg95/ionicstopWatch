// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('timerApp', ['ionic','angular-svg-round-progressbar']);

app.controller('timerCtrl', function($scope, $timeout) {
 $scope.myTimerFixed = 10;
  $scope.myTimer = {};
  $scope.myTimer.value = 10;
  $scope.myTimer.startbtn = false;
  $scope.myTimer.stopbtn = true;
  $scope.myTimerFixed = 10;
  var svg = document.getElementsByClassName('round-progress')[0];
  
  svg.onload = function(){
  $scope.radius = svg.getBoundingClientRect().width/2;
}

  var myTimerVariable;

  $scope.myCustomTimer = function(){
    $scope.myTimer.value--;

    if($scope.myTimer.value == 0) {
      $timeout.cancel(myTimerVariable);
      complete(false);
      return false;
    }

    myTimerVariable = $timeout($scope.myCustomTimer, 1000);
  }
  $scope.start = function() {
    $scope.myTimer.startbtn = true;
  $scope.myTimer.stopbtn = false;
      myTimerVariable = $timeout($scope.myCustomTimer, 1000);
  }

  $scope.stop = function() {
      $timeout.cancel(myTimerVariable);
      complete(true);
  }

  var complete = function(forceFulAbort) {
  if(forceFulAbort) {
    alert('You killed the damn timer');
  } else {
    alert('timer completed');
  }
  $scope.myTimer.startbtn = false;
  $scope.myTimer.stopbtn = true;
}

  $scope.getStyle = function(){
        var transform = 'translateY(-50%) translateX(-50%)';

        return {
            'top': '50%',
            'bottom': 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': $scope.radius/3.5 + 'px'
        };
    };
});




app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

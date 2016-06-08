'use strict';

/**
* @ngdoc function
* @name waitanimateApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the waitanimateApp
*/
angular.module('waitanimateApp')
.controller('MainCtrl', ['$scope', '$http', '$filter', '$timeout', '$location', '$anchorScroll', function($scope, $http, $filter, $timeout, $location, $anchorScroll) {

  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll.yOffset = 100;
    $anchorScroll();
   };

  $scope.egAnimations = {
    'wrench': {
      'keyframes': [
        ['0', 'transform:rotate(-12deg)'],
        ['10.66667', 'transform:rotate(12deg)'],
        ['13.33333', 'transform:rotate(24deg)'],
        ['24', 'transform:rotate(-24deg)'],
        ['26.66667', 'transform:rotate(-24deg)'],
        ['37.33333', 'transform:rotate(24deg)'],
        ['40', 'transform:rotate(24deg)'],
        ['50.66667', 'transform:rotate(-24deg)'],
        ['53.33333', 'transform:rotate(-24deg)'],
        ['64', 'transform:rotate(24deg)'],
        ['66.66667', 'transform:rotate(24deg)'],
        ['77.33333', 'transform:rotate(-24deg)'],
        ['80', 'transform:rotate(-24deg)'],
        ['90.66667', 'transform:rotate(24deg)'],
        ['100', 'transform:rotate(0deg)']
      ],
      'duration': 1.875,
      'animationTimingFunction': 'ease',
      'transform': '\n  transform-origin: 90% 35%;',
      'icon': 'wrench'
    },
    'shake': {
      'keyframes': [
        ['0', 'transform:rotate(-12deg)'],
        ['10.66667', 'transform:rotate(12deg)'],
        ['13.33333', 'transform:rotate(24deg)'],
        ['24', 'transform:rotate(-24deg)'],
        ['26.66667', 'transform:rotate(-24deg)'],
        ['37.33333', 'transform:rotate(24deg)'],
        ['40', 'transform:rotate(24deg)'],
        ['50.66667', 'transform:rotate(-24deg)'],
        ['53.33333', 'transform:rotate(-24deg)'],
        ['64', 'transform:rotate(24deg)'],
        ['66.66667', 'transform:rotate(24deg)'],
        ['77.33333', 'transform:rotate(-24deg)'],
        ['80', 'transform:rotate(-24deg)'],
        ['90.66667', 'transform:rotate(24deg)'],
        ['100', 'transform:rotate(0deg)']
      ],
      'duration': 1.875,
      'animationTimingFunction': 'ease',
      'icon': 'envelope'
    },
    'ring': {
      'keyframes': [
        ['0', 'transform: rotate(-15deg)'],
        ['10', 'transform: rotate(15deg)'],
        ['20', 'transform: rotate(-18deg)'],
        ['30', 'transform: rotate(18deg)'],
        ['40', 'transform: rotate(-22deg)'],
        ['50', 'transform: rotate(22deg)'],
        ['60', 'transform: rotate(-18deg)'],
        ['70', 'transform: rotate(18deg)'],
        ['80', 'transform: rotate(-12deg)'],
        ['90', 'transform: rotate(12deg)'],
        ['100', 'transform: rotate(0deg)']
      ],
      'duration': 0.4,
      'animationTimingFunction': 'ease',
      'transform': '\n  transform-origin: 50% 0px;',
      'icon': 'bell'
    },
    'vertical': {
      'keyframes': [
        ['0', 'transform:translate(0,-3px)'],
        ['18.18182', 'transform:translate(0,3px)'],
        ['36.36364', 'transform:translate(0,-3px)'],
        ['54.54545', 'transform:translate(0,3px)'],
        ['72.72727', 'transform:translate(0,-3px)'],
        ['90.90909', 'transform:translate(0,3px)'],
        ['100', 'transform:translate(0,0)']
      ],
      'duration': 0.44,
      'animationTimingFunction': 'ease',
      'icon': 'arrows-v'
    },
    'horizontal': {
      'keyframes': [
        ['0', 'transform:translate(0,0)'],
        ['16.66667', 'transform:translate(5px,0)'],
        ['33.33333', 'transform:translate(0,0)'],
        ['50.00000', 'transform:translate(5px,0)'],
        ['66.66667', 'transform:translate(0,0)'],
        ['83.33333', 'transform:translate(5px,0)'],
        ['100', 'transform:translate(0,0)']
      ],
      'duration': 0.72,
      'animationTimingFunction': 'ease',
      'icon': 'arrows-h'
    },
    'double-flash': {
      'keyframes': [
        ['0', 'opacity:1'],
        ['25', 'opacity:0'],
        ['50', 'opacity:1'],
        ['75', 'opacity:0'],
        ['100', 'opacity:1']
      ],
      'duration': 2,
      'animationTimingFunction': 'ease',
      'icon': 'lightbulb-o'
    },
    'bounce': {
      'keyframes': [
        ['0', 'transform:translateY(0)'],
        ['12.5', 'transform:translateY(0)'],
        ['25', 'transform:translateY(0)'],
        ['50', 'transform:translateY(-15px)'],
        ['62.5', 'transform:translateY(0)'],
        ['75', 'transform:translateY(-15px)'],
        ['100', 'transform:translateY(0)']
      ],
      'duration': 1.6,
      'animationTimingFunction': 'ease',
      'icon': 'futbol-o'
    },
    'spin': {
      'keyframes': [
        ['0', 'transform:rotate(0deg)'],
        ['100', 'transform:rotate(359deg)']
      ],
      'duration': 1.5,
      'animationTimingFunction': 'linear',
      'icon': 'refresh'
    },
    'float': {
      'keyframes': [
        ['0', 'transform: translateY(0)'],
        ['50', 'transform: translateY(-6px)'],
        ['100', 'transform: translateY(0)']
      ],
      'duration': 2,
      'animationTimingFunction': 'linear',
      'icon': 'cloud'
    },
    'pulse': {
      'keyframes': [
        ['0', 'transform: scale(1.1)'],
        ['50', 'transform: scale(0.8)'],
        ['100', 'transform: scale(1.1)']
      ],
      'duration': 2,
      'animationTimingFunction': 'linear',
      'icon': 'heart'
    },
    'tada': {
      'keyframes': [
        ['0', 'transform: scale(1)'],
        ['12.5', 'transform:scale(.9) rotate(-8deg)'],
        ['25', 'transform:scale(.9) rotate(-8deg)'],
        ['37.5', 'transform:scale(1.3) rotate(8deg)'],
        ['50', 'transform:scale(1.3) rotate(-8deg)'],
        ['62.5', 'transform:scale(1.3) rotate(8deg)'],
        ['75', 'transform:scale(1.3) rotate(-8deg)'],
        ['87.5', 'transform:scale(1.3) rotate(8deg)'],
        ['100', 'transform:scale(1) rotate(0)']
      ],
      'duration': 1.6,
      'animationTimingFunction': 'linear',
      'icon': 'trophy'
    },
    'passing': {
      'keyframes': [
        ['0', 'transform:translateX(-50%); opacity:0'],
        ['50', 'transform:translateX(0%); opacity:1'],
        ['100', 'transform:translateX(50%); opacity:0']
      ],
      'duration': 2,
      'animationTimingFunction': 'linear',
      'icon': 'fighter-jet'
    },
    'passing-reverse': {
      'keyframes': [
        ['0', 'transform:translateX(50%); opacity:0'],
        ['50', 'transform:translateX(0%); opacity:1'],
        ['100', 'transform:translateX(-50%); opacity:0']
      ],
      'duration': 2,
      'animationTimingFunction': 'linear',
      'icon': 'fighter-jet'
    },
    'burst': {
      'keyframes': [
        ['0', 'opacity:1'],
        ['99.999', 'transform:scale(1.8); opacity:0'],
        ['100', 'transform:scale(1); opacity:1']
      ],
      'duration': 2,
      'animationTimingFunction': 'linear',
      'icon': 'star'
    }
  };

  $scope.alert = {show: false};

  $scope.egConfig = { waitnum: 2, animation: 'wrench' };

  var kf = function(keyframes, duration, animationName, waitnum) {
    var tempString = '@keyframes ' + animationName + ' {\n';

    var f, // frame
        p; // property
    for	(var i = 0; i < keyframes.length; i++) {
      f = keyframes[i][0];
      p = keyframes[i][1];
      tempString += '  ' + $filter('number')(f * duration / (duration + waitnum), 5) * 1 + '% { ' + p + ' }\n';
      if ( i + 1 === keyframes.length && (waitnum !== 0 || (waitnum === 0 && f !== '100')) ) {
        tempString += '  100% { ' + p + ' }\n';
      }
    }
    tempString += '}';
    return tempString;
  };

  $scope.egKeyframes = function() {
    $scope.string = kf($scope.egAnimations[$scope.egConfig.animation].keyframes, $scope.egAnimations[$scope.egConfig.animation].duration, $scope.egConfig.animation, $scope.egConfig.waitnum);
  };

  $scope.egKeyframes();

  // custom config
  $scope.customConfig = { keyframes: '0% { transform: scale(1) }\n12.5% { transform:scale(.9) rotate(-8deg) }\n25% { transform:scale(.9) rotate(-8deg) }\n37.5% { transform:scale(1.3) rotate(8deg) }\n50% { transform:scale(1.3) rotate(-8deg) }\n62.5% { transform:scale(1.3) rotate(8deg) }\n75% { transform:scale(1.3) rotate(-8deg) }\n87.5% { transform:scale(1.3) rotate(8deg) }\n100% { transform:scale(1) rotate(0) }', waitnum: 1, name: 'animationName', duration: 2, timingFunction: 'linear', transformOriginX: 50, transformOriginY: 50 };

  var string,
      perct,
      prop,
      array;
  $scope.$watchGroup(['customConfig.keyframes', 'customConfig.waitnum', 'customConfig.name', 'customConfig.duration'], function() {
    string = '';
    array = [];
    angular.element($scope.customConfig.keyframes.split('}')).each(function(index, value){
      if ( value ) {
        value = value.trim() + '}';
        prop = value.match(/{([^}]+)}/)[1];
        perct = value.split('%')[0];
        array.push([perct, prop]);
      }
    });
    $scope.customoutput = kf(array, $scope.customConfig.duration, $scope.customConfig.name, $scope.customConfig.waitnum);
  });


  // Copy to clipboard alert messages
  $scope.copySuccess = function(e) {
    $scope.alert.text = 'CSS copied to clipboard...';
    $scope.alert.type = 'success';
    $scope.alert.show = true;
    $timeout(function(){
      $scope.alert.show = false;
    }, 3000);

    $('.btn').blur();

    e.clearSelection();
  };

  $scope.copyError = function() {
    $scope.alert.text = 'ERROR! Unable to copy CSS to clipboard';
    $scope.alert.type = 'danger';
    $scope.alert.show = true;
    $timeout(function(){
      $scope.alert.show = false;
    }, 3000);
  };

}])


.directive('quickSelect', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $timeout(function() {
        $(element).quickselect(scope.$eval(attrs.quickSelect));
      });
    }
  };
});

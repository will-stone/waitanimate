'use strict';

angular.module('waitanimateApp').component('outputCss', {
  templateUrl: 'views/templates/outputCss.html',
  controller: ['$filter', function($filter){
    var ctrl = this;

    // calculate keyframe percentages
    ctrl.kf = function(keyframes, duration, waitnum) {

      // Defaults if transform origin not supplied
      ctrl.transformOriginX = angular.isUndefined(ctrl.transformOriginX) ? '50' : ctrl.transformOriginX;
      ctrl.transformOriginY = angular.isUndefined(ctrl.transformOriginY) ? '50' : ctrl.transformOriginY;

      // if custom keyframe, change string into array
      if ( typeof keyframes === 'string' ) {
        var perct,
            prop,
            kfarray = [];
        angular.element(keyframes.split('}')).each(function(index, value) {
          if ( value ) {
            value = value.trim() + '}';
            prop = value.match(/{([^}]+)}/)[1];
            perct = value.split('%')[0];
            kfarray.push([perct, prop]);
          }
        });
        keyframes = kfarray;
      }

      // calculate new keyframe rule based on waitnum and duration
      var string = '',
          f, // frame
          p; // property
      for	(var i = 0; i < keyframes.length; i++) {
        f = keyframes[i][0];
        p = keyframes[i][1];
        string += '  ' + $filter('number')(f * duration / (duration + waitnum), 5) * 1 + '% { ' + p + ' }\n';
        if ( i + 1 === keyframes.length && (waitnum !== 0 || (waitnum === 0 && f !== '100')) ) {
          string += '  100% { ' + p + ' }\n';
        }
      }
      return string;
    };

  }],
  bindings: {
    name: '<',
    duration: '<',
    waitnum: '<',
    timingFunction: '<',
    transformOriginX: '<',
    transformOriginY: '<',
    keyframes: '<'
  }
});

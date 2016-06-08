'use strict';

/**
 * @ngdoc overview
 * @name waitanimateApp
 * @description
 * # waitanimateApp
 *
 * Main module of the application.
 */
angular
  .module('waitanimateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngclipboard'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

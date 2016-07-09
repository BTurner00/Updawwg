/*******************************
* UpDawwg App
* Date: 7-7-2016
********************************/

(function() {

let app = angular.module('UpDawwgApp', ['ngRoute','ngAnimate','ngCookies']);


//router
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'dogIn.html',
      conroller: 'DawgInController',
    })

    .when('/feed', {
      templateUrl: 'feed.html',
      controller: 'FeedController',
    })

    .when('/details', {
      templateUrl: '',
      controller: '',
    })

    .when('/add-dog-form', {
      templateUrl: 'add-dog-form.html',
      // controller: 'AddDogFormController',
    })

    .when('/logout', {
      templateUrl: 'dogIn.html',
      controller: 'DawgInController',
    })

    .when('/about', {
      templateUrl: 'about.html',
    })

    .otherwise({
      redirectTo: '/404',
    })
}])


// Services
require('./services/dog-service')(app);
require('./services/pawthentication-service')(app);

// Controllers
require('./controllers/feed-controller')(app);
require('./controllers/nav-controller')(app);
require('./controllers/dawgIn-controller')(app);
require('./controllers/add-dog-form-controller');(app);




// Filters

// Directives



})();

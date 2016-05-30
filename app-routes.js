angular
  .module('myApp')
  .config(function($stateProvider){
    var basePath='/ngApp/';
    $stateProvider
      .state('welcome',{
        url:'',
        templateUrl: basePath+'app/welcome/views/welcome.tpl.html',
        controller: 'WelcomeCtrl'
      })
      .state('visitor-register',{
        url:'/visitor-register',
        templateUrl: basePath+'app/visitor-register/views/visitor-register.tpl.html',
        controller: 'VisitorRegisterCtrl'
      });

  })

angular
  .module('myApp')
  .controller('VisitorRegisterCtrl',['$scope',function($scope){
    $scope.visitor={};
    $scope.validateAndSaveVisitor= function(){

      if($scope.visitorForm.$valid){
          console.log($scope.visitorForm.$valid )
      }else{
        console.console.log("Success");
      }

      console.log($scope.visitor);
    };
  }]);

angular.module('MainCtrl', [
    
    
]).controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.prices = 'prices';
    console.log('$scope in MainController', $scope);
}]);
angular.module('MainCtrl', [
    
    
]).controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.prices = PRICES;
    console.log('$scope in MainController', $scope);
}]);
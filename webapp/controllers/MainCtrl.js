angular.module('MainCtrl', [
    
    
]).controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.prices = PRICES;
    console.log('$scope in MainController', $scope);

    if(window.location.hash.indexOf('contacts') != -1){
        function displayMap() {

            var mapOptions = {

                center: new google.maps.LatLng(49.7859605, 30.0956847),

                zoom: 15,

                mapTypeId: google.maps.MapTypeId.ROADMAP

            };

            var mapObject = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

            var marker = new google.maps.Marker({
                position: mapOptions.center,
                title:"Дымоходы"
            });

            // To add the marker to the map, call setMap();
            marker.setMap(mapObject);
        }
        displayMap();
    }
}]);
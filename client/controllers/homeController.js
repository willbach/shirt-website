

angular
  .module('Shirt.HomeController', ['ui.router', 'Navbar', 'Bottombar'])
  .controller('HomeController', ['$scope', '$http', '$state', '$timeout', 'cartService', HomeController]);

function HomeController($scope, $http, $state, $timeout, cartService) {
  $scope.seeProduct = () => {
    console.log(cartService.cart);
    $state.go('products');
  }
  

}

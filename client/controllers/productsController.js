

angular
  .module('Shirt.ProductsController', ['ui.router', 'Navbar', 'Bottombar'])
  .controller('ProductsController', ['$scope', '$http', '$state', '$timeout', 'cartService', ProductsController]);

function ProductsController($scope, $http, cartService, $state, $timeout) {
  $scope.addToCart = (product) => {
    cartService.addItem(product);

  }


}
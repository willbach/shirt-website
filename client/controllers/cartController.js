angular
  .module('Shirt.CartController', ['ui.router', 'Navbar', 'Bottombar'])
  .controller('CartController', ['$scope', '$http', '$state', '$timeout', 'cartService', CartController]);

function CartController($scope, $http, $state, $timeout, cartService) {
  $scope.myCart = ['Product 1', 'Product 2', 'Product 3'];


}

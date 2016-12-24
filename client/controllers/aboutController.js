

angular
  .module('Shirt.AboutController', ['ui.router', 'Navbar', 'Bottombar'])
  .controller('AboutController', ['$scope', '$http', '$state', '$timeout', 'cartService', AboutController]);


function AboutController($scope, $http, cartService, $state, $timeout) {
  
}


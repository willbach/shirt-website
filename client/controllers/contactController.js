

angular
  .module('Shirt.ContactController', ['ui.router', 'Navbar', 'Bottombar'])
  .controller('ContactController', ['$scope', '$http', '$state', '$timeout', 'cartService', ContactController]);


function ContactController($scope, $http, cartService, $state, $timeout) {
  $scope.contactReasons = ['General question', 'An order that was placed', 'Social impact', 'Taking measurements'];
  $scope.name = '';
  $scope.messageText = '';
  $scope.email = '';
  $scope.contact = function() {
    let data = { name: $scope.name, email: $scope.email, message: $scope.messageText, reason: $scope.contactReason };
    $http.post('/contact', data)
    .success( (data, status) => {
      $scope.contactForm.$setPristine();
    })
    .error( (data, status) => console.log(status))
  }
}


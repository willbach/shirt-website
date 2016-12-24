

angular
  .module('Shirt.OrderController', ['ui.router', 'Navbar', 'Bottombar'])
  .controller('OrderController', ['$scope', '$http', '$state', '$timeout', 'cartService', OrderController]);


function OrderController($scope, $http, $state) {
  $scope.invalidEmail;

  $scope.stripeCallback = function (code, result) {
    if (result.error) {
        window.alert('it failed! error: ' + result.error.message);
    } else {
      data = {
        first_name: $scope.firstName, last_name: $scope.lastName, neck: $scope.neck, chest: $scope.chest, arms: $scope.arms,
        waist: $scope.waist, shirts: $scope.shirtnum, color: $scope.color, street: $scope.street, street2: $scope.street2,
        city: $scope.city, state: $scope.state, zip: $scope.zip, email: $scope.email, phone: $scope.phone, token: result,
      }
      //check for valid email address

      if( !($scope.email && ($scope.email.search(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) !== -1)) ) {
        $scope.invalidEmail = true;
      }
      else {
        $http.post('/order', data)
        .success( (data, status) => {
          console.log(data);
          $scope.checkoutForm.$setPristine();
          $scope.userInfoForm.$setPristine();
          console.log(status);
          $state.go('orderComplete');
        })
        .error( (data,status) => {
          console.log(status);
          window.alert('There was an error processing your order, please try again. If the problem persists, please submit an inquiry at the "Contact Us" page');
        });
      }
    }
  };

  $scope.colors = ['blue', 'white', 'red', 'yellow', 'light blue'];
}


 

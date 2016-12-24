angular
  .module('Navbar', [])
  .directive('navbar', function() {
    return {
        restrict: 'E',
        templateUrl: './partials/navbar.html',
    }
});
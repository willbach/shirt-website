angular
  .module('Bottombar', [])
  .directive('bottombar', function() {
    return {
        restrict: 'E',
        templateUrl: './partials/bottombar.html',
    }
});
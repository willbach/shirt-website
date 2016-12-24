// require('bootstrap/dist/css/bootstrap.css');
// const angular = require('angular');


const app = angular
  .module('myApp', [
    'angularPayments',
    'ui.router',
    'Shirt.HomeController',
    'Shirt.AboutController',
    'Shirt.ContactController',
    'Shirt.OrderController',
    'Shirt.ProductsController',
    'Shirt.CartController',
    'Shirt.cartService'
  ]);

app.config(configFunction);

function configFunction($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
        url:'/',
        templateUrl: './partials/home.html',
        controller: 'HomeController'
    })
    .state('about', {
        url:'/about',
        templateUrl: './partials/about.html',
        controller: 'AboutController'
    })
    .state('order', {
        url:'/order',
        templateUrl: './partials/order.html',
        controller: 'OrderController'
    })
    .state('orderComplete', {
        url:'/order-complete',
        templateUrl: './partials/orderComplete.html',
        controller: 'OrderController'
    })
    .state('contact', {
        url:'/contact',
        templateUrl: './partials/contact.html',
        controller: 'ContactController'
    })
    .state('products', {
        url:'/products',
        templateUrl: './partials/products.html',
        controller: 'ProductsController'
    })
    .state('cart', {
        url:'/cart',
        templateUrl: './partials/cart.html',
        controller: 'CartController'
    });
}
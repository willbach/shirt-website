
class cartService {
  constructor() {
    this.cart = [];
  }
  addItem(item) {
    this.cart.push(item);
  }
  
}

angular.module('Shirt.cartService', []).service('cartService', [cartService]);

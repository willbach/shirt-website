const dbCtrl = require('./dbCtrl');
const stripe = require('stripe')("sk_test_I8ZvjDDNfIed7VpR6DUn9Qhd");
const emailCtrl = require('./emailCtrl');

const orderCtrl = {};

orderCtrl.reviewOrder = function(req, res) {

}

//includes stripe functionality
orderCtrl.order = function(req, res) {

  const token = req.body.token;
  const charge = stripe.charges.create( {
    amount: req.body.shirtnum * 1,
    currency: 'usd',
    source: token,
    description: "Ugandan shirts"
  }, function(err, charge) {
    if(err && err.type === 'StripeCardError') {
      res.end(404, 'there was an error with the order');
    }
    else {
      dbCtrl.order(req.body)
      .then( (order) => {
        let newOrder = order.get({plain: true});
        emailCtrl.confirmOrder(newOrder);
        console.log('submitted an order, card successfully charged');
        res.json(newOrder);
      });
    }
  });
}

module.exports = orderCtrl;
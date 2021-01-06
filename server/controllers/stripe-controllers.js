const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//const uuid = require("uuid/v4");
const { v4: uuid } = require('uuid');
require("dotenv").config();
exports.stripe_get_payment = ("/", (req, res) => {
    res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
  });
  
  exports.stripe_post_payment = async (req, res) => {
    // console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { product, token } = req.body;
  console.log(req.body)
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotencyKey = uuid();
      const charge = await stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotencyKey
        }
      );
      
      // console.log(token.card.address_line1)
      // console.log(token.card.name)
      // console.log(charge.id)
      // console.log(req.body.product.userID)
      // const userOrder = await new userOrder({
      //   user: req.body.product.userID,
      //   cart: req.body.product.products,
      //   address: token.card.address_line1,
      //   name: token.card.name,
      //   paymentId: charge.id
      // })
      // userOrder.save(function(err, result) {
      //   console.log('user order')
      //   console.log(err)
      // })
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
  }
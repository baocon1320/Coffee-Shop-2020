const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const StripeController = require('../controllers/stripe-controllers')
router.post('/', StripeController.stripe_post_payment)
router.get('/', StripeController.stripe_get_payment)

module.exports = router;

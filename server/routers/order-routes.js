const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const OrdersController = require('../controllers/order-controllers');

// Handle incoming GET requests to /orders
router.get('/', checkAuth, OrdersController.orders_get_all);

// router.post('/', checkAuth, OrdersController.orders_create_order);
router.post('/',  OrdersController.orders_create_order);


router.get('/:orderId', checkAuth, OrdersController.orders_get_order);

router.delete('/:orderId', checkAuth, OrdersController.orders_delete_order);


router.patch('/:orderId', checkAuth, OrdersController.orders_edit_order);

module.exports = router;

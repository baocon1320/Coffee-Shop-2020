const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth-control');

const { userById, read, update, purchaseHistory } = require('../controllers/user-control');

router.get('/secret', requireSignin, (req, res) => {
    res.json({
        // user: req.profile
        user: 'secret route'
    });
});
router.get('/secret/:userId', requireSignin, (req, res) => {
    res.json({
        user: req.profile
        // user: 'secret route'
    });
});

router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);
router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);

router.param('userId', userById);

module.exports = router;

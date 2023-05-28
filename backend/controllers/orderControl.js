const router = require('express').Router()
const { getOrders, createNewOrder, getMyOrder } = require('../Model/orderModel')
const auth = require('../authentication/auth')


// router.post('/', auth.verifyToken, createOrder)

router.post('/add', auth.verifyToken, createNewOrder)
// router.get('/minaOrder', auth.verifyToken, getMyOrder )
router.get('/myOrder', auth.verifyToken, getMyOrder )

// bara admin kan se alla orders
router.get('/allOrders', getOrders )
// router.get('/allOrders',auth.verifyToken, auth.checkAdmin, getOrders )

module.exports = router;

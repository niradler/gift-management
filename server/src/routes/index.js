const router = require('express').Router();
const GiftController = require('../controllers/GiftController/GiftController');
const AdminController = require('../controllers/AdminController/AdminController');

router.post('/user/shipping', GiftController.addShipping);
router.post('/user/verifyAddress', GiftController.verifyAddress);
router.get('/admin/shipping', AdminController.getShippingAddress);


module.exports = router;
const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');

router.post('/', basketController.addProduct);
router.post('/', basketController.confirmOrder);
router.delete('/',basketController.deleteOrder);

module.exports = router;
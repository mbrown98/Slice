const router = require('express').Router();
const controller = require('./controllers');

router.get('/', controller.getAllBudgets);
router.post('/', controller.createBudget);
router.delete('/', controller.deleteBudget);
router.put('/', controller.updateBudget);

module.exports = router;

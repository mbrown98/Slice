const router = require('express').Router();
const controller = require('./controllers');

router.get('/', controller.getAllBudgets);
router.post('/', controller.createBudget);

module.exports = router;

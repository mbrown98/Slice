const router = require('express').Router();
const controller = require('./controllers');

router.get('/', controller.getAllPlans);
router.post('/', controller.createPlan);

module.exports = router;

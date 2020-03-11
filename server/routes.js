const router = require("express").Router();
const controller = require("./controllers");

router.get("/", controller.getAllBudgets);
router.post("/", controller.createBudget);
router.delete("/:id", controller.deleteBudget);
router.put("/:id", controller.updateBudget);
router.get("/category", controller.getAllCategories);
router.post("/transactions", controller.addTransaction);

module.exports = router;

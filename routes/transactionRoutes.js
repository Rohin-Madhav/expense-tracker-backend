const router = require("express").Router();
const transactionController = require("../controllers/transactionController");

router.post("/", transactionController.addTransaction);
router.get("/", transactionController.getTransactions);
router.get("/:id", transactionController.getTransactionById);
router.patch("/update/:id", transactionController.updateTransaction);
router.delete("/delete/:id", transactionController.deleteTransactions);

module.exports = router;

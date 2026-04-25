const router = require("express").Router();
const transactionController = require("../controllers/transactionController");
const auth = require("../middilwares/auth");

router.post("/", auth, transactionController.addTransaction);
router.get("/", auth, transactionController.getTransactions);
router.get("/:id", auth, transactionController.getTransactionById);
router.patch("/update/:id", auth, transactionController.updateTransaction);
router.delete("/delete/:id", auth, transactionController.deleteTransactions);

module.exports = router;

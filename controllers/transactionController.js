const Transaction = require("../models/transactionSchema");

exports.addTransaction = async (req, res) => {
  try {
    const { title, amount, category, type, date } = req.body;
    const transaction = await Transaction.create({
      title,
      amount,
      category,
      type,
      date,
    });
    res.status(201).json({
      data: transaction,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    if (!transactions) {
      res.status(404).json("No Transactions Found");
    }

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTransactionById = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findById(id);

    if (!transaction) {
      res.status(404).json("Transacrion Not Found");
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const updateTransaction = await Transaction.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json(updateTransaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

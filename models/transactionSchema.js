const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: [
        "Salary",
        "Freelance",
        "Food",
        "Rent",
        "Utilities",
        "Entertainment",
        "Shopping",
        "Health",
        "Other",
      ],
      message: "{VALUE} is not a valid category",
    },
  },
  type: {
    type: String,
    required: true,
    enum: ["income", "expense"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);

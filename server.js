require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const transactionRouter = require("./routes/transactionRoutes");
const authRouter = require("./routes/userRoutes");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/transaction", transactionRouter);
app.use("/api/user", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});

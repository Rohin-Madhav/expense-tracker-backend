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

const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:5173"].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.length === 0 || allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    return callback(new Error("CORS policy: Origin not allowed"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/transaction", transactionRouter);
app.use("/api/user", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});

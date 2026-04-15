import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/authRoute.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/auth", authRouter);

mongoose
  .connect("mongodb://localhost:27017/data")
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log("Db not connected", error));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();
app.use(express.json());
mongoose
  .connect(process.env.CONN_STR, {
    useNewUrlParser: true,
  })
  .then((conn) => {
    console.log("db connected succesfully");
  })
  .catch((err) => {
    console.log("error in connect db");
  });
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/auth", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

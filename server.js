import express from "express";
import { config } from "dotenv";
import connectDb from "./config/db.js";

config();
const PORT = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

async function startServer() {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`Server is started at port: ${PORT}`);
  });
}

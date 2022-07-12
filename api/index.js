import express from "express";
import cors from "cors";
import { userInfo } from "./data/apiData.js";

const app = express();
const port = 8081;
app.use(cors());

app.get("/api", (req, res) => {
  res.json(userInfo);
});

app.listen(port, () => {
  console.log(`Running API on port ${port} `);
});

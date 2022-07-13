import express from "express";
import cors from "cors";

const app = express();
const port = 8080;
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile("/app/frontend/index.html");
});

app.use("/", express.static("./frontend"));

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

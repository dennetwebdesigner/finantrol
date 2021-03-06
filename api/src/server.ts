import express from "express";
import { router } from "./routes";
import cors from "cors";
import "./database";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ api: "online" });
});
app.use(router);

app.listen(3333, async () => {
  console.log(`${process.env.PROJECT_NAME} - server runnig in port 3333 \n \n`);
});

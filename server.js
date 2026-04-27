import express from "express";
import axios from "axios";
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Roof Hunter voice server online"));

app.post("/telnyx-webhook", async (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});

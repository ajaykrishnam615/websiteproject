require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const Contact = mongoose.model("Contact", {
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/api/contact", async (req, res) => {
  try {
    await Contact.create(req.body);
    res.json({ success: true });
  } catch {
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => console.log("Server on 5000"));

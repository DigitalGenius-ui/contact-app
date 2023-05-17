const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/database.js");
const contactRouter = require("./routes/contact.js");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.get("/", (req, res) => {
  res.status(200).json("This is the main page of the api");
});

// make path
app.use("/upload", express.static(path.join(__dirname, "/upload")));

// upload image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ status: "SUCCESS", msg: "Image has been uploaded" });
});

// routes
app.use("/api/contact", contactRouter);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("App is running at port " + process.env.PORT);
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const app = express();
const user = require("./routes/user");
const { response } = require("express");

connectDB();

app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({ extended: false }));
// app.get("/", (req, res) => res.send("Server up and running"));

app.use("/api/user", user);

// setting up port
const PORT = process.env.PORT || 5000;

//----------deployment-------------//
// __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Server up and running"));
}

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
  console.log(`current directory: ${__dirname}`);
});

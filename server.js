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
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy-Report-Only",
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' @fontsource/roboto/300.css @fontsource/roboto/400.css @fontsource/roboto/500.css @fontsource/roboto/700.css; frame-src 'self';"
  );
  next();
});
app.use("/api/user", user);

// setting up port
const PORT = process.env.PORT || 5000;

//----------deployment-------------//
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  console.log(`current directory: ${__dirname}`);
  app.use(express.static("client/build"));
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.header("Access-Control-Allow-Origin");
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Server up and running"));
}

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

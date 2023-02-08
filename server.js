require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
// const notFoundMiddleware = require("./middleware/not-found");
// const errorHandlerMiddleWare = require("./middleware/error-handler");
const app = express();
const user = require("./routes/user");

// db and authenticateUser
connectDB();

app.use(cors({ origin: true, credentials: true }));

//middleware

// this allows json data to be available
app.use(express.json({ extended: false }));
// app.get("/", (req, res) => res.send("Server up and running"));
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self''unsafe-inline'; font-src 'self'; img-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-src 'self'; connect-src 'self'; style-src-elem 'self;"
  );
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://care-circle-app.herokuapp.com"
  );
  next();
});
// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleWare);
app.use("/api/user", user);

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

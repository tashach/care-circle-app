require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

const user = require("./routes/user");

connectDB();

app.use(cors({ origin: true, credentials: true }));

// initialize middleware
// app.use(express.json({ extended: true }));
// app.get("/", (req, res) => res.send("Server up and running"));

// app.use("/api/user", user);

// setting up port
const PORT = process.env.PORT || 5000;

const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

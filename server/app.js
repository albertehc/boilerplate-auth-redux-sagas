const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db.config");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;
connectDB();



app.use(cookieParser());
app.use(cors({ credentials: true, origin: [process.env.FRONTENDDOMAIN] }));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/signup", require("./routes/signup"));
app.use("/api/auth", require("./routes/auth"));

app.listen(port, "0.0.0.0", () => {
  console.log(`Running on port ${port}`);
});

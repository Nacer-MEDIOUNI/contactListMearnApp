const express = require("express");
const connectDB = require("./config/connectDB");
const contactRoutes = require("./routes/contact");
const app = express();
require("dotenv").config();
connectDB();
app.use(express.json());
app.use("/api/contact", contactRoutes);

const port = process.env.port || 8000;
app.listen(port, () => console.log(`port is running on port ${port} `));

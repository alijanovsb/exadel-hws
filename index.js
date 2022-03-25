require("dotenv").config();
const cors = require("cors");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const register = require("./data/register");
const usersRouter = require("./data/users");
const passport = require("passport");
const connectDB = require("./db/database");

connectDB();

const PORT = process.env.PORT;

const app = express();

const logger = (req, res, next) => {
  next();
};

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use("/auth", userRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

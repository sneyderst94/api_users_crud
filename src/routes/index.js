const express = require("express");
const { route } = require("./user.router");
const userRouter = require("./user.router");
const router = express.Router();

// colocar las rutas aquí
router.use("/users", userRouter);
router.use("/users/:id", userRouter);

module.exports = router;

import express from "express";
import { route } from "./gautamLearn.mjs";
import { connectToDb } from "../schema/db.mjs";
// const express = require("express");

const app = express();
app.use(express.json());
app.use("/", route);
// app.use("/sai", route2);
const port = 3000;
const host = "127.0.0.1";

export const startServer = () => {
  app.listen(port, host, () => {
    connectToDb();
    console.log("hello server started");
  });
};
// module.exports = { startServer: startServer };

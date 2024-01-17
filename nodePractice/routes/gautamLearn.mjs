import express from "express";
import { save, get } from "../handlers/saveHandler.mjs";
export const route = express.Router({ mergeParams: true });

route.get("/sget/:id", async (req, res) => {
  //   res.status(200).json("sucess");
  get(req, res);
});

route.post("/spost", async (req, res) => {
  //   res.status(200).json("sucess");
  save(req, res);
});


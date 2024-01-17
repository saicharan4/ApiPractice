import { saveName, getName } from "../services/saveService.mjs";

export const save = async (req, res) => {
  const reqBody = req.body;

  //   console.log("req body", reqBody);
  const response = await saveName(reqBody);
  res.status(200).json(response);
};

export const get = async (req, res) => {
  const id = req.params.id;
  const responseN =await getName(id);
  console.log("req body", id, responseN);

  res.status(200).json(responseN);
};

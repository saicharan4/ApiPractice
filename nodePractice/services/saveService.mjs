import saveSchema from "../schema/saveSchema.mjs";
export const saveName = async (req) => {
  return await saveSchema.createSchema(req);
};
export const getName = async (req) => {
  return await saveSchema.getSchema(req);
};

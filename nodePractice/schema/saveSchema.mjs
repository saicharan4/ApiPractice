import { getDbInstance } from "./db.mjs";
const mongoConnection = getDbInstance();
const schemaTypes = mongoConnection.Schema.Types;
const Model = "NAME";
const SaveSchema = new mongoConnection.Schema(
  { name: schemaTypes.String },
  { collection: "names" }
);

SaveSchema.statics.createSchema = async function (req) {
  return await this.model(Model).create(req);
};
SaveSchema.statics.getSchema = async function (id) {
  return await this.model(Model).findOne({ _id: id });
};

export default mongoConnection.model(Model,SaveSchema) 
import mongoose from "mongoose";
export const connectToDb = async () => {
  const url =
    "mongodb+srv://saicharangs:oWVhXE8CmeRZNDK5@cluster0.wupa2gr.mongodb.net/test";
  if (mongoose.connection.readyState == 0) {
    await mongoose.connect(url);
    console.log("connected db sucessful");
  }
};
export const getDbInstance =  () => {
//   await connectToDb();
  //   if (mongoose.connection.readyState == 1) {
  return mongoose;
  //   }
};

import mongoose from "mongoose";

const dbConnnect = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("db connect");
  } catch (error) {
    console.log(error, "db connection error");
  }
};
export default dbConnnect;

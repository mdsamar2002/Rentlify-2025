import dotenv from "dotenv";
import dbConnnect from "./db/db.js";
import { app } from "./app.js";
dotenv.config({});

dbConnnect()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`app is listening and port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("db connection error found", error);
  });

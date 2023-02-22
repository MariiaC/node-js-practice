import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
mongoose.set("strictQuery", false);

const PORT = 5000;
const DB_URL = `mongodb+srv://user:user@cluster0.xhvewct.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use(express.static("static")); // http://localhost:5000/89562e91-d58e-463a-a2a0-7d7813bbc57f.jpg
app.use(fileUpload({})); // midleware
app.use("/api", router); // register endpoints - we have only one http://localhost:5000/api/posts

async function startApp() {
  try {
    await mongoose.connect(DB_URL); //connect to DB

    app.listen(PORT, () => {
      console.log(`server works on PORT ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

startApp();

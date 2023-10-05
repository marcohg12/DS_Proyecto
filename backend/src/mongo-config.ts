import mongoose from "mongoose";

const url =
  "mongodb+srv://nottwithtt:Nicolita1998+@cluster0.gi2w4fi.mongodb.net/DS_Project?retryWrites=true&w=majority";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(url)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}

export default new Database();

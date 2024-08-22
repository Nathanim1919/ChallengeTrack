// Purpose: Database configuration file.

// Import mongoose
import mongoose from "mongoose";

// Database class
class Database {

  // Database URI and connection instance
  private DB_URI = "mongodb://localhost:27017/test";
  private DB_CONNECTION = mongoose.connection;

  // Constructor
  constructor() {
    this.createConnection();
  }

  createConnection() {
    mongoose.connect(this.DB_URI).then(r => {
        console.log("Connected to MongoDB");
    }).catch(e => {
        console.error("Error connecting to MongoDB: ", e);
    });
  }
}

const dbInstance = new Database();
export { dbInstance };

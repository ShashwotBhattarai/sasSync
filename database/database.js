const mongoose = require("mongoose");
require("dotenv").config();

async function connectTODatabase() {
  try {
    await mongoose.connect(process.env.DATABASEURI);
    console.log("connected to database");
  } catch (error) {
    throw error;
  }
}

module.exports = connectTODatabase;

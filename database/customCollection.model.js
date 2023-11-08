const mongoose = require("mongoose");

const customCollectionSchema = new mongoose.Schema({}, { strict: false });

const CustomCollection = mongoose.model("CustomCollection", customCollectionSchema);
module.exports = CustomCollection;

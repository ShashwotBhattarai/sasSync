const mongoose = require("mongoose");

const smartCollectionSchema = new mongoose.Schema({}, { strict: false });

const SmartCollection = mongoose.model("SmartCollection", smartCollectionSchema);
module.exports = SmartCollection;
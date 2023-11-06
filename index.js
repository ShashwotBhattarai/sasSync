const connectTODatabase = require("./database/database");
const { syncProduct } = require("./services/fetchProduct.service");
require("dotenv").config();

connectTODatabase();

const syncResponse = syncProduct();

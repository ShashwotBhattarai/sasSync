
const connectTODatabase = require("./database/database");
const  {syncProduct,upsertProduct}  = require("./services/fetchProduct.service");
require("dotenv").config();

connectTODatabase();

const syncResponse = syncProduct();

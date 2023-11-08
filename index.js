const connectTODatabase = require("./database/database");
const { syncProduct } = require("./services/syncProduct.service");
const { syncCustomCollections } = require("./services/syncCustomCollections.service");
const { syncSmartCollections } = require("./services/syncSmartCollections.service");
require("dotenv").config();

connectTODatabase();

syncProduct();
syncCustomCollections();
syncSmartCollections();

const Shopify = require("shopify-api-node");
require("dotenv").config();
const SmartCollection = require("../database/smartCollection.model");

async function syncSmartCollections() {
  const shopify = new Shopify({
    shopName: process.env.SHOPNAME,
    accessToken: process.env.ACCESSTOKEN,
  });

  let params = { limit: 5 };

  do {
    const smartCollection = await shopify.smartCollection.list(params);
    params = smartCollection.nextPageParameters;

    console.log({ params: params });
    // console.log({ smartcollection: smartCollection });
    console.log({ smartCollectionLength: smartCollection.length });
    upsertProduct(smartCollection);
  } while (params!== undefined);
}

async function upsertProduct(smartCollection) {
  for (let i in smartCollection) {
    smartCollection[i] = {
      updateOne: {
        filter: { id: smartCollection[i].id },
        update: smartCollection[i],
        upsert: true,
      },
    };
  }
  const res = await SmartCollection.bulkWrite(smartCollection);
  console.log(res);
}

module.exports = { syncSmartCollections };

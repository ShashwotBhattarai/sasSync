const Shopify = require("shopify-api-node");
require("dotenv").config();
const CustomCollection = require("../database/customCollection.model");

async function syncCustomCollections() {
  const shopify = new Shopify({
    shopName: process.env.SHOPNAME,
    accessToken: process.env.ACCESSTOKEN,
  });

  let params = { limit: 5 };

  do {
    const customCollection = await shopify.customCollection.list(params);
    params = customCollection.nextPageParameters;

    console.log({ params: params });
    // console.log({ customcollection: customCollection });
    console.log({ lengthofcustomcollection: customCollection.length });
    upsertProduct(customCollection);
  } while (params !== undefined);
}

async function upsertProduct(customCollection) {
  for (let i in customCollection) {
    customCollection[i] = {
      updateOne: {
        filter: { id: customCollection[i].id },
        update: customCollection[i],
        upsert: true,
      },
    };
  }
  const res = await CustomCollection.bulkWrite(customCollection);
  console.log(res);
}


module.exports = { syncCustomCollections };

const Shopify = require("shopify-api-node");
require("dotenv").config();
const Product = require("../database/product.model");

let allProducts = [];

async function syncProduct() {
  const shopify = new Shopify({
    shopName: process.env.SHOPNAME,
    accessToken: process.env.ACCESSTOKEN,
  });

  let params = { limit: 20 };

  do {
    const products = await shopify.product.list(params);
    params = products.nextPageParameters;
    upsertProduct(products);
  } while (params !== undefined);
}

async function upsertProduct(allProducts) {
  for (let i in allProducts) {
    allProducts[i] = {
      updateOne: {
        filter: { id: allProducts[i].id },
        update: allProducts[i],
        upsert: true,
      },
    };
  }
  const res = await Product.bulkWrite(allProducts);
  console.log(res);
}


module.exports = { syncProduct, upsertProduct };

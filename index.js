const Shopify = require("shopify-api-node");
require('dotenv').config();

const shopify = new Shopify({
  shopName: process.env.shopName,
  accessToken: process.env.accessToken,
});

(async () => {
  let params = { limit: 10 };
  let allProducts = [];

  do {
    const products = await shopify.product.list(params);
    products.map( (value)=>allProducts.push(value));

    console.log(allProducts);
    console.log({ length: allProducts.length });

    params = products.nextPageParameters;

    console.log({ params });
  } while (params !== undefined);
})().catch(console.error);

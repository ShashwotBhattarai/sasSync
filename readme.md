
# Shopify API Node Integration

This Node.js script uses the Shopify API to retrieve a list of products from a Shopify store. It is configured to fetch products in batches of 10 using pagination until all products are retrieved. 

## Prerequisites

Before running this script, ensure you have the following:

- Node.js installed.
- Shopify store credentials: `shopName` and `accessToken`.
- `.env` file set up with the necessary environment variables (`shopName` and `accessToken`).

## Setup

1. Install the required Node.js packages.

    ```bash
    npm install shopify-api-node dotenv
    ```

2. Create a `.env` file in the root directory of your project and add the required credentials:

    ```plaintext
    shopName=your_shop_name
    accessToken=your_access_token
    ```

## How to Run

1. Clone or download the script.

2. Run the following command in your terminal to execute the script:

    ```bash
    node your_script_name.js
    ```

## Notes

- The script uses the Shopify API Node package to authenticate and make requests to the Shopify store.
- It retrieves products in batches of 10 and outputs them to the console, displaying the total number of products and the pagination parameters.


Make sure to replace `your_shop_name`, `your_access_token`, and `your_script_name.js` with your actual Shopify credentials and the name of your script file, respectively.


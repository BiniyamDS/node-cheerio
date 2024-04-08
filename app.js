const axios = require("axios");
const cheerio = require("cheerio");

const url = "http://books.toscrape.com/";
const selector = "product_price";

async function getBody() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const resultText = $(`.${selector}`).text();

    console.log(resultText.replace(/\s+/g, " "));
  } catch (err) {
    console.log(`Error fetching data: ${err}`);
  }
}
getBody();

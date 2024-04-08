const axios = require("axios");
const cheerio = require("cheerio");
const args = process.argv;

const url = args[2];
const selector = args[3];

// console.log(args[2])
// console.log(args[3])
const getBody = async () => {
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

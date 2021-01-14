var path = require("path");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

dotenv.config();

const app = express();
app.use(cors());

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// defines the endpoint in the express server
app.get("/evaluateURL", function (req, res) {
  console.log(req.query);
  const url = req.query.url;
  const apiKey = process.env.API_KEY;
  const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
  const params = `?key=${apiKey}&lang=en&url=${url}`;

  axios({
    method: "post",
    url: `${baseURL}${params}`,
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log("unable to get response");
      console.log(error);
      res.status(500).send(error);
    });
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({
  limit: "30mb",
  extended: true
}));

app.use(bodyParser.urlencoded({
  limit: "30mb",
  extended: true
}));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://<username>:<password>@cluster0.kbwcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

app.use('/', require('./routes'))

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
  })
})
.catch((err) => console.log(err.message) )
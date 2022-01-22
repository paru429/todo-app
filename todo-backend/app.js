const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');
const config = require('./config');

const PORT = process.env.PORT || 3030;

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors(corsOptions));

console.log(config.monogoDbUsername)
console.log(config.mongoDbPassword)
console.log(config.mongoDbHost)

// To run locally
// const mongoDB = `mongodb://localhost:27017/todo_app`;

// To connect from container to localhost
// const mongoDB = `mongodb://host.docker.internal:27017/todo_app`;

//To run in docker container set username and passoword for additional security
const mongoDB = `mongodb://${config.monogoDbUsername}:${config.mongoDbPassword}@${config.mongoDbHost}:27017/todo_app?authSource=admin`
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected!');
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
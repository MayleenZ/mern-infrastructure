const mongoose = require('mongoose');
require("dotenv").config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
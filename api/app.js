const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const routes = require('./routes/routes');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors( { origin: true, credentials: true } ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port);
console.log(`listening on port ${port}`);

module.exports = app;
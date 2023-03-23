const express = require('express');
const maisonroutes = require('./route/maison')

const app = express();


app.use('/api', maisonroutes);

app.use(express.static("./public"));

module.exports = app;
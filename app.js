const express = require('express');
const maisonroutes = require('./route/maison')

const app = express();


app.use('/api', maisonroutes);


module.exports = app;
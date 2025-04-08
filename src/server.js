// @ts-nocheck
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/connectDB';

import initwebRoutes from './route/web';

import viewEngine from './config/viewEngine';
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initwebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port);
});
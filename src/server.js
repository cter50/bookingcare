import express from 'express';
import bodyParser from 'body-parser';
// @ts-ignore
import initwebRoutes from './route/web';
// @ts-ignore
import viewEngine from './config/viewEngine';
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initwebRoutes(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port);
});
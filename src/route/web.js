
import express from 'express';
// @ts-ignore
import homecontroller from '../controllers/homeController';

let router = express.Router();

let initwebRoutes = (app) => {
    router.get('/',homecontroller.getHomePage);
    //res api
    return app.use('/', router);
}
module.exports = initwebRoutes;
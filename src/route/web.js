
import express from 'express';
// @ts-ignore
import homecontroller from '../controllers/homeController';

let router = express.Router();

let initwebRoutes = (app) => {
    router.get('/', homecontroller.getHomePage);
    router.get('/crud', homecontroller.getCRUD);
    router.post('/post-crud', homecontroller.postCRUD);

    //res api
    return app.use('/', router);
}
module.exports = initwebRoutes;
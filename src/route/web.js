import express from 'express';
import homecontroller from '../controllers/homecontroller';

let router = express.Router();

let initwebRoutes = (app) => {

    router.get('/', homecontroller.getHomePage);

    // @ts-ignore
    router.get('/', (req, res) => {
        return res.send('Hello world!');
    });
    // @ts-ignore
    router.get('/trongle', (req, res) => {
        return res.send('Hello trongle');
    });
    //res api


    return app.use('/', router);
}
module.exports = initwebRoutes;
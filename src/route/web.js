
import express from 'express';
// @ts-ignore
import homecontroller from '../controllers/homeController';
// @ts-ignore
import usercontroller from '../controllers/userController';

let router = express.Router();

let initwebRoutes = (app) => {
    router.get('/', homecontroller.getHomePage);
    router.get('/crud', homecontroller.getCRUD);
    router.post('/post-crud', homecontroller.postCRUD);

    router.get('/get-crud', homecontroller.displayGetCRUD);
    router.get('/edit-crud', homecontroller.getEditCRUD);
    router.post('/put-crud', homecontroller.putCRUD);
    router.get('/delete-crud', homecontroller.deleteCRUD);

    router.post('/api/login', usercontroller.handleLogin);
    router.get('/api/get-all-users', usercontroller.handleGetAllUsers);

    //res api
    return app.use('/', router);
}
module.exports = initwebRoutes;
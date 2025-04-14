// @ts-ignore
import userService from '../services/userService';

let handleLogin = async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errcode: 1,
            message: 'Missing inputs parameters',
        })
    }
    let userData = await userService.handleUserLogin(email, password);
    console.log('check userData', userData);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}
let handleGetAllUsers = async (req, res) => {
    let id = req.body.id;
    let users = await userService.getAllUsers(id);

    return res.status(200).json({
        errCode: 0,
        message: 'ok',
        users: users ? users : []
    })
}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
}
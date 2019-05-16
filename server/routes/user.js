const usercontroller = require('../controllers/user.ctrl');

module.exports = (router) => {

    /**
     * get a user info
     */
    router.route('/user/:email').get(usercontroller.getUserInfo);

    router.route('/userinfo').get(usercontroller.getUserInfo);

    router.route('/hihi').get(usercontroller.getHihi);
    //router.route('/asdf').get(usercontroller.asdf);

    router.route('/signup').post(usercontroller.user_signup);
    //router.post("/login", usercontroller.user_login);
}
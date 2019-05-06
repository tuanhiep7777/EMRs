const usercontroller = require('../controllers/user.ctrl');

module.exports = (router) => {

    /**
     * get a user info
     */
    router.route('/user/:email').get(usercontroller.getUserInfo);

    router.route('/userinfo').get(usercontroller.getUserInfo);

    router.route('/hihi').get(usercontroller.getHihi);
}
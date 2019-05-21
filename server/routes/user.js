const usercontroller = require('../controllers/user.ctrl');
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

module.exports = (router) => {

    /**
     * get a user info
     */
    router.route('/user/:email').get(usercontroller.getUserInfo);

    router.route('/userinfo').get(usercontroller.getUserInfo);

    router.route('/hihi').get(usercontroller.getHihi);

    router.route('/signup').post(usercontroller.user_signup);
    
    router.post("/login", usercontroller.user_login);

    router.post("/change_password", usercontroller.change_password);

    router.post("/set_user_info", upload.fields([
        {name: 'profilePicture', maxCount: 1}
    ]), usercontroller.set_user_info);

    router.post("/get_user_info", usercontroller.get_user_info);
    
    router.post("/add_doctor", upload.fields([{name: 'profilePicture'}]), usercontroller.add_doctor);
}
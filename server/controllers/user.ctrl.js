const User = require('../models/User');

module.exports = {
    // getUserInfo: (req, res, next) => {
    //     User.findById(req.params.id).then((err, userInfo) => {
    //         if (err)
    //             res.send(err);
    //         else if (!userInfo)
    //             res.sendStatus(404);
    //         else
    //             res.send(userInfo);
    //         next();
    //     });
    // },

    getUserInfo: (req, res, next) => {
        User.findOne({email: req.params.email}).then((err, userInfo) => {
            if (err)
                res.send(err);
            else if (!userInfo)
                res.sendStatus(404);
            else
                res.send(userInfo);
            next();
        });
    },

    getHihi: (req, res, next) => {
        res.send('hihi');
    }
}
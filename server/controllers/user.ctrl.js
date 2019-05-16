const User = require('../models/User');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
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
    },

    user_signup: (req, res, next) => {
        console.log(req.body.email);
        console.log(req.body.password);
        User.find({email: req.body.email})
            .exec()
            .then(user => {
                if (user.length >= 1) {
                    return res.json({
                        code: "",
                        message: "Người dùng đã tồn tại", 
                    });
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            console.log(err);
                            res.json({
                                code: "0",
                                message: "Error"
                            });
                        } else {
                            const user = new User({
                                id: new mongoose.Types.ObjectId(),
                                email: req.body.email,
                                password: hash
                            })
                            user.save()
                            .then(result => {
                                console.log(result);
                                res.json({
                                    code: "1",
                                    message: "OK"
                                });
                            })
                            .catch( err => {
                                console.log(err);
                                res.json({
                                    code:"0",
                                    message:"Error"
                                })
                            });
                        }
                    });
                }
            })
        }
}
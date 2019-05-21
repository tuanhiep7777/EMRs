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
                        code: "2",
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
                                _id: new mongoose.Types.ObjectId(),
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
        },
    
    user_login: (req, res, next) => {
        User.find({email: req.body.email})
            .exec()
            .then(user => {
                if (user.length < 1) {
                    res.json({
                        code: "2",
                        message: "Người dùng không tồn tại",
                        data: {}
                    })
                } else {
                    bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
                        if (err) {
                            console.log(err);
                            res.json({
                                code: "0",
                                message: "Error",
                                data: {}
                            })
                        }
                        if (result) {

                            res.json({
                                code: "1",
                                message: "OK",
                                data: {
                                    _id: user[0]._id,
                                    email: user[0].email,
                                    profilePicture: user[0].profilePicture
                                }
                            })
                        } else {
                            res.json({
                                code: "3",
                                message: "Mật khẩu không đúng",
                                data: {}
                            })
                        }
                        
                    })
                }

            })
            .catch(err => {
                console.log(err);
                res.json({
                    code: "0",
                    message:"Error",
                    data: {}
                })
            })
    },

    user_delete: (req, res, next) => {
        User.remove({_id: req.params.user_id})
            .exec()
            .then(result => {
                res.json({
                    code: "1",
                    message: "OK"
                })
            })
            .catch(err => {
                console.log(err);
                res.json({
                    code: "0",
                    message: "Error"
                })
            })
    },

    change_password: (req, res, next) => {
        User.find({email: req.body.email})
            .exec()
            .then( user =>{
                if (user.length < 1) {
                    res.json({
                        code:"2",
                        message: "Người dùng không tồn tại",
                        data: {}
                    })
                } else {
                    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                        if (err) {
                            console.log(err);
                            res.json({
                                code: "0",
                                message: "Error",
                                data: {}
                            })
                        } 
                        if (result) {
                            bcrypt.hash(req.body.new_password, 10, (err, hash) => {
                                if (err) {
                                    console.log(err);
                                    res.json({
                                        code: "0",
                                        message: "Error",
                                        data: {}
                                    })
                                }
                                user[0].password = hash;
                                user[0].save().then(result => {
                                    res.json({
                                        code: "1",
                                        message: "OK",
                                        data: {
                                            email: user[0].email,
                                            profilePicture: user[0].profilePicture,
                                            name: user[0].name,
                                            dateOfBirth: user[0].dateOfBirth,
                                            nationality: user[0].nationality,
                                            nationalIDNumber: user[0].nationalIDNumber,
                                            healthInsuranceIDNumber: user[0].healthInsuranceIDNumber,
                                            address: user[0].address,
                                            phoneNumber: user[0].phoneNumber
                                        }
                                    })
                                })
                            })
                        } else {
                            res.json({
                                code: "3",
                                message:"Mật khẩu không đúng"
                            })
                        }
                    })
                }
            })
            .catch(err => {
                console.log(err);
                res.json({
                    code: "0",
                    message: "Error",
                    data: {}
                })
            })
    },

    set_user_info: (req, res, next) => {
        User.findOneAndUpdate(
            {email: req.body.email}, 
            {
                email: req.body.email,
                profilePicture: req.files.profilePicture[0].path,
                name: req.body.name,
                dateOfBirth: req.body.dateOfBirth,
                nationality: req.body.nationality,
                nationalIDNumber: req.body.nationalIDNumber,
                healthInsuranceIDNumber: req.body.healthInsuranceIDNumber,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber
            }
            , (err, user) => {
                if(err) {
                    console.log(err);
                    res.json({
                        code:"4",
                        message: "Dữ liệu nhập vào không hợp lệ"
                    })
                } else {
                    res.json({
                        code: "1",
                        message: "OK",
                        data: {
                            email: user.email,
                            profilePicture: user.profilePicture,
                            name: user.name,
                            dateOfBirth: user.dateOfBirth,
                            nationality: user.nationality,
                            nationalIDNumber: user.nationalIDNumber,
                            healthInsuranceIDNumber: user.healthInsuranceIDNumber,
                            address: user.address,
                            phoneNumber: user.phoneNumber
                        }
                    })
                }
                
            })
    },

    get_user_info: (req, res, next )=> {
        var email;
        jwt.verify(req.body.token, "secret", (err, decode) => {
            if (err) {
                console.log(err)
                res.json({
                    code: "0",
                    message: "Error"
                })
            } else {
                email = decode.email;
            }
        })

        User.find({email: email})
            .exec()
            .then( user => {
                if (user.length < 1) {
                    res.json({
                        code: "2",
                        message:"Người dùng không tồn tại"
                    })
                } else {
                    if ("user_id" in req.body) {
                        User.find({_id: req.body.user_id})
                            .exec()
                            .then(user => {
                                if (user.length < 1) {
                                    res.json({
                                        code: "2",
                                        message: "Người dùng không tồn tại"
                                    })
                                } else {
                                    console.log(user);
                                    res.json({
                                        
                                        code:"1",
                                        message:"OK",
                                        data: {
                                            email: user[0].email,
                                            profilePicture: user[0].profilePicture,
                                            name: user[0].name,
                                            dateOfBirth: user[0].dateOfBirth,
                                            nationality: user[0].nationality,
                                            nationalIDNumber: user[0].nationalIDNumber,
                                            healthInsuranceIDNumber: user[0].healthInsuranceIDNumber,
                                            address: user[0].address,
                                            phoneNumber: user[0].phoneNumber
                                        }
                                    })
                                }
                            })
                    } else {
                        console.log(user);
                        res.json({
                            code: "1", 
                            message: "OK",
                            data: {
                                email: user[0].email,
                                profilePicture: user[0].profilePicture,
                                name: user[0].name,
                                dateOfBirth: user[0].dateOfBirth,
                                nationality: user[0].nationality,
                                nationalIDNumber: user[0].nationalIDNumber,
                                healthInsuranceIDNumber: user[0].healthInsuranceIDNumber,
                                address: user[0].address,
                                phoneNumber: user[0].phoneNumber
                            }
                        })
                    }
                }
            })

    },
    add_doctor: (req, res, next) => {
        
    }
}
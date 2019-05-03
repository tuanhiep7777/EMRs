// thông tin khách hàng và thông tin đăng nhập

const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
    {
        email: String, // đăng nhập bằng email
        password: String,
        token: String,
        
        profilePicture: String, // url
        name: String,
        dateOfBirth: String,
        nationality: String, // quốc tịch
        nationalIDNumber: String, // CMND
        healthInsuranceIDNumber: String, // mã thẻ barpo hiểm y tế
        address: String,
        phoneNumber: String,
    }
);

module.exports = mongoose.model('User', UserSchema);
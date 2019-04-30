// clinic or hospital
// bệnh viện/ phòng khám

const mongoose = require('mongoose');

let HospitalSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        phoneNumber: String
    }
);

module.exports = mongoose.model('Hospital', HospitalSchema);
// Chuyên khoa

const mongoose = require('mongoose');

let HospitalDepartmentSchema = new mongoose.Schema(
    {
        name: String,
        HospitalID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    }
);

module.exports = mongoose.model('HospitalDepartment', HospitalDepartmentSchema);
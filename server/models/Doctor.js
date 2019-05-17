// Doctor of medicine
// thông tin bác sĩ và thông tin đăng nhập

const mongoose = require('mongoose');

let DoctorSchema = new mongoose.Schema(
    {
        email: String, // đăng nhập bằng email
        password: String,

        name: String,
        phoneNumber: String,
        hospitalID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        },
        departmentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'HospitalDepartment'
        },
        degrees: [String], // các bằng cấp
        experienceRecord: [String] // những nơi đã công tác, quá trình công tác
    }
);

DoctorSchema.methods.addADegree = degree => {
    this.comments.push(degree);
    return this.save();
};

DoctorSchema.methods.addAnExperience = exp => {
    this.comments.push(exp);
    return this.save();
};

module.exports = mongoose.model('Doctor',DoctorSchema);
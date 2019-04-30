// yêu cầu lịch hẹn

const mongoose = require('mongoose');

let AppointmentSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        doctorID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor'
        },
        detail: String, // yêu cầu khám
        appointmentDate: String, // ngày hẹn khám
        appointmentAccepted: String // yêu cầu đã được chấp nhận hay chưa: BOOKED: chấp nhận; PENDING: chờ xác nhận; CANCELED: bị bủy 
    }
);

module.exports = mongoose.model('Appointment', AppointmentSchema);
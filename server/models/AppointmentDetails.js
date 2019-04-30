// kết quả cuộc hẹn: bao gồm chẩn đoán, điều trị

const mongoose = require('mongoose');

let AppointmentSchema = new mongoose.Schema(
    {
        appointmentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        },
        diagnostics: [String], // chẩn đoán
        treatment: {
            notes: [String],
            medication: [      // thuốc và liều lượng
                {
                    name: String,       // tên thuốc
                    dosage: String      // liều dùng và cách dùng
                }
            ]
        },
        bill: [                // các dịch vụ sử dụng và chi phí
            {
                serviceName: String,
                cost: String
            }
        ]
    }
);

module.exports = mongoose.model('Appointment', AppointmentSchema);
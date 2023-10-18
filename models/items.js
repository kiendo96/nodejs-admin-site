const mongoose = require('mongoose')

const itemScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    ordering: {
        type: String,
        required: true
    }
}, {timestamps: {createdAt: 'create_at'}})

module.exports = mongoose.model('Items', itemScheme)
const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    targetDate: {
        type: Date,
        required: true
    },
    achieved: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Goal', goalSchema);

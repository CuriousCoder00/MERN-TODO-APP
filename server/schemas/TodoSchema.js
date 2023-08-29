const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    status : {
        type: String,
        enum: ['active', 'completed'],
        default: 'active'
    }
});

module.exports = mongoose.model('Todo', TodoSchema);
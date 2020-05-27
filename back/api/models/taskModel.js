'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskModelSchema = new Schema({
    title: {
        type: String,
        required: 'Favor informar o título '
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'done']
        }],
        default: ['pending']
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Task', TaskModelSchema);

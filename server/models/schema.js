const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 0,  // Assuming age is a number, provide a default value if needed
    },
    country: {
        type: String,
    },
    sex: {
        type: String,
        enum: ['Male', 'Female'],  
    },
    image:{
        type:String,
        require:false,
    },
    phoneNumber: {
        type: Number,
        default: null,  // Assuming phoneNumber is a number, provide a default value if needed
    },
    lastLogin: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        require:false,
    },
});

module.exports = mongoose.model('User', userSchema);


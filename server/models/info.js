const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const infoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shortAddress: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    images: [{
        src: {
            type: String,
            required: true
        }, 
        alt: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }],
    intro: {
        type: String,
        required: true
    },
    fullIntro: {
        type: String,
        required: true
    },
    bestDrinksIntro: {
        type: String,
        required: true
    },
    hours: {
        type: String,
        required: true
    },
    hoursDetail: [{
        day: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    }]
});

module.exports = mongoose.model('Info', infoSchema);
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TweetSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    screenName: {
        type: String,
        trim: true
    },
    tweetText: {
        type: String
    },
    tweetTime: {
        type: Date,
        default: Date.now
    } 
});

mongoose.model('Tweet', TweetSchema);
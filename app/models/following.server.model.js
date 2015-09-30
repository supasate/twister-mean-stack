'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowingSchema = new Schema({
    username: String,
    followings: [String]
});

mongoose.model('Following', FollowingSchema);
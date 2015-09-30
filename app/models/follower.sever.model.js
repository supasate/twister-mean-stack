'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowerSchema = new Schema({
    username: String,
    followers: [String]
});

mongoose.model('Follower', FollowerSchema);
'use strict';

var mongoose = require('mongoose');
var Tweet = mongoose.model('Tweet');
var errorHandler = require('./errors.server.controller');

exports.update = function(req, res, next) {
    if (req.user) {
        var tweet = new Tweet(req.body);

        tweet.save(function(err) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.json(tweet);
            }
        });
    } else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
};

exports.me_timeline = function(req, res, next) {
    if (req.user) {
        var username = req.user.username;

        Tweet.find({
            screenName: username
        }, function(err, tweets) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.json(tweets);
            }
        });
    } else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
};

exports.user_timeline = function(req, res, next) {
    if (req.user) {
        var username = req.params.username;

        Tweet.find({
            screenName: username
        }, function(err, tweets) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.json(tweets);
            }
        });
    } else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
};
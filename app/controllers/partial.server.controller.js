'use strict';

exports.render = function(req, res, next) {
    res.render('.' + req.path);
};
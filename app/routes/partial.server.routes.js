'use strict';

module.exports = function(app) {
    var partial = require('../controllers/partial.server.controller');
    app.route('/modules/:module/views/:view*').get(partial.render);
};
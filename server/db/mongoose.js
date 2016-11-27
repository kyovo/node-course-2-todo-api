var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:12345/TodoApp');

module.exports = {mongoose};

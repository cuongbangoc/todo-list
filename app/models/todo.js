var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: String,
    status: String,
    user: String
});

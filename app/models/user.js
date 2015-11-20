var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
    name : {type : String, default: ''},
    email: {type: String, default: ''},
    password: {type: String, default: ''}
});

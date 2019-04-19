const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String, 
    lastName: String,
    birthDay: Date,
    height: Number
});
const User = mongoose.model('User',UserSchema);

module.exports = {
    User,
    UserSchema,
}
const mongoose = require('mongoose');


mongoose.connect(
    'mongodb://localhost:27017/nov-18',
    {useNewUrlParser:true}
);
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
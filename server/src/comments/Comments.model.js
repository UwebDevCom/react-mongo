const mongoose = require('mongoose');
const {User} = require('../users/User.model');
mongoose.connect(
    'mongodb://localhost:27017/nov-18',
    {useNewUrlParser:true}
);

const Comment = mongoose.model('Comment', {
    body: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        validate: async (id)=> {
            const user = await User.findById(id);
            if (user) return true;
            return false;
        },
        required: true
    }
});

module.exports = { 
    Comment
};
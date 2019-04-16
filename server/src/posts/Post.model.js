const mongoose = require('mongoose');
const {User} = require('../users/User.model');
//const {UserSchema} = require('../users/User.model');
mongoose.connect(
    'mongodb://localhost:27017/nov-18',
    {useNewUrlParser:true}
);

const Post = mongoose.model('Post', {
    title: {
        type: String,
        required: true
    },
    creatinDate: {
        type : Date,
        default: Date.now()
    },
    body: String,
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: async (id)=> {
            const user = await User.findById(id);
            if (user) return true;
            return false;
        }

    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment',
        require: false
    }]
});

module.exports = { 
    Post
};
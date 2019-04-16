
const {Comment} = require('./Comments.model');
const {getPostById} = require('../posts/posts');

async function getComments() {
	return Comment.find({}).populate('author');
}

async function createComment(postId,newComment) {
    const comment = new Comment(newComment);
    await comment.save();
    const post = await getPostById(postId);
    post.comments.push(newComment);
    await post.save();
    return comment;
}

async function deleteUser(id) {
	// const usersCollection = await getUsersCollection('users');
	// return usersCollection.deleteOne({_id:ObjectID(id) });
	return User.findByIdAndDelete(id);
}


async function getUserById(id) {
	return User.findById(id);
}

async function updateUserById(id, { name,lastName }) {
	
	return User.findByIdAndUpdate(id, {name,lastName});

}

module.exports = {
    getComments,
    createComment
};
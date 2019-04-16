const {Post} = require('./Post.model');

async function getPosts() {
	return Post.find({}).populate('author');
}

async function createPost(newPost) {
	const post = new Post(newPost);
	return post.save();
}

async function deletePost(id) {
	return Post.findByIdAndDelete(id)
}
async function getPostById(id) {
	return Post.findById(id).populate('author');
}


async function updatePostById(id, { title, body }) {
	return Post.findByIdAndUpdate(id,{
		title,body
	});
}

async function getPostsByUserId(userId) {
	return Post.find({userId})
}

module.exports = {
	getPosts,
	createPost,
	deletePost,
	getPostById,
	updatePostById,
	getPostsByUserId
};
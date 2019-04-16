const { Router } = require('express');

const {
	getComments,
	createComment,

} = require('./comments');

const route = Router();


route.get('/posts/:postId/comments', async (req, res) => {
	if (req.params.postId) {
        try {
		const comments = await getComments(req.params.postId);
		res.send(comments);
    }catch(e) {res.status(400); res.send(e.message)}
    }	
});

route.post('/posts/:postId/comments', async (req, res) => {
	try {
		const comments = await createComment(req.params.postId,req.body);
		res.send(comments);
	} catch (e) {
		res.status(409);
		res.send(e.message);
	}
});

// route.delete('/posts/:id', async (req, res) => {
// 	const posts = await deletePost(req.params.id);
// 	res.send(posts);
// });

// route.get('/posts/:id', async (req, res) => {
// 	const post = await getPostById(req.params.id);
// 	res.send(post);
// });


module.exports = {
	route
};












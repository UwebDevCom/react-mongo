
//server 
const { Router } = require('express');
const route = Router();


//functions
const {
	getUsers,
	createUser,
	deleteUser,
	getUserById,
	updateUserById
} = require('./users');

const {
	getPostsByUserId,
	createPost
} = require('../posts/posts');


//routes
route.get('/users', async (req, res) => {
	try {
		const users = await getUsers();
		res.send(users);
	} catch (e) {
		res.status(400);
		res.send(e.message);
	}
});

route.post('/users', async (req, res) => {
	try {
		const result = await createUser(req.body);
		res.send(result);
	} catch (e) {
		res.status(409);
		res.send(e.message);
	}
});

route.get('/users/:id', async (req, res) => {
	try {
		const user = await getUserById(req.params.id);
		res.send(user);
	} catch (e) {
		res.status(400).send(e.message);
	}
});

route.delete('/users/:id', async (req, res) => {
	try {
		const user = await deleteUser(req.params.id);
		res.send(user);
	} catch (e) {
		res.status(400).send(e.message);
	}
});

route.put('/users/:id', async (req, res) => {
	try {
		// const usersCollection = await getUsersCollection('users');
		const user = await updateUserById(req.params.id, req.body);
		res.send(user);
	} catch (e) {
		res.status(400).send(e.message);
	}
});

route.get('/users/:id/posts', async (req, res) => {
	const posts =  await getPostsByUserId(req.params.id);
	res.send(posts);
});

route.post('/users/:id/posts', async (req, res) => {
	const post = {
		...req.body,
		userId: req.params.id,
	};

	const posts = await createPost(post);

	res.send(posts);
});

module.exports = {
	route
};











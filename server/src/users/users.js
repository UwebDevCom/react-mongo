
//const { MongoClient, ObjectID } = require('mongodb');
const {User} = require('./User.model');

// async function getUsersCollection(collection) {
// 	const connection =
// 		await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });

// 	const database = connection.db('nov-18');
// 	return database.collection(collection);
// }

async function getUsers() {
	return User.find({});
}

async function createUser(newUser) {
	const user = new User(newUser);
	await user.save();
	return user;
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

// return usersCollection.updateOne(
// 		{ _id: ObjectID(id) },
// 		{ $set: {"name": name, "lastName": lastName } }
// 	);
}

module.exports = {
	getUsers,
	createUser,
	deleteUser,
	getUserById,
	updateUserById
};
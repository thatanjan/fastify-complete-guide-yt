const users = require('./users.json')

const getUsers = async (request, reply) => {
	const { gender } = request.query

	if (!gender) return users

	const filteredUsers = users.filter(
		(user) => user.gender.toLowerCase() === gender.toLowerCase()
	)

	return filteredUsers
}

const getUserById = (request, reply) => {
	const id = parseInt(request.params.id, 10)
	const user = users.find((user) => user.id === id)
	return user || reply.status(404).send({ error: 'User not found' })
}

const addUser = (request) => {
	const totalUsers = users.length

	const newUser = { ...request.body, id: totalUsers + 1 }

	users.push(newUser)

	return newUser
}

module.exports = { getUsers, getUserById, addUser }

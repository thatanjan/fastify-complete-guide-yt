const { addUser, getUsers, getUserById } = require('../handlers')

const addUserSchema = {
	schema: {
		body: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
				},
				age: {
					type: ['number', 'string'],
				},
				gender: {
					type: 'string',
					enum: ['male', 'female', 'others'],
				},
			},
			required: ['name', 'gender', 'age'],
			additionalProperties: false,
		},
		response: {
			200: {
				type: 'object',
				properties: {
					name: {
						type: 'string',
					},
					gender: {
						type: 'string',
					},
				},
				required: ['name', 'gender', 'age'],
			},
		},
		handler: addUser,
	},
}

const handler = (app, opts, done) => {
	app.get('/:id', getUserById)

	app.get('/getUsers', getUsers)

	app.post('/addUser', addUserSchema, addUser)

	done()
}

module.exports = handler

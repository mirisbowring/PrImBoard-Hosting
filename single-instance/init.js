db = db.getSiblingDB('primboard')

db.createUser({
	user: 'primboardapi',
	pwd: 'Start123',
	roles: [
		{
			role: 'readWrite',
			db: 'primboard',
		},
	],
});
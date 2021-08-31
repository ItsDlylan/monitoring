const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const port = process.env.PORT || 4545;
const students = [];

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
	rollbar.info('html file served succesfully');
});

app.post('/api/student', (req, res) => {
	let { name } = req.body;
	name = name.trim();

	const index = students.findIndex((studentName) => studentName === name);

	if (index === -1 && name !== '') {
		students.push(name);
		rollbar.log('Student added successfully', {
			author: 'Scott',
			type: 'manual entry',
		});
		res.status(200).send(students);
	} else if (name === '') {
		rollbar.error('No name given');
		res.status(400).send('must provide a name.');
	} else {
		rollbar.error('student already exists');
		res.status(400).send('that student already exists');
	}
});

var Rollbar = require('rollbar');
var rollbar = new Rollbar({
	accessToken: '346521dca7414267ae955ca4dc98413a',
	captureUncaught: true,
	captureUnhandledRejections: true,
});

app.use(rollbar.errorHandler());

app.listen(port, () => console.log(`take us to warp ${port}`));

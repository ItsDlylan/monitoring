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

	students.push(name);
	rollbar.log('student added succesfully', {
		author: 'Scott',
		type: 'manual entry',
	});

	res.status(200).send(students);
});

var Rollbar = require('rollbar');
var rollbar = new Rollbar({
	accessToken: '346521dca7414267ae955ca4dc98413a',
	captureUncaught: true,
	captureUnhandledRejections: true,
});

app.use(rollbar.errorHandler());

app.listen(port, () => console.log(`take us to warp ${port}`));

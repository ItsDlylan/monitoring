const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const port = process.env.PORT || 4545;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, () => console.log(`take us to warp ${port}`));

var Rollbar = require('rollbar');
var rollbar = new Rollbar({
	accessToken: '346521dca7414267ae955ca4dc98413a',
	captureUncaught: true,
	captureUnhandledRejections: true,
});

rollbar.log('this was my first rollbar log.');

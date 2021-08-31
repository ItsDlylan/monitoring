const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const port = process.env.PORT || 4545;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, () => console.log(`take us to warp ${port}`));

const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();
app.use(cors());

app.listen(PORT, error => {
	if(error)
		return console.error(error);

	return console.log('Server listening on port ' + PORT);
});

module.exports = app;

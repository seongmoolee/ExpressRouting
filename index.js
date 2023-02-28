const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});

app.get('/', (req, res) => {
	res.send('ExpressRouting');
})

app.get('/:param', async (req, res) => {
    console.log(req.params.param);
});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());

const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello from express...');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes');

app.use(morgan('dev'));
app.use(bodyParser.json());

const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () =>
  console.log(`Budget-Hackathon listening on port ${port}!`)
);

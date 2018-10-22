const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

const port = process.env.PORT || 8080;
const public = path.join(__dirname, '..', 'build');

app.use(express.static(public));
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Test server running at http://localhost:${port}`);
});

const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  res.send('<h1>Started!</h1>');
});

app.listen(3000, 'localhost', () => {
  console.log('server listen port 3000');
});

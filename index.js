const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', (req, res, next) => {
  res.status(200).send('<h1>Started!</h1>');
  next();
});

app.listen(PORT, () => {
  console.log(`server listen port ${PORT}`);
});

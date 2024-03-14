const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is SIT737 Task!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/styles/style.css', function(req, res) {
    res.set('Content-Type', 'text/css');
    res.sendFile(__dirname + '/public/styles/style.css');
  });
  
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
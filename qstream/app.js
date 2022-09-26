const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//set static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/overlay.html'));
});


app.get('/teams', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/management/teams.html'));
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
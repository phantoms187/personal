const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

app.use(express.static('Public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(express.static(path.join("client", "skatejoring", "build",)));

app.get('/*', function(req, res) {
    res.sendFile(__dirname +"/index.html");
});
  
app.listen(PORT, function(){
  console.log('Server is running on Port:', PORT);
});
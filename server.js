var express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Node app is running on port @@ 3000');
});
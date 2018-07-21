var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.set('view engine', 'ejs');

var title = "Some words starting with p";
var componentArray = ['potentiometer', 'piezo', 'photoresistor', 'pushbutton'];
app.get('/', function(req, res){
    res.render('index', {
        title: title,
        components: componentArray
    });
});

server.listen(3000, function(){
    console.log('Listening on port 3000...');
});
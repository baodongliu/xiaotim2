var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
app.use('/js', express.static(path.resolve(__dirname, 'js')));
app.use('/css', express.static(path.resolve(__dirname, 'css')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
};
app.get('/*', renderIndex);
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});

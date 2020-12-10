const express = require('express');
const path = require('path');

const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'build/static')));


function normalizePort(val) {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

  
const port = normalizePort(process.env.PORT || '3030');


app.use(function(err, req, res, next) {
    console.log('starting the dev serve');
});
app.listen(port);
module.exports = app;
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:salasana@database/tododata');

app.listen(port, err => {
  console.log('todo list RESTful API server started on: ' + port);
});

app.get('/', (req, res) => {
  res.send('MOI');
});

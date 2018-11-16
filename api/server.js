var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Task = require('./models/todoListModel'),
  bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:salasana@database/tododata');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/todoListRoutes');
routes(app); //register the route

app.listen(port, err => {
  console.log('todo list RESTful API server started on: ' + port);
});
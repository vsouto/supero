const express = require('express'),
  app = express(),
  cors = require('cors'),
  mongoose = require('mongoose'),
  Task = require('./api/models/taskModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/supero')

app.use(cors()); //enable cors on all requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const taskRoutes = require('./api/routes/taskRoutes');
taskRoutes(app);

const port = process.env.PORT || 3001;
app.listen(port);

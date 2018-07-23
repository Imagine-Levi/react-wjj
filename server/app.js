const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const SourceMapSupport = require('source-map-support');
const bb = require('express-busboy');
const Routes = require('./routes');

const app = express();

bb.extend(app);

// allow-cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3002");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// set the port
const port = process.env.PORT || 3000;

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/wjj', {
  useMongoClient: true
}).on('open', () => {
  console.log('数据库连接成功！！！');
});

// add Source Map Support
SourceMapSupport.install();

app.get('/', (req, res) => {
  return res.end('Api working');
});

app.use('/api', Routes);

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// start the server
app.listen(port, () => {
  console.log(`App Server Listening at ${port}`);
});
const express = require('express');
const session = require('express-session');
const cors =    require('cors');
global.config =  require('./config/config.js');
const path =    require('path');
const morgan =  require('morgan');
const bodyParser = require('body-parser');
global.currencies = require('./modules/currencies.js')();
const app = express();
let router = express.Router();

currencies.load();



global.models = {
  product:require('./models/product.js')()
};
app.set('port',config.port);
app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});


app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors({
   origin:['http://localhost:8081'],
    methods:['GET','POST'],
    credentials: true
}));
app.use(session({
  secret: config.session.secret,
  resave: false,
  saveUninitialized: true
}));
app.use(require('./routes.js')(router));

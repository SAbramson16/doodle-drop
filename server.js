// Import required modules
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const commentsRoutes = require('./controllers/api/commentRoutes');

const routes = require('./controllers');

// Initialize Express application
dotenv.config();
const app = express();

// Set up port
const PORT = process.env.PORT || 3001;

// Configure session
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Set up session middleware
app.use(session(sess));

// Set up Handlebars engine
app.engine('handlebars', exphbs(
  {
    defaultLayout: 'main', partialsDir: [path.join(__dirname, 'views/partials')]
  }
  ));
app.set('view engine', 'handlebars');

// Middleware for JSON and form data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// for parsing application/json
app.use(bodyParser.json()); 

app.use('/', routes);

// Comment Routes setup
app.use('/api', commentsRoutes);

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

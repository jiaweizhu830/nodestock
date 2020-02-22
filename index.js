//Stock Porfolio
// Creates an Express application. (for static pages)
// The express() function is a top-level function exported
// by the express module.
const express = require('express');
const exphbs = require('express-handlebars');
// express instance
const app = express();
const path = require('path');

// tell app which port is listened on
const PORT = process.env.PORT || 5000;

//Set Handlerbars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//Set hanldebar routes
app.get('/', function(req, res) {
  res.render('home', {
    stuff: "This"
  });
})

// set static folder (not need route)
app.use(express.static(path.join(__dirname, 'public')));

// npm run dev

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));

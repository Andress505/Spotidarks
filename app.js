const cors = require('cors');
const cookieParser = require('cookie-parser');

//custom modules
const login = require('./src/routes/login.route')
const auth = require('./src/routes/auth.route')
const authenticatedUser = require('./src/middlewares/auth_user.middleware');
const home = require('./src/routes/home.route')

const express = require('express');
const app = express();


//EJS motor de vistas
app.set('view engine', 'ejs');

//directorio estatico
app.use(express.static(`${__dirname}/public`));

//usar cors y cookies
app.use(cors()).use(cookieParser());

//login page
app.use('/login', login);

//Auth page
app.use('/auth', auth);

//home page
app.use('/', home);

//checked user authenticated
app.use(authenticatedUser);

app.listen(5000, () => {
    console.log(`Server running at http://localhost:5000`)
});

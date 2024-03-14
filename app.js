const cors = require('cors');
const cookieParser = require('cookie-parser');


const express = require('express');
const app = express();

//custom modules
const login = require('./src/routes/login.route')
const auth = require('./src/routes/auth.route')

//directorio estatico
app.use(express.static(`${__dirname}/public`));

//usar cors y cookies
app.use(cors()).use(cookieParser());

//EJS motor de vistas
app.set('view engine', 'ejs');

//login page
app.use('/login', login);

//Auth page
app.use('/auth', auth);

app.listen(5000, () => {
    console.log(`Server running at http://localhost:5000`);
});

const express = require('express');
const bodyParser = require('./config/bodyParser');
const routes = require('./routes/index');

const app = express();

app.use(express.static('dist'));
bodyParser(app);
app.use(routes);

app.listen(8080, () => console.log('Listening on port 8080'));

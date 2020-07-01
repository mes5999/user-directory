// Create a basic express server





const express = require('express');
const path = require("path");

const app = express();

let PORT = process.env.PORT || 8080;

// Sets up the middleware for the  Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// require('./routes/ApiRoutes')(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})
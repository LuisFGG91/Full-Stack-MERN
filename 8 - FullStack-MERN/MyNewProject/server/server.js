
const express = require('express')
const app = express();
const cors = require('cors') // This is new

require('./app/config/mongoose.config'); // This is new
app.use(cors()) // This is new
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // This is new

require('./app/routes/person.routes')(app); // This is new

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});


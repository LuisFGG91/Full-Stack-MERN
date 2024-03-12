const mongoose = require('mongoose');
mongoose.connect("mongodb://172.23.0.3:27017/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
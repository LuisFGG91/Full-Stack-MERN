const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/user',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Established a connection to the database'))
.catch ( err => console.log('Something went wrong when connecting to the database ', err));

//Models
const UserSchema = new mongoose.Schema(
    {
        name: String,
        age: Number
    }
)
const User = mongoose.model("User",UserSchema)

// Controllers
const UsersMet = {

findAllUsers : (rea, res) => {
    User.find()
        .then(allDaUsers => res.json({ users: allDaUsers }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
},

findoneSingleUser : (req, res) => {
        User.findone({ _id: req - params.id })
        .then(oneSingleUser => res.json({ user: oneSingleUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
},

createNewUser : (reg, res) => {
            User.create(req.body)
                .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
                .catch(err => res.json({ message: "Something went wrong", error: err }));
},

updateExistingUser : (req, res) => {
                User.findOneAndUpdate({_id: req.params.id }, reg.body, { new: true })
                .then(updatedUser => res.json({ user: updatedUser }))
                .catch(err => res.json({
                    message: "Something went wrong",
                    error: err }));
},

deleteAnExistingUser : (req, res) => {
                User.deleteOne({ _id: req.params.id })
                .then(result => res.json({ result: result }))
                .catch(err => res.json({ message: "Something went wrong", error: err }));
},
}
// Routers
app.get("/api/users/", UsersMet.findAllUsers);
app.get("/api/users/:id", UsersMet.findoneSingleUser);
app.put("/api/users/update/:id", UsersMet.updateExistingUser);
app.post("/api/users/new", UsersMet.createNewUser);
app.delete("/api/users/delete/:id", UsersMet.deleteAnExistingUser);

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

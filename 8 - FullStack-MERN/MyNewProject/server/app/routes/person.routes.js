
const PersonController = require('../controllers/person.controller');



module.exports = function (app) {
    app.get('/api', PersonController.index);
    app.post('/api/person', PersonController.createPerson);
    app.get('/api/person', PersonController.getAllPeople);
    app.get('/api/person/:id', PersonController.getPerson);
}
const { Personas } = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    console.log(request.body)
    const { firstName, lastName } = request.body;
    Personas.create({
        firstName,
        lastName
    })
        .then(person => 
            response.json(Personas)
        )
        .catch(err => response.json(err));

}

module.exports.getAllPeople = (request, response) => {
    Personas.find({})
        .then(personas => response.json(personas))
        .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
    Person.findOne({ _id: request.params.id })
        .then(person => response.json(person))
        .catch(err => response.json(err))
}
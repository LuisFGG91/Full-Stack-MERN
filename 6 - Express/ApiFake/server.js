const app = require('./src/app');
const config = require('./src/config/config');

const server = app.listen(config.port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

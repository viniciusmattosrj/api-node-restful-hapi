require('./services/mongo');
require('dotenv').config();

const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const { port, host } = require('./config/enviroment.js');

const init = async () => {
    const server = Hapi.server({ port, host });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
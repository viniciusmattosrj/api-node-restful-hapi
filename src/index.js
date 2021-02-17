const Hapi = require('@hapi/hapi');
const routes = require('./routes');
require('dotenv').config();
const { port, host } = require('./config/auth.js');

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
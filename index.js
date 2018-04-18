const Hapi = require('hapi');
const dotenv = require('dotenv');

const Vision = require('vision');
const Inert = require('inert');
const handlebars = require('handlebars');
const extend = require('handlebars-extend-block');

dotenv.load();
const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 3000
});
server.register([Vision,
    {
        register: require('hapi-router'),
        options: {
            routes: 'routes/**/*.js'
        }
    }, {
        register: require('hapi-postgres-connection')
    }, {
        register: Inert
    }
], function(err) {
    if (err) {
        console.log('Error cargando un módulo');
    }
});
server.views({
    engines: {
        html: {
            module: extend(handlebars),
            isCached: false // En producción esto debe ser TRUE
        }
    },
    path: 'views',
    layoutPath: 'views/layout',
    layout: 'default',
    partialsPath: 'views/partials'
        /* helpersPath: 'views/helpers' */
});

server.start(function(err) {
    console.log('Server running at: ', server.info.uri);
});
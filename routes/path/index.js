module.export = [{
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        return reply('Hola Root');
    }
}];
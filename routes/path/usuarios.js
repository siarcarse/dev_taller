module.export = [{
    method: 'GET',
    path: '/usuarios',
    handler: function(request, reply) {
        return reply('Hola Usuario');
    }
}];
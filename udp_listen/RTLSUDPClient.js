const PORT = 5300;
const HOST = 'studio.connectusglobal.com';

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('listening', function () {
    const address = server.address();
    console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port + ' - ' + message);
});

server.bind(PORT, HOST);
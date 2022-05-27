const http = require('http');

/*const server = http.createServer();

server.on('connection', (socket)=> {
    console.log('nueva conexion detectada: ');
})

server.listen(2012);

console.log('escuchando en el puerto 2012');
*/

const server = http.createServer( (req, res)=>{
    if(req.url === '/') {
        res.write('hola Peter');
        res.end(); // siempre para finalizar la respuesta
    }

    if(req.url == '/coches'){
        res.write('coche 1');
        res.end();

    }
});
server.listen(3000);
// se puede concatenar la llamada al metodo listen con el final de la anterio linea
console.log('escuchando en el puerto 3000 ..');

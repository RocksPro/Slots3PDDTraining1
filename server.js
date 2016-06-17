var PORT = 3000;

// load koa
var koa = require('koa');
var app = new koa();
var router = require('koa-router')();

// CORS for cross-domain request
var cors = require('koa-cors');
app.use(cors());


// routers

router.get('/', function *(next) {
    this.body = 'Hello World!';

    yield next;
});

router.get('/LobbyBonus', function *(next) {
    this.body = (Math.floor(Math.random() * 10.0).toString());

    yield next;
});



// add routes
app
    .use(router.routes())
    .use(router.allowedMethods());


// koa error handlers
process.on('uncaughtException', function (error) {

    if (error.syscall !== 'listen') {
        console.error(error);
        process.exit(1);
    }

    var bind = 'Port ' + PORT;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit();
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit();
            break;
        default:
            throw error;
    }
});

//start service
app.listen(PORT, function () {
    console.log(`API service listen http://localhost:${PORT}`);
});
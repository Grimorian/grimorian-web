const 
http = require('http'),
finalhandler = require('finalhandler'),
serveStatic = require('serve-static'),
serve = serveStatic('./'),
server = http.createServer((req, res) => serve(req, res, finalhandler(req, res)))

try {
    server.listen(80)
} catch(e) {
    console.error(e)
}

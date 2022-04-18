import * as data from './data.js';
import http from "http";
import fs from "fs";

http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    switch(path) {
        case '/':
            fs.readFile("home.html", (err, data) => {
             if (err) return console.error(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
             res.end(data.toString());
            });
            break;
        case '/about':
            fs.readFile("about.html", (err, data) => {
                if (err) return console.error(err);
                   res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString());
               });
            break;

            case '/test':
                fs.readFile("about.html", (err, data) => {
                    if (err) return console.error(err);
                       res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(console.log (data.getAll()));
                   });
                break;

        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 code. Sorry! File not found');
            break;
    }
}).listen(process.env.PORT || 3000);
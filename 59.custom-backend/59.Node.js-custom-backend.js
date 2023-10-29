// Added an module http which is used for creating server.
const http = require("http");

// We added a module fs for reading any files.
const fs = require("fs");

// Here we are giving Hostname&Port manually and now we giving only local server but we can give here your own buyed Hostname&Port. 
const hostname = '127.0.0.1';
const port = '3000';

const home = fs.readFileSync('./index.html')
const product = fs.readFileSync('./product.html')
const services = fs.readFileSync('./services.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')

// We are creating a server using http module. He takes a callback request and response after this activity we can serve any file using res.end.  
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'Text/html');
    // Here we created a variable which have access of incoming url form server. 
    allurls = req.url;

    // This is printing urls but where he founded these url so answer is simple, When man clicks any button in this website (res.end(home)) then his button's url come in the variable allurls with the help of server. and When url is saved in allurls then i use this url to serve file.
    console.log(req.url);
    // res.end(home);
    // When url is saved in allurls then i created a if else function in function if url is /index then we have the access of file index and we saved this file in index then if url matched to my url of the file index then we serve the file index.
    if (allurls == '/index') {
        res.end(home);
    }
    else if (allurls == '/product') {
        res.end(product);
    }
    else if (allurls == '/services') {
        res.end(services);
    }
    else if (allurls == '/about') {
        res.end(about);
    }
    else if (allurls == '/contact') {
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found. </h1>")
    }
});

// Here we are telling that listen the server on port = 3000 and hostname = '127.0.0.1';.
server.listen(port, hostname, () => {
    console.log(`servelistening at http://${hostname}:${port}/`);
});
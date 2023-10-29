// Added an module http which is used for creating server.
const http = require("http");

// We added a module fs for reading any files.
const fs = require("fs");

// Here we are reading a html file with the help of fss module.
const filecontent = fs.readFileSync('28.-Seudo-selector-before-and-after.html');

// We are creating a server using http module. He takes a callback request and response after this activity we can serve any file sing res.end. 
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(filecontent);
})

// Here we are listening the created server on port 8000 and this is (127.0.01) local server url().
server.listen(8000,'127.0.0.1', ()=>{
    console.log("Listening on port 80...");
});
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello World i am murli');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Before and after Seudo selector</title>
        <style>
            body {
                margin: 0px;
                padding: 0px;
                background-color: black;
                color: aqua;
            }
    
            headSAer::before {
                background-image: url(https://wallpapershome.com/images/pages/pic_h/1257.jpg);
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: -1;
                top: 0;
                left: 0;
                opacity: 0.7;
            }
    
            .navigation {
                display: flex;
                background-color: black;
                padding: 34px 23px;
                border-radius: 100px;
    
            }
    
            li {
                list-style: none;
            }
    
            .item1 {
                padding-left: 80px;
            }
    
            .item2 {
                padding-left: 80px;
            }
    
            .item3 {
                padding-left: 80px;
            }
    
            .item4 {
                padding-left: 80px;
            }
    
            .item5 {
                margin-left: 1000px;
                border-color: aliceblue;
            }
    
            section {
                display: flex;
                flex-direction: column;
                text-align: center;
                height: 400px;
                justify-content: center;
                padding: 10px 20px;
            }
    
            /* section::before {
                content: "!! aman how are you?"
            } */
            h1 {
                font-size: 2rem;
            
            }
            p{
                margin: 25px 25px;
            }
            
        </style>
    </head>
    
    <body>
        <header>
            <nav class="navbar">
                <ul class="navigation">
                    
                    <li class="item1">Home</li>
                    <li class="item2">About</li>
                    <li class="item3">Services</li>
                    <li class="item4">Contact us</li>
                    <li class="item5">Search here:
                        <input type="text">
                    </li>
                </ul>
            </nav>
        </header>
        <section>
            <h1>!! Aman how are you?</h1>
            <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea aperiam culpa tenetur nisi quibusdam maxime
                totam enim nobis, laboriosam reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                accusantium, nostrum culpa odit officia nesciunt hic saepe ipsam molestiae odio corrupti consectetur
                ullam reprehenderit officiis necessitatibus? Quis, perspiciatis? Vitae, exercitationem!.</P>
    
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium suscipit consequatur dolore dolorem iure ad possimus praesentium! Ipsa aspernatur, mollitia suscipit soluta, adipisci ea fugiat repudiandae repellendus sapiente itaque vitae rerum est tempora quia accusamus laborum eius veniam fuga nihil temporibus omnis. Dignissimos culpa ratione adipisci esse. Fuga, similique eveniet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas deleniti at sapiente voluptates consequatur perferendis. Illo optio laborum repudiandae alias, ullam ad! Tenetur placeat quam error mollitia, ut esse cumque.</p>
        </section>
    </body>
    
    </html>`);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
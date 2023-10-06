import {createServer} from "http";

const PORT = 8082;

createServer((req,res) => {
    res.write('Hello World of Nginx!');
    console.log('BATEU AQUI NGINX!')
    res.end();
})
.listen(PORT, () => console.log('Backend listening in port ', PORT ));
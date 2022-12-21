import http from 'http'

const server = http.createServer((request, response) => {
    response.end('My first "Hello World" from backend')
}
)

server.listen(3000, () => console.log('Server listening on port 3000'))
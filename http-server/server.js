const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write('Welcome to home page')
        res.end()
    }

    if (req.url === "/home") {
        res.setHeader('Content-Type', "text/html")
        res.write('<h1>Welcome to home page</h1>')
        res.end()
    }

    if (req.url === "/about") {
        res.setHeader('Content-Type', "text/plain")
        res.write('Welcome to about page')
        res.end()
    }
})

const PORT = 3000
server.listen(PORT, () => {
    console.log('Server is started at PORT', PORT)
})
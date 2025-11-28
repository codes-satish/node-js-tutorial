import http from 'http'
import { readFile } from 'fs/promises'
import fs from 'fs'
import path from 'path'

const server = http.createServer(async (req, res) => {


    if (req.method === "GET") {
        if (req.url === "/") {
            try {
                const data = await readFile(path.join('../public/index.html'))
                res.setHeader("content-type", 'text/html')
                res.end(data)
            } catch (err) {
                res.writeHead(404, {
                    "content-type": "text/html"
                })
                res.end("404 page not found")
            }
        }
    }


    if (req.method === "POST" && req.url === '/shorten') {
        const body = ""

        req.on("data", (chunk) => {
            body = body + chunk
        })

        req.on('end', () => {
            console.log(body)

            const { url, shortCode } = JSON.parse(body)

            if (!url) {
                res.writeHead(400, { "content-type": "text/plain" })
                return res.end("URL is mandatory")
            }

            if (!shortCode) {
                res.writeHead(400, { "content-type": "text/plain" })
                return res.end("Short URL is mandatory")
            }

            fs.writeFile('data', body)
            
        })
    }
})

const PORT = 3000
server.listen(PORT, () => {
    console.log('server started at port', PORT)
})
const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url  === '/'){
        res.end("Welcome to the home page")
    }
    if(req.url === '/about'){
        res.end("Our History")
    }
    res.end(`
    <h1>Opss Error 404</h1>
    <p>Indi ko makita ing nausoy</p>
    <a href="/">Click</a>
    `)
})

server.listen(5000)

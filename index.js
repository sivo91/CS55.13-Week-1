// Peter Sivak 8/18/22 Server Side

const http = require('http')

// create server
const server = http.createServer((req, res) => {
  
  res.writeHead(200, {'content-type': 'text/html'})
  res.write('<h1 style="color:blue" >Hello Week 1</h1>')
  res.write('<h3> Assignment 2: Git + GitHub Basics</h3>')
  res.end()
  
})

server.listen(5000)
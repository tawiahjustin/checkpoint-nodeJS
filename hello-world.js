// task 1- hello world program
console.log('HELLO WORLD')

// task 2 - create server program

const http = require('node:http')

const server = http.createServer((req, res) => {
  res.writeHead(200, 'text/plain')
  res.end('<h1>Hello Node!!!</h1>\n')
})

server.listen(3000, () => console.log('Server running on port 3000'))

//task 3a -creating  a file

const fs = require('node:fs')

//fs.writeFileSync('./welcome.txt', "Hello Node") method 1
fs.writeFile('welcome.txt', 'Hello node', (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('file written successfully')
  }
})

// task 3b- reading a file from hello.txt
fs.readFile('./hello.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
})

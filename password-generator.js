// task 4 - function that generate password

const generator = require('generate-password')
const password = generator.generate({
  length: 10,
  numbers: true,
  symbols: true,
  uppercase: true,
})

console.log(password)

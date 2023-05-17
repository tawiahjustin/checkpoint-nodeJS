var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'justintawiah@gmail.com',
    pass: 'SOmePassWord',
  },
})
var mailOptions = {
  from: 'justintawiah@gmail.com',
  to: 'tawiahjustin@gmail.com',
  subject: 'Sending mails to myself',
  text: 'Hi myself',
}

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Email sent: ' + info.response)
  }
})

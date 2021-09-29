
const sgMail = require('@sendgrid/mail')

module.exports = (mail,name,check)=>{
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: mail, 
  from: {
    name: 'Visitor Tracking System',
    email: 'abhishekgautam388@gmail.com'
  }, 
  subject: 'Greetings',
  text: `Hey ${name}, You have just checked ${check} to the premises`,
  html: `<h2>Hey ${name},</h2> <h3>You have just checked ${check} the premises.</h3>`,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}
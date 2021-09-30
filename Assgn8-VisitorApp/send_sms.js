const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
module.exports = (phone)=>{
client.messages
  .create({
     body: 'Hello from twilio',
     from: '+918219226812',
     to: '+91'+phone,
   })
  .then(message => console.log(message.sid));
}
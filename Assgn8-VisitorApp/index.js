const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const seedDb = require('./seed');

mongoose.connect('mongodb://localhost:27017/visitor-db')
.then(()=>
    console.log('DB connected'))
.catch(()=> 
    console.log('Error in database connection'));

    seedDb();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method'));


app.get('/',(req,res) => {
    res.render('home');
});



app.listen(3000,()=>{
    console.log('server running at http://localhost:3000/');
});

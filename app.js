const express = require('express');
const app = express();
const userRoute = require('./api/routes/user');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb+srv://Madhushudh:madhu123@sbs.tbynzrf.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error',err=>{
    console.log('connection failed');
});
mongoose.connection.on('connected',connected=>{
    console.log('connected');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user',userRoute);
app.use((req,res) => {
    res.status(400).json({
        message : 'bad requist'
    });
});
module.exports = app;
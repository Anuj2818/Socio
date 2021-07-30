const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin-anuj:1234@cluster0.7zgkl.mongodb.net/socio');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;
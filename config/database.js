const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
//the set is to close the warning about deprecation


mongoose.connect(process.env.DATABASE_URL)


const db = mongoose.connection
db.on('connected', function(){
    console.log(`Connected to ${db.name}`);
})
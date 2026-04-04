// logic here
const mongoose = require('mongoose')

async function connectDB(){
    
    try{
        await mongoose.connect('uri/db')
        console.log('connection established')
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connectDB
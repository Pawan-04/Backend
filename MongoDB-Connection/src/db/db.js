// logic here
const mongoose = require('mongoose')

async function connectDB(){
    
    try{
        await mongoose.connect('mongodb+srv://ppawankumar8382_db_user:fQ3yOgunmjazrc6o@cluster0.bzcfq5j.mongodb.net/halley')
        console.log('connection established')
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connectDB
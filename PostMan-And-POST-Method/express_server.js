var express = require('express')

const app = express();  // server created
//using midilware forn handling json format request
app.use(express.json())

let notes =[]

app.post('/notes',(req,res)=>{  
    notes.push(req.body)
    res.send({"message":"successfull",
        "notes":notes
    })
})
//b Server is programmed
app.listen(1000,()=>{
    console.log("server started")
})

var express = require('express')

const app = express();  // server created
//using midilware forn handling json format request
app.use(express.json())

let notes =[{
    "id":1,
    "name":"Pawan Pandey"
},{
    "id":2,
    "name":"Hamza Ali"
}]

app.put('/file',(req,res)=>{
    console.log(req.query.id)
    let i = notes.findIndex((elem)=>elem.id == req.query.id)
    notes[i].id=23
    res.json(notes[i])
    console.log(notes)

})
//b Server is programmed
app.listen(1000,()=>{
    console.log("server started")
    
})





























// app.post('/notes',(req,res)=>{  
//     notes.push(req.body)
//     res.send({"message":"successfull",
//         "notes":notes
//     })
// })
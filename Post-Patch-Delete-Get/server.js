const express = require('express')

const app = express();

//Midldeware
app.use(express.json())

let notes = []
get()
post()
patch()
del()

app.listen(7000,()=>{     // server starts
    console.log("Server is running")
})



function get(){
    app.get('/notes',(req,res)=>{
    console.log(req.body)
    res.json(notes)
})
}

function post(){
    app.post('/notes',(req,res)=>{
        notes.push(req.body)
        res.json({
            "message": `successfully Posted ${notes.length} data`,
            "notes": notes
        })
    })
}

function patch(){
    app.patch('/notes/:index',(req,res)=>{
        const index = req.params.index;
        const {title} = req.body;
        notes[index].title= title

        res.json(notes[index])
    })
}

function del(){
    app.delete('/notes/:index',(req,res)=>{
        const index = req.params.index
        notes.splice(index,1)
        res.send(`Deleted item ${index} from notes`)
    })

}
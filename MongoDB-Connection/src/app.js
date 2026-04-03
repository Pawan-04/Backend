var express = require('express');
var noteModel = require('./models/note.model');
var app = express();


app.use(express.json());

app.post('/notes', async (req, res) => {
    try {
        const note = await noteModel.create({
            title: req.body.title,
            description: req.body.description
        });

        console.log('Note created');

        res.status(201).json({
            message: "Created data",
            data: note
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
app.get('/notes',async (req,res)=>{

       const notes = await noteModel.find()
       res.status(200).json({"message":"created",
        "note":notes
       })
})

app.delete('/notes/:title',async (req,res)=>{

    const title = req.params.title;

       const notes = await noteModel.findOneAndDelete({title:title})
       res.status(200).json({"message":"Deleted",

       })
})


app.patch('/notes/:id',async (req,res)=>{
    const id =req.params.id
    const updatedValue = await noteModel.findOneAndUpdate({_id:id},{"title":"Title Updated",description:"Description changed"})
    res.status(200).json({
        message:"Updation Success",
        content:updatedValue
    })
})


module.exports = app;
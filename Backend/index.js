//import
var express = require("express")
require("./connection")

var empModel = require("./model/employee")
var cors = require('cors')

//initialize
var app = express()
app.use(cors())
//middleware
app.use(express.json());

//api
app.get('/trail', (req, res) => {
    res.send("Message for trail")
})

app.get('/', (req, res) => {
    res.send("Message")
})

//add api
app.post('/add', async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error);
    }
})
    

app.get('/view', async (req, res) => {
    try {
        var data=await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})

//delete api
app.delete('/remove/:id', async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "Deleted successfully" })
    } catch (error) {
        console.log(error);
    }
})
//update api
app.put('/update/:id', async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "updated successfully" })
    } catch (error) {
        console.log(error);
    }
})



//port
app.listen(3006, () => {
    console.log(("port is running"))
})
var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://saflamarakkar:safla@cluster0.bqnk2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("database connected")
    })
    .catch((err) => {
    console.log(err)
})
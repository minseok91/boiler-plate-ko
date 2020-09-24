const express = require('express')
const app = express()
const port = 5000


//몽고디비 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minseok:1q2w3e4r@boilerplate.ma7pb.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify : false
}).then(()=>console.log("MongoDb Connected ..."))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
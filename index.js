const express = require('express')
const app = express()
const port = 5000
const {User} = require("./models/User");
const bodyParser = require("body-parser");

const config = require("./config/key");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());
console.log(config.mongoURI);
//몽고디비 연결
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify : false
}).then(()=>console.log("MongoDb Connected ..."))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World! !! 새새해해복많이 받아라!! !!!')
})

app.post('/register',(req , res) => {
    //회원 가입 할 때 필요한 정보들을 client 에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    //console.log(req);
     const user = new User(req.body)

    user.save((err, userInfo ) => {
        if(err) return res.json({success : false,
        err})
        return res.status(200).json({
            success : true
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express');
const path = require('path');

const app = express();

app.use('/' , express.static(path.join(__dirname , "client" , "build")));

//middlewares
//bodyparser
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//routes
app.use('/api/todo' , require('./routes/api/todo'));


app.get('*' , (req , res)=>{
    res.sendFile(path.join(__dirname , "client" , "build" , "index.html"))
});


//listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>console.log(`Server running on port : ${PORT}`))
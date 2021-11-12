//jshint esversion: 6
const express= require('express');

const app= express();
app.use('/public',express.static('public'));
app.use(express.urlencoded({
    extended:true
}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/signup.html');
})

app.post('/',function(req,res){
    console.log(req.body.email);
    console.log(req.body.password);
})

const port=3000;


app.listen(port,function(){
    console.log('server '+port);
});
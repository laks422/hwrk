const Express=require('express');
var app=new Express();
app.get('/',(req,res)=>{
    res.send("hai");
});
app.get('/index',(req,res)=>{
     res.render('index');
});
app.get('/index/login',(req,res)=>{
     res.render('login');
});
app.get('/registration',(req,res)=>{
    res.render('registration');
});
app.listen(3003,()=>{
    console.log("Server running on http://localhost:3003");
});
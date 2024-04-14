require('dotenv').config()
const express=require('express')
const app=express()
const port =5000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/twitter',(req,res)=>{
    res.send('twitter server running')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login to the server</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2> request sent</h2>')
})

app.listen(process.env.port,()=>{
    console.log(`server is listening at ${port}`)
}) 
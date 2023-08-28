import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';

const app=express()
app.use(express.json())
dotenv.config()

app.get("/", (req, res) => {
    res.send("Working")
})


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected To DB Practice")
}).catch((error)=>{
    console.log("Error While Connecting MongoDB", error)
})
app.listen('5000',()=>{
    console.log("Server Running On Port Number 5000")
})
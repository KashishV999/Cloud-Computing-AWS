require('dotenv').config(); // add this as the very first line

const express= require('express');
const logger = require('./logger');
const pinoHttp = require('pino-http');


const app= express()

//USE : so every request pass through this middleware and it will log the request details
app.use(pinoHttp({ logger }));


app.get("/", (req,res, next)=>{
    logger.debug("Root endpoint was called");
    res.json({ message: "Welcome to the Book API" })
})

app.get("/book", (req,res, next)=>{
    logger.debug("Book endpoint was called");
    res.json({ book: "The Great Gatsby" })
})


const PORT= process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})

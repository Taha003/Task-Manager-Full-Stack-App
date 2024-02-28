// const express = require('express');;
// const app = express();
// const  tasks=require('./Routes/tasks');
// const http = require('http');
// //middleware
// app.use(express.json());
const connectDB=require('./Db/connect')


// app.use('/api/v1/task',tasks);
// app.listen(3000, console.log('Server is listening on port 3000'))
const express=require('express');
const app=express();
const task=require('./Routes/tasks');
require('dotenv').config();
app.use(express.static('./FrontEnd'))
app.use(express.json())
app.use('/api/v1/tasks',task);

const port=3000;

const startServer=async()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port,console.log(`Server is listening on port ${port}`));
    }catch(err){
        console.log(err)
    }

}
startServer()


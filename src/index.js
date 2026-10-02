// require('dotenv').config({path: `./env`})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 3000;
connectDB()

.then(()=>{

  app.listen(port,() =>{
console.log(`Server is running on port ${port}`)
  })
  .on('error',(err)=>{
    if(err.code === 'EADDRINUSE'){
      console.log("port is already in use, please change the port number in .env file")

    }else if(err.code === 'EACCES'){
      console.log("permission denied, please change the port number in .env file")
    }else if(err.code ==='ENOTFOUND'){
      console.log("Your database connection string has a typo in the URL/hostname (e.g., trying to connect to a cluster that doesn't exist).",err)
    }else{
      console.log("error",err)
    }
  })

})
.catch((err)=>{

  console.log("mongodb connection error", err)
})

/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port 
        ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR", error);
  }
})();

*/

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;


app.get(`/healthy`,(req, res)=>{

    res.status(200).json (
{
        succes: true,
        message: "server is healthy",
}
    );

})

app.listen(PORT,() =>{

console.log(`server is running on port : ${PORT}`);

})
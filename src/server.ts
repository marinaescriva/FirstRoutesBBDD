import express from "express";
import dotenv from "dotenv";
import { deleteRoles, getRoles, postRoles, updateRoles } from "./controllers/roleController";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;


app.get('/healthy',(req, res)=>{

    res.status(200).json (
        {
        succes: true,
         message: "server is healthy",
        }
    );

});

app.get('/roles', getRoles);

app.post('/roles', postRoles);

app.put('/roles/:id', updateRoles);

app.delete('/roles', deleteRoles);

app.listen(PORT,() =>{

console.log(`server is running on port : ${PORT}`);

});
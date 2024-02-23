import express from "express";
import dotenv from "dotenv";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";

dotenv.config();

const app = express();

app.use(express.json()); //ejecuta hasta encontrar el endpoint y sino devuelve un 404

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

app.post('/roles', createRoles);

app.put('/roles/:id', updateRoles);  //añadiendo param id en el rol

app.delete('/roles/:id', deleteRoles);

app.listen(PORT,() =>{

console.log(`server is running on port : ${PORT}`);

});
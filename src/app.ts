
// import dotenv from "dotenv";
import express, { Application } from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";

// dotenv.config(); //ejecutas la funcion config de dotenv 
export const app: Application = express();
// const app = express();
app.use(express.json()); //ejecuta hasta encontrar el endpoint y sino devuelve un 404




app.get('/healthy',(req, res)=>{  //la funcion q se ejecuta en la ruta healthy 

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


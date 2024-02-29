
// import dotenv from "dotenv";
import express, { Application } from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { login, register } from "./controllers/authController";
import { deleteUserById, getUserById, getUsers, updateUserById } from "./controllers/userController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";

// dotenv.config(); //ejecutas la funcion config de dotenv 
export const app: Application = express();
// const app = express();
app.use(express.json()); //ejecuta hasta encontrar el endpoint y sino devuelve un 404




app.get('/healthy', (req, res) => {  //la funcion q se ejecuta en la ruta healthy 

    res.status(200).json(
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

//crear la ruta de la app auth.. esto seria user, register

app.post('/api/register', register);

app.post('/api/login', login);

//usuarios

app.get('/api/users', auth, isSuperAdmin, getUsers);  // añadir un seguridad de token con auth

app.get('/api/users/:id', getUserById);

app.put('/api/users/:id', updateUserById);

app.delete('/api/users/:id', deleteUserById);


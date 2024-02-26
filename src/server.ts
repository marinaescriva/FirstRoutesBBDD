import 'dotenv/config'  //es la solucion de arriba, también comenté la dotenv.config().
import { app } from './app';



const PORT = process.env.PORT || 4001; //si existe el puerto y sino coges el de env


app.listen(PORT,() =>{  //decir a mi aplicacion que escuche el puerto

    console.log(`server is running on port : ${PORT}`)});



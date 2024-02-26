import 'dotenv/config'  //es la solucion de arriba, también comenté la dotenv.config().
import { app } from './app';
import { AppDataSource } from './database/db';

const PORT = process.env.PORT || 4001; //si existe el puerto y sino coges el de env

const startServer = () => {

    AppDataSource.initialize()

        .then(() => {
            console.log('database connected');
            app.listen(PORT, () => {  //decir a mi aplicacion que escuche el puerto

                console.log(`server is running on port : ${PORT}`)
            });
        })

        .catch(error => {

            console.log(error);
        })
}

startServer();
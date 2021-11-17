const express = require('express');

class Server{
    constructor(){
        this.app = express();
        //Indicar el procesamiento de datos en formato json durante las peticiones
        this.app.use(express.json());
        //Almacenar el puerto por el que correrá el servidor
        this.app.set('PORT', process.env.PORT || 3000);
        //Crear ruta raiz
        let router = express.Router();
        //Procesar solicitudes con el metodo GET a la raiz del servidor
        router.get('/', (req, res)=>{
            res.status(200).send();
        }),
        //Añadira ruta a express
        this.app.use(router);
        //Poner el servidor a la escucha
        this.app.listen(this.app.get('PORT'), ()=>{
            console.log("servidor corriendo por el puerto ==>", this.app.get('PORT'));
        });
    }
    
}
new Server();
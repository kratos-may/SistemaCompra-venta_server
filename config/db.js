const mongoose = require("mongoose");
require('dotenv').config({path: "variables.env"});

const conectarDb = async () =>{
    try {
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false,
            useCreateIndex:true
        });
        console.log("||===================================================||");
        console.log("||                  Db Conectada                     ||");
        console.log("||===================================================||");
    } catch (error) {
        console.log("============================Hubo un error==================================");
        console.log(error)
        console.log("===========================================================================");
        process.exit(1);// detiene la app
    }
}
module.exports= conectarDb;
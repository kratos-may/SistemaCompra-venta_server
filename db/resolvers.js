const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");

const resolvers = {
    Query:{
        obtenerCurso: ()=> "algo"
    },
    Mutation: {
        nuevoUsuario:async (_, {input})=>{

            const {email,password} = input;
            //revisar si el usuario ya esta registrado
            const existeUsuario = await Usuario.findOne({email});
            if(existeUsuario){
                throw new Error("El usuario ya esta registrado");
            }
            //hashear su password
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);
            //guardar en la base de datos
            try {
                const usuario = Usuario(input);
                usuario.save();//guardarlo
                return usuario;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
module.exports=resolvers;
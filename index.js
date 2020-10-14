const {ApolloServer}= require('apollo-server');
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");
const conectarDb = require("./config/db");
//conectar a la BD
conectarDb();
//servidor
const server = new ApolloServer({
    typeDefs,
    resolvers
});
//arrancar el servidor
server.listen().then(({url})=>{
    console.log(`Servidor corriendo en el puerto ${url}`);
});
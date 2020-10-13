const {ApolloServer, gql}= require('apollo-server');

//servidor
const server = new ApolloServer();

//arrancar el servidor
server.listen().then(({url})=>{
    console.log(`Servidor corriendo en el puerto ${url}`);
});
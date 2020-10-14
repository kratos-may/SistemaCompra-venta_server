const {gql}= require('apollo-server');
//Schema
/*
    cuando tenemos un input y queremos hacerle entender que tiene que pedir un valor obligatoriamente le ponemos un "!"
*/
const typeDefs1 = gql`
    type Curso {
        titulo: String
    }
    type Tecnologia {
        tecnologia: String
    }
    input CursoInput {
        tecnologia: String
    }
    type Query{
        obtenerCursos(input: CursoInput!): [Curso]
        obtenerTecnologia: [Tecnologia]
    }
`;
module.exports=typeDefs1;
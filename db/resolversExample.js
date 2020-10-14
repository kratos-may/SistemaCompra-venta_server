const cursos = [
    {
        titulo: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
        tecnologia: 'JavaScript ES6',
    },
    {
        titulo: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        tecnologia: 'React',
    },
    {
        titulo: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
        tecnologia: 'Node.js'
    },
    {
        titulo: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
        tecnologia: 'React'
    }
];
//Resolvers
 /*
    los resolver siempre seran objetos. en los resolvers siempre necesitare un type Query
 */
const resolvers2 = {
    /*
        en losresolver sepasan 4 parametros automaticamentw
        1) _ =  es un objeto que contiene los resultados retornados por el resolver padre
        2) input= son los argumentos
        3) context = es un objeto que se comparte entre todos los resolver usualmente son autenticaciones
        4) info= es el mas avanzado puesto que tiene informacion sobre la consulta
    */
    Query:{
        obtenerCursos: (_, {input}, ctx )=>{
            console.log(ctx)
            const resultado = cursos.filter( curso => curso.tecnologia === input.tecnologia);
            return resultado;
        }
    }
}
module.exports=resolvers2;
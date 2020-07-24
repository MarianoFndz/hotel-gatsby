import { graphql, useStaticQuery } from 'gatsby'

const UseHabitaciones = () => {

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsHabitacion{
       nodes {
         titulo
         id
         slug
         contenido
         imagen{
           fluid(maxWidth:3080){
             ...GatsbyDatoCmsFluid
           }
         }
       }
     } 
   }
    `)

    return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
        titulo: habitacion.titulo,
        id: habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug
    }))
}

export default UseHabitaciones;
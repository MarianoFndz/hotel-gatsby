exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query{
            allDatoCmsHabitacion{
                nodes{
                    slug
                }
            }
        }
    `)

    //console.log(resultado.data.allDatoCmsHabitacion.nodes)

    if (resultado.errors) {
        reporter.panic('No hubo resultados', resultados.errors)
    }

    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes

    console.log(habitaciones)

    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug
            }
        })
    })
}
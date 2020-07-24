import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from 'gatsby-image'
import { css, jsx } from '@emotion/core'

export const query = graphql`
    query($slug: String){
        allDatoCmsHabitacion(filter:{ slug: {eq: $slug}}){
            nodes{
                titulo 
                contenido
                imagen{
                        fluid(maxWidth: 3080){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }   
        }
    } 
`


const HabitacionTemplate = ({ data: { allDatoCmsHabitacion: { nodes } } }) => {

    const { titulo, contenido, imagen } = nodes[0]

    return (
        <Layout>
            <main
                css={mainStyles}
            >
                <h1
                    css={h1Styles}
                >{titulo}</h1>
                <p>{contenido}</p>
                <Image
                    fluid={imagen.fluid}
                />
            </main>
        </Layout >
    )
}

export default HabitacionTemplate;

const mainStyles = css({
    margin: "250px auto 0 auto",
    maxWidth: "1200px",
    width: "95%",
})

const h1Styles = css({
    textAlign: "center",
    marginTop: "4rem"
})
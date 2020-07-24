import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const ContenidoNosotros = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid(maxWidth: 3080) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0]

  return (
    <div
      css={css`
        position: relative;
        z-index: 5;
        margin-top: 200px;
        margin-bottom: 200px;
      `}
    >
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        {titulo}
      </h2>
      <Contenido>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </Contenido>
    </div>
  )
}

export default ContenidoNosotros

const Contenido = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

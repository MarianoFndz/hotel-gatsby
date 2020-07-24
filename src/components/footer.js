import React from "react"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Nav from "./nav"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <footer
        css={css`
          background-color: rgb(44, 62, 80);
          color: #fff;
          padding: 1rem;
          margin-top: 5rem;
        `}
      >
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <Nav />

          <EnlaceHome to="/">
            <h1>Hotel Gatsby</h1>
          </EnlaceHome>
        </div>
      </footer>
      <p css={pFooterStyles}>
        Hotel gatsby. Todos los derechos reservados {year}&copy;
      </p>
    </>
  )
}

export default Footer

const pFooterStyles = css({
  textAlign: "center",
  color: "#fff",
  backgroundColor: "rgb(33,44,55)",
  margin: "0",
  paddding: "1rem",
})

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

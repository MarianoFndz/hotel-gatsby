import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Nav from "./nav"

const EnlaceHome = styled(Link)`
  color: #000;
  opacity: 0.5;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }
`

const Header = () => {
  return (
    <header
      css={css`
        padding: 1rem;
        position: absolute;
        top: 0;
        left: 0%;
        width: 70px;
        width: 100%;
        z-index: 100;
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
        <EnlaceHome to="/">
          <h1>Hotel Gatsby</h1>
        </EnlaceHome>
        <Nav />
      </div>
    </header>
  )
}

export default Header

import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Navegacion = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="pagina-actual">
        Incio
      </NavLink>
      <NavLink to={"/nosotros"} activeClassName="pagina-actual">
        Nosotros
      </NavLink>
    </Nav>
  )
}

export default Navegacion

const NavLink = styled(Link)`
  color: #000;
  opacity: 0.6;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;

  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }

  &::last-of-type {
    margin-right: 0;
  }

  &.pagina-actual {
    border-bottom: 2px solid #000;
    opacity: 1;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`

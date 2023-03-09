import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const NavbarApp = () => {
  return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/users">Users</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavbarApp
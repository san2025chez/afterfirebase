import './navBar.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { CartWidget } from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { BsBicycle } from 'react-icons/bs'

const NavBar2 = (  ) => {



    return (
    
    <Navbar bg="light" variant="light">
      <Container className="d-block d-sm-flex">
<Link to="/"><BsBicycle/> Tienda</Link>

        <Nav className="ms-auto d-flex justify-content-center">
          <Nav.Link> <Link to="productos/desafio">desfio</Link></Nav.Link>
          <Nav.Link> <Link to="productos/after">after</Link></Nav.Link>
          <Nav.Link> <Link to="productos/entrega">entrega</Link></Nav.Link>
        </Nav>

        <CartWidget/>
      </Container>
    </Navbar>
    )
}

export default NavBar2 //🔸Exportando por default
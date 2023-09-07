import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, Nav, Collapse, NavbarToggler} from 'reactstrap'

const NavigationComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navToggler = ()=>{
    setIsNavOpen(!isNavOpen);
  }
  return (
    <div>
        <Navbar  color="dark" dark expand="sm" >
        <NavbarToggler onClick={navToggler}/>
            <NavbarBrand to="/" style={{cursor: 'pointer'}}>
                Tanu's Kitchen
            </NavbarBrand>
            
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className='nav-link'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/menu" className='nav-link'>Menu</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className='nav-link'>About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className='nav-link'>Contact</Link>
            </NavItem>
          </Nav>
          
        </Collapse>
         </Navbar>
    </div>
  )
}

export default NavigationComponent
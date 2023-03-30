import React,{useState} from 'react';
import {Container,Navbar,Nav,Button,Col} from 'react-bootstrap';
import logo from '../img/logo.svg';

import MenuHamburguesa from '../img/menuhamburguesa.svg';
import '../styles/Navbar.css';

// React icons
import {FaHome} from 'react-icons/fa';
import {IoIosContact} from 'react-icons/io';
import {GiSkills} from 'react-icons/gi';
function NavbarComponent() {
    const [expandedd,setExpanded] = useState(false);
    const handleClick = () =>setExpanded(!expandedd);
  return (
    <>
    <Navbar expanded={expandedd} onToggle={handleClick}  style={{width:'100%'}} expand='md' >
        <Container fluid className='px-3'>

                    <Navbar.Brand href='#home'><img  src={logo} alt="Merayda logo"/></Navbar.Brand>
                    <Navbar.Brand>Merayda</Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar'><img width={30} src={MenuHamburguesa}/></Navbar.Toggle>
                    
                    <Navbar.Collapse id='navbar'>
                    <Nav className='me-auto'></Nav>
                        <Container className='d-flex justify-content-end '>
                        <Nav className='p-3 p-md-0' navbar>
                            <Nav.Link onClick={handleClick} href='#home'><FaHome size={25} color='#ffca2c'/>&nbsp; Home</Nav.Link>
                            <Nav.Link onClick={handleClick} href='#services'><GiSkills size={25} color='#ffca2c'/>&nbsp;Servicios</Nav.Link>
                            <Nav.Link onClick={handleClick} href='#contact'><IoIosContact size={25} color='#ffca2c'/>&nbsp;Contacto</Nav.Link>
                        </Nav>
                            <Button style={{height:"40px"}} onClick={handleClick} href='#contact' className='rounded-0 ms-5 mt-5 mt-md-0' variant='warning'>Empezar ahora</Button>

                        </Container>

                    </Navbar.Collapse>
                   
        </Container>
    </Navbar>
        {/* caja para separa el menu del contenido  */}
        <Container id='home' style={{width:100,height:80}}/>

    </>
  )
}

export default NavbarComponent
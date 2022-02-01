import React from 'react'
import './header.css'
import headerimage from '../images/header-image.gif'
import { Container, Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faUser } from '@fortawesome/free-regular-svg-icons'


const Header = () =>{

    return(
        <>
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='d-flex flex-row'>
                        <img alt="tetris" src={headerimage} width="60" height="60" className="d-inline-block align-top me-5"/>
                        <h1 className=' display-5'>Retro-Tendo</h1>
                    </Navbar.Brand>
                    <Nav className="ms-auto align-right">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features" className='link-panier'>Admin<FontAwesomeIcon className='icon-cart ms-2' icon={faUser} /></Nav.Link>
                        <Nav.Link href="#pricing" className='link-panier'>Votre Panier<FontAwesomeIcon className='icon-cart ms-2' icon={faCartArrowDown} /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
        </>
    )
}

export default Header
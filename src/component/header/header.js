import './header.css'
import headerimage from '../../images/header-image.gif'
import { Container, Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faWallet } from "@fortawesome/free-solid-svg-icons"
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";
import React from 'react';

function Header(props) {
    return (
        <div>
            <header className='header'>
                <Navbar bg="dark" variant="dark">
                    <Container className='container'>
                        <Link className='text-decoration-none color-transparent' to="/">
                            <Navbar.Brand href="#home" className='d-flex flex-row'>
                                <img alt="tetris" src={headerimage} width="60" height="60" className="d-inline-block align-top me-5 imageLogo" />
                                <h1 className=' display-5 imageHeader'>Retro-Tendo</h1>
                            </Navbar.Brand>
                        </Link>
                        <Nav className="ms-auto textHead">
                            <Link className='text-decoration-none color-transparent' to="/">
                                <Nav.Link className='textHeader' href="#home">Home</Nav.Link>
                            </Link>
                            <Link to="/admin">
                                <Nav.Link href="#features" className='link-panier textHeader'>Admin<FontAwesomeIcon className='icon-cart ms-2' icon={faUser} /></Nav.Link>
                            </Link>
                            <Link className='text-decoration-none color-transparent' to="/Panier">
                                <Nav.Link href="#pricing" className='link-panier textHeader'>Votre Panier<FontAwesomeIcon className='icon-cart ms-2' icon={faCartArrowDown} /></Nav.Link>
                            </Link>
                            <Nav.Link href="#pricing" className='solde link-panier textHeader'> Votre Solde: {props.argent}€<FontAwesomeIcon className='icon-cart ms-2' icon={faWallet} /></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

export default Header;

import React, { useState } from 'react'
import './header.css'
import headerimage from '../../images/header-image.gif'
import { Container, Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link, Redirect } from 'react-router-dom'


const Header = () =>{

 //appel modal
    const [modal, setModal] = useState(false);
// produit ajoutable
    const [productList, setProductList] = useState([])

    const toggle = () =>{ 
        setModal(!modal);
    }
// cette fonction apparait sur le fichier.js "Admin" grace à sa balise <NewProduct save={saveProduct} />
// elle est exportée dans le fichier.js "newProduct". sous le nom de "save"(props)
// x represente les éléments de "productList" qui seront "(push)" 
// "newProduct" avec son nouveau nom "newList" sera expulsé de l'input pour devenir des
// données mais pas encore sauvegardé. Le modal se ferme directement "(false)""
    const saveProduct = (x) =>{
        let newList = productList
        newList.push(x) 
        setProductList(newList)
        setModal(false)
    }


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
                        <Link to='/'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        </Link>
                        <Link to='/Admin'  onClick={()=> setModal(true)}>
                        <Nav.Link href="#features" className='link-panier'>Admin<FontAwesomeIcon className='icon-cart ms-2' icon={faUser} /></Nav.Link>
                        </Link>
                        <Nav.Link href="#pricing" className='link-panier'>Votre Panier<FontAwesomeIcon className='icon-cart ms-2' icon={faCartArrowDown} /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
        </>
    )
}

export default Header
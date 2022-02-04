import React, { useEffect, useState } from 'react'
import NewCarte from './newCard';
import NewProduct from './newProduct';
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"



const Admin = () =>{   
// l'etat du modal de "false" à "true", false=fermer, true=ouvert.
    const [modal, setModal] = useState(false);

// productList est l'ensemble des éléments qui pour l'instant est un tableau vide
// qui seront envoyer plus tard grace à un .Map sur la div (la carte)
    const [productList, setProductList] = useState([])


// permet aux articles de rester même lorsque la page se recharge ou qd on change de page, les objets "obj" se 
// sauvegarde dans le localStorage jusqu'à suppression. JSON.parse traite l'objet avant d'être envoyer sur localStorage
// JSON.parse converti le string en objet
// la condition fait qu'il ne se passe rien si il n'y a rien dans localStorage, si rien n'est "set"
    useEffect(() =>{
        let arr = localStorage.getItem("productList")
        
        if(arr){
            let obj = JSON.parse(arr)
            setProductList(obj)
        }
    }, [])
// fonction qui supprime, elle est reporter sur la page de la structure des cartes newCard
//window.location.reload recharge la page au moment de la suppression
    const suppProduct = (i) =>{
        let listItem = productList

        listItem.splice(i, 1)
        localStorage.setItem('productList', JSON.stringify(listItem))
        setProductList(listItem)
        window.location.reload()
    }
// tant que le modal est sur false il ne s'ouvre pas, quand on appuie sur le bouton "true" s'active aussi
    const toggle = () =>{ 
        setModal(!modal);
    }

// permet de sauver le nouveau produit (productList) sur localstorage grace à localstorage.setItem() (fonction existante) 
//une fois fait le modal se met sur "false" donc se ferme 
//et ainsi setProductList modifie l'état de productList
//il faut redefinir le nom des éléments pour une nouvelle action le nom souver de productList sera donc "newList"
//il est push dans "x" pour etre sauver
//localstorage.setItem(key, value), JSON.stringify modifie l'état d'un tableau comme un élément JSON
// LocalStorage n'accepte pas de tableaux il faut donc modiifer son état

    const saveProduct = (x) =>{
        let newList = productList
        newList.push(x) 
        localStorage.setItem("productList", JSON.stringify(newList))
        setModal(false)
        setProductList(newList)
    }

   return(
        <div>
            <header>
                <Navbar bg="danger" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className='d-flex flex-row'>
                            <h3 className=' display-5'>Admin<FontAwesomeIcon className='icon-cart ms-2' icon={faUser} /></h3>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
{/* flèche de retour */}
            <Link to="/">
                <h2><FontAwesomeIcon className='icon-cart d-flex align-left ms-5 mt-5 text-dark' icon={faArrowLeft} /></h2>
            </Link>
{/* formulaire à soumettre */}
            <form className='mt-5'>
                    <Button className='btn btn-danger mb-2 ms-2' onClick={()=> setModal(true)}>Ajoutez de nouveaux produits</Button> 
            </form>
            <div className='container d-flex flex-wrap align-center my-5'>
                {productList && productList.map((obj) => <NewCarte listobj={obj} suppProduct={suppProduct} /> )}
            </div>
            <NewProduct toggle={toggle} modal={modal} save={saveProduct} />
        </div>
   )
}

export default Admin
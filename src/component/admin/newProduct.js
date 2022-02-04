import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'


const NewProduct = ({modal, toggle, save}) =>{
// permet de set les nouveau produit la div passe d'un état vide à rempli
    const [newNom, setNewNom] = useState('')
    const [newPrix, setNewPrix] = useState('')

//fonction handleChange (de son vrai nom) on ajoute l'élément 'onChange' (sur une balise) d'ou la fonction s'activera 
//le 'onChange' sur l'input permettra à la fonction d'emettre des changements sur le component ici on utilise un e.target
// qui permet d'atteindre les valeur ajouté, on extrait les valeurs "name et value" de "e.target"
    const handleChange = (e) =>{
        
        const {name, value} = e.target

        if(name === "newNom"){
            setNewNom(value)
        }else{
            setNewPrix(value)
        }
    }
// cette fonction sauvegardera ce que l'input aura comme valeur au moment ou le bouton sera activé 
// elle permet de donner plusieurs valeurs aux éléments et donc à en display plus d'un. On donne alors 
// un nom aux éléments, nom qui réapparaitra plus tard et qui permettra de les distinguer
    const saveAll = () =>{
        let x = {}
        x["name"] = newNom
        x["price"] = newPrix
        save(x)
    }
// toggle et modal sont les attribut de bootstrap ils sont placé en "props"
    return(
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader className='bg-danger text-light'  toggle={toggle} >Admin<FontAwesomeIcon className='icon-cart ms-2' icon={faUser} /></ModalHeader>
                <ModalBody>
                    <h3 className='text-danger fs-5'>Ajoutez de nouveaux articles?</h3>
                    <form>
                        <div className='form-group'>
                            <label>Nom</label>
                            <input type='text' className='form-control' value={newNom} onChange={handleChange} name='newNom' />
                        </div>
                        <div className='form-group'>
                            <label>Prix</label>
                            <input type='text' className='form-control' value={newPrix} onChange={handleChange} name='newPrix' />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' onClick={saveAll}>Ajouter</Button>{' '}
                    <Button color='light' onClick={toggle}>Annuler</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
   
}

export default NewProduct
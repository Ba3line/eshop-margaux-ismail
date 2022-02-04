import React from "react";
import gameover from '../../images/cardimg.jpg'
import './newCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons'



// props des nouveaux objets par catégorie qui graçe à une variable props importée se place directement dans la 
// structure de la carte
const NewCarte = ({listobj,suppProduct}) =>{

// fonction qui supprime 
  const supprimer = (i) =>{
    suppProduct(i)
  }

// permet aux éléments ajouter d'avoir déjà une structure 

    return(
    <div>
      <div className="carte-bordure text-light">
        <div className="carte-img">
          <img src={gameover} alt="gameover" />
        </div>
        <h3>{listobj.name}</h3>
        <p>{listobj.price}</p>
        <div className="mini-icon text-danger fs-3 ms-auto me-4" onClick={(supprimer)}>
          <FontAwesomeIcon icon={faMinusSquare} />
        </div>
      </div>
    </div>
  
    )
}

export default NewCarte
import './Nintendo.css'
import React from 'react';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Nintendo(props) {
    return (
        <div>
            <div className="generalNintendo bg-dark">
                <Link onClick={props.preview} to="preview">
                    <div className="divImageNintendo text-center">
                        <img src={props.imageNintendo} alt="" className='imageNintendo mt-2' />
                    </div>
                    <p className="info text-light mt-3 ms-3">{props.info}</p>
                    <div className="InfoNintendo d-flex justify-content-between">
                        <p className="quantiteNintendo text-light ms-3">{props.quantitéNintendo} pièces</p>
                        <p className="prixNintendo text-light me-3">{props.prixNintendo} €</p>
                    </div>
                </Link>
                <p className='text-light ms-3'>{props.acheter} {props.info} dans le panier</p>
                <div className="bouttonPrendreRemettre d-flex justify-content-center mt-4">
                    <button className="text-dark enleverStock w-25 border-0 bg-transparent" onClick={props.quantitéNintendo == 0 || props.argent <= props.prixNintendo ? "" : props.function}><FontAwesomeIcon className='icon-cart ms-2 plus' icon={faPlusSquare} /></button>
                    <button className="text-dark remettreStock w-25 border-0 bg-transparent" onClick={props.acheter == 0 ? "" : props.function2}><FontAwesomeIcon className='icon-cart ms-2 moins' icon={faMinusSquare} /></button>
                </div>
                    <div className="ajouterPanier d-flex justify-content-center mt-3">
                        <button onClick={props.panier} className='addPanier border-1'>Acceder au panier</button>
                    </div>
            </div>
        </div>
    );
}

export default Nintendo;

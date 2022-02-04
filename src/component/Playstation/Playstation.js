import './Playstation.css'
import React from 'react';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Playstation(props) {
    return (
        <div>
            <div className="generalPlaystation bg-dark">
                <Link onClick={props.preview} to="preview">
                    <div className="divImagePlaystation text-center">
                        <img src={props.imagePlaystation} alt="" className='imagePlaystation mt-2' />
                    </div>
                    <p className="info text-light mt-3 ms-3">{props.info}</p>
                    <div className="InfoPlaystation d-flex justify-content-between">
                        <p className="quantitePlaystation text-light ms-3">{props.quantitePlaystation} unités</p>
                        <p className="prixPlaystation text-light me-3">{props.prixPlaystation} €</p>
                    </div>
                </Link>
                <p className='text-light ms-3'>{props.acheter} {props.info} dans le panier</p>
                <div className="bouttonPrendreRemettre d-flex justify-content-center mt-4">
                    <button className="text-dark enleverStock border-0 bg-transparent w-25" onClick={props.quantitePlaystation == 0 || props.argent <= props.prixPlaystation ? "" : props.function}><FontAwesomeIcon className='icon-cart ms-2 plus' icon={faPlusSquare} /></button>
                    <button className="text-dark remettreStock border-0 bg-transparent w-25" onClick={props.acheter == 0 ? "" : props.function2}><FontAwesomeIcon className='icon-cart ms-2 moins' icon={faMinusSquare} /></button>
                </div>
                    <div className="ajouterPanier mt-3 d-flex justify-content-center">
                        <button onClick={props.panier} className='addPanier'>Ajouter au panier</button>
                    </div>
            </div>
        </div>
    );
}

export default Playstation;

import './Gameboy.css'
import React from 'react';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function Gameboy(props) {
    return (
        <div>
            <div className="generalGameboy bg-dark">
                <Link onClick={props.preview} to="preview">
                    <div className="divImageGameboy text-center">
                        <img src={props.imageGameboy} alt="" className='imageGameboy mt-2' />
                    </div>
                    <p className="info text-light mt-3 ms-3">{props.info}</p>
                    <div className="InfoGameboy d-flex justify-content-between">
                        <p className="quantiteGameboy text-light ms-3">Quantité: {props.quantitéGameboy}</p>
                        <p className="prixGameboy text-light me-3">{props.prixGameboy} €</p>
                    </div>
                </Link>
                <p className='text-light ms-3'>{props.acheter} {props.info} dans le panier</p>
                <div className=" d-flex justify-content-center mt-5">
                    <button className="text-dark enleverStock border-0 w-25 bg-transparent" onClick={props.quantitéGameboy == 0 || props.argent <= props.prixGameboy ? "" : props.function}><FontAwesomeIcon className='icon-cart ms-2 plus' icon={faPlusSquare} /></button>
                    <button className="text-dark remettreStock border-0 w-25 bg-transparent" onClick={props.acheter == 0 ? "" : props.function2}><FontAwesomeIcon className='icon-cart ms-2 moins' icon={faMinusSquare} /></button>
                </div>
                <div className="ajouterPanier mt-3 border-1 d-flex justify-content-center">
                    <button onClick={props.panier} className='addPanier'>Ajouter au panier</button>
                </div>
            </div>
        </div>
    );
}

export default Gameboy;

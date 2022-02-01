import './Nintendo.css'
import React from 'react';
import { Link } from "react-router-dom";

function Nintendo(props) {
    return (
        <div>
            <div className="generalNintendo bg-dark">
                <div className="divImageNintendo text-center">
                    <img src={props.imageNintendo} alt="" className='imageNintendo w-50 mt-2' />
                </div>
                <div className="InfoNintendo d-flex justify-content-between">
                    <p className="info text-light d-flex">{props.info}</p>
                    <p className="prixNintendo text-light">{props.prixNintendo} €</p>
                </div>
                <p className="quantiteNintendo text-light">Quantité: {props.quantitéNintendo}</p>
                <p className='text-light'>Vous avez {props.acheter} {props.info} dans le panier</p>
                <div className="bouttonPrendreRemettre">
                    <button className="text-dark enleverStock" onClick={props.quantitéNintendo == 0 || props.argent <= props.prixNintendo ? "" : props.function}>+1</button>
                    <button className="text-dark remettreStock" onClick={props.acheter == 0 ? "" : props.function2}>-1</button>
                </div>
                <Link to="panier">
                    <div className="ajouterPanier">
                        <button onClick={props.panier} className='addPanier'>Ajouter au panier</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Nintendo;

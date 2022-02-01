import './Gameboy.css'
import React from 'react';
import { Link } from "react-router-dom";

function Gameboy(props) {
    return (
        <div>
            <div className="generalGameboy bg-dark">
                <div className="divImageGameboy text-center">
                    <img src={props.imageGameboy} alt="" className='imageGameboy w-50 mt-2' />
                </div>
                <div className="InfoGameboy d-flex justify-content-between">
                    <p className="info text-light">{props.info}</p>
                    <p className="prixGameboy text-light">{props.prixGameboy} €</p>
                </div>
                <p className="quantiteGameboy text-light">Quantité: {props.quantitéGameboy}</p>
                <p className='text-light'>Vous avez {props.acheter} {props.info} dans le panier</p>
                <div className="bouttonPrendreRemettre">
                    <button className="text-dark enleverStock" onClick={props.quantitéGameboy == 0 || props.argent <= props.prixGameboy ? "" : props.function}>+1</button>
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

export default Gameboy;

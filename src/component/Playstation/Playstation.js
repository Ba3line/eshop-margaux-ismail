import './Playstation.css'
import React from 'react';
import { Link } from "react-router-dom";

function Playstation(props) {
    return (
        <div>
            <div className="generalPlaystation bg-dark">
                <div className="divImagePlaystation text-center">
                    <img src={props.imagePlaystation} alt="" className='imagePlaystation w-50 mt-2' />
                </div>
                <div className="InfoPlaystation d-flex justify-content-between">
                    <p className="info text-light">{props.info}</p>
                    <p className="prixPlaystation text-light">{props.prixPlaystation} €</p>
                </div>
                <p className="quantitePlaystation text-light">Quantité: {props.quantitePlaystation} unités</p>
                <p className='text-light'>Vous avez {props.acheter} {props.info} dans le panier</p>
                <div className="bouttonPrendreRemettre">
                    <button className="text-dark enleverStock" onClick={props.quantitePlaystation == 0 || props.argent <= props.prixPlaystation ? "" : props.function}>+1</button>
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

export default Playstation;

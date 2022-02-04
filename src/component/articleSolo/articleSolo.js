import './articleSolo.css'

import React from 'react';

function ArticleSolo(props) {
    return (
        <div className='generalSolo bg-dark w-50 rounded d-flex align-items-center justify-content-around'>
            <div className="ms-5 divImage">
                <img src={props.image} className='image' width={150} alt="" />
            </div>
            <div className="info">
                <p className='text-light'>Nom du jeu: <span className='infoBleu'>{props.nom}</span></p>
                <p className='text-light'>Prix du jeu: <span className='infoBleu'>{props.prix}€</span></p>
                <p className="text-light">Il reste <span className='infoBleu'>{props.quantite} unités</span> en stock</p>
                <p className="text-light">Vous avez <span className='infoBleu'>{props.acheter} {props.nom}</span> dans votre panier</p>
            </div>
        </div>
    );
}

export default ArticleSolo;

import './panier.css'
import Playstation from '../Playstation/Playstation';

import React from 'react';

function Panier(props) {
    return (
        <div>
            <div className="infoPanier">
                <p className='soldeArgent'>Il vous rest {props.portefeuille} € de solde.</p>
            </div>
            {props.panier.map((dataPlaystation) => {
                return <Playstation imagePlaystation={dataPlaystation.image} info={dataPlaystation.nom} prixPlaystation={dataPlaystation.prix} quantitePlaystation={dataPlaystation.quantite} acheter={dataPlaystation.acheter} />
            })}
        </div>
    );
}

export default Panier;

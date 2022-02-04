import './articlePanier.css'
import React from 'react';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ArticlePanier(props) {
    return (
        <div className='generalArticlepanier'>
            <div className="d-flex justify-content-center mt-5">
                <div className="bg-dark w-50 d-flex align-items-center rounded articlePanier">
                    <div className="w-50 ms-5 divImage">
                        <img src={props.image} className='w-75 imagePanier' alt="" />
                    </div>
                    <div className="text">
                        <p className='textPanier text-light fs-6 textPanier'>Nom du jeu: <span className='infoPanier'>{props.nom}</span></p>
                        <p className='textPanier text-light fs-6 textPanier'>Prix du jeu: <span className='infoPanier'>{props.prix} €</span></p>
                        <p className='textPanier text-light fs-6 textPanier'>Stock: <span className='infoPanier'>{props.quantite}</span></p>
                        <p className="textPanier text-light fs-6 textPanier">Dans panier: <span className='infoPanier'>{props.acheter}</span></p>
                        <div className="bouttonPrendreRemettre2 d-flex justify-content-center mt-4 ms-5">
                            <button className="text-dark enleverStock border-0 bg-transparent w-25" onClick={props.quantitePlaystation == 0 || props.argent <= props.prixPlaystation ? "" : props.function}><FontAwesomeIcon className='icon-cart ms-2 plus' icon={faPlusSquare} /></button>
                            <button className="text-dark remettreStock border-0 bg-transparent w-25" onClick={props.acheter <= 0 ? "" : props.function2}><FontAwesomeIcon className='icon-cart ms-2 moins' icon={faMinusSquare} /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className='w-100 border-1'>Valider mes achats ...</button> */}
        </div>
    );
}

export default ArticlePanier;

import './Acceuil.css'
import React from 'react';
import { Link } from "react-router-dom";

function Acceuil(props) {
    return (
        <div>
            
            <Link to={props.lien}>
                <div className="generalAcceuil bg-dark mt-5">
                    <div className="divImageAcceuil text-center">
                        <img src={props.image} alt="" className='imageAcceuil w-75' />
                    </div>
                    <div className="texteAcceuil">
                        <h4 className="nomCardAcceuil text-light text-center">{props.nom}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Acceuil;

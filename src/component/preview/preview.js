import './preview.css'
import ArticleSolo from '../articleSolo/articleSolo'
import React from 'react';
import { Link } from "react-router-dom";

function Preview(props) {

    return (
        <div className='generalPreview'>
            <Link onClick={props.retirerPreview} to={"/"}>
                <div className="buttonRetour d-flex justify-content-end me-5"><button className='bouttonPreviewRetour bg-transparent border-0 text-end'>Retour à l'acceuil</button></div>
            </Link>
            <div className="cardPreview d-flex justify-content-center mt-5">
                {props.preview.map((dataPreview) => {
                    return <ArticleSolo image={dataPreview.image} nom={dataPreview.nom} prix={dataPreview.prix} quantite={dataPreview.quantite} acheter={dataPreview.acheter} />
                })}
            </div>
        </div>
    );
}

export default Preview;

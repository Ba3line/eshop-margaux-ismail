import './panier.css'
import ArticlePanier from '../articlePanier/articlePanier'
import { Link } from "react-router-dom";

function Panier(props) {

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <Link to="/" onClick={props.supprimer}>
                    <button className='mt-4 border-1 rounded supprimerPanier'>Continuer vos achats</button>
                </Link>
            </div>
            {props.panier.map((data, index) => (
                <div className={data.acheter === 0 ? 'd-none' : 'd-block'}>
                    <ArticlePanier key={index} image={data.image} nom={data.nom} prix={data.prix} quantite={data.quantite} acheter={data.acheter} function={() => { props.prendreProduit(data) }} function2={() => { props.rendreProduit(data) }} />
                </div>
            ))}
        </div>
    );
}

export default Panier;
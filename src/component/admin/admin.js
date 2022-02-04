import './admin.css'
import React, { useState } from 'react';
import { stockPs } from '../../dataPlaystation';
import { stockGameboy } from '../../dataGameboy';
import { stockNintendo } from '../../dataNintendo';


function Admin() {

    const [article, setArticle] = useState({
    "image": "",
    "nom": "",
    "prix": 0,
    "quantite": 0,
    "acheter": ""
    })

    const image = (e) => {
        article.image = e.target.value
    }

    const nom = (e) => {
        article.nom = e.target.value
    }

    const prix = (e) => {
        article.prix = parseInt(e.target.value)
    }

    const quantite = (e) => {
        article.quantite = parseInt(e.target.value)
    }

    const acheter = (e) => {
        article.acheter = parseInt(e.target.value)
    }
    
    const [categorie, setCategorie] = useState("Playstation")
    
    const changeCategorie = (e) => {
        setCategorie(e.target.value)
    }

    const ajouterCard = (e) => {
        if (categorie == "Playstation") {
            stockPs.unshift(article)
        } else if (categorie == "Gameboy") {
            stockGameboy.unshift(article)
        } else if (categorie == "Nintendo") {
            stockNintendo.unshift(article)
        }
        e.preventDefault()
    }

    return (
        <div className='d-flex justify-content-center'>
            <form autocomplete='off' onSubmit={ajouterCard} className='formulaire bg-dark text-light rounded mt-5 formAdmin'>
                <div class="mb-3 d-flex flex-column align-items-center">
                    <label class="form-label">Nom du produit :</label>
                    <input  type="text" required="required" class="form-control w-75" placeholder='Nom produit' onChange={nom} id="text" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3 d-flex flex-column align-items-center">
                    <label class="form-label">Prix du produit :</label>
                    <input  type="text" required="required" class="form-control w-75" placeholder='Prix produit' onChange={prix} id="textPassword1" />
                </div>
                <div class="mb-3 d-flex flex-column align-items-center">
                    <label class="form-label">quantité du produit :</label>
                    <input  type="text" required="required" class="form-control w-75" placeholder='quantité produit' onChange={quantite} />
                </div>
                <div class="mb-3 d-flex flex-column align-items-center">
                    <label class="form-label">quantité de base :</label>
                    <input  type="text" required="required" class="form-control w-75" placeholder='quantité de base' onChange={acheter} />
                </div>
                <div class="mb-3 d-flex flex-column align-items-center">
                    <label class="form-label">Image du produit</label>
                    <input  type="text" required="required" class="form-control w-75" onChange={image} placeholder='URL image' />
                </div>
                <select className='ms-5 mb-3' name="categorie" onChange={changeCategorie} id="categorie" required="required">
                    <option value="Playstation" selected="selected">Playstation</option>
                    <option value="Nintendo">Nintendo</option>
                    <option value="Gameboy">Gameboy</option>
                </select>
                <div className="d-flex justify-content-center mb-3"><button type="submit" class="btn btn-primary">Submit</button></div>
            </form>
        </div>
    );
}

export default Admin;
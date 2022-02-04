import './App.css';
import dataAcceuil from './Acceuil.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Acceuil from './component/Acceuil/Acceuil';
import Nintendo from './component/Nintendo/Nintendo';
import Gameboy from './component/Gameboy/Gameboy'
import Playstation from './component/Playstation/Playstation'
import Panier from './component/panier/panier'
import { stockPs } from './dataPlaystation.js';
import { stockGameboy } from './dataGameboy.js';
import { stockNintendo } from './dataNintendo'
import { useState, useEffect } from 'react';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Preview from './component/preview/preview';
import Admin from './component/admin/admin';

function App() {

  const [modifierStockNintendo, setModifierStockNintendo] = useState(stockNintendo.quantite)

  const prendreProduitNintendo = (article) => {
    setModifierStockNintendo(article.quantite -= 1)
    setPortefeuille(portefeuille - article.prix)
    setProduitAcheter(article.acheter += 1)
  }

  const rendreProduitNintendo = (article) => {
    setModifierStockNintendo(article.quantite += 1)
    setPortefeuille(portefeuille + article.prix)
    setProduitAcheter(article.acheter -= 1)
  }

  const [modifierStockGameboy, setModifierGameboy] = useState(stockGameboy.quantite)

  const prendreProduitGameboy = (article) => {
    setModifierGameboy(article.quantite -= 1)
    setPortefeuille(portefeuille - article.prix)
    setProduitAcheter(article.acheter += 1)
  }

  const rendreProduitGameboy = (article) => {
    setModifierGameboy(article.quantite += 1)
    setPortefeuille(portefeuille + article.prix)
    setProduitAcheter(article.acheter -= 1)
  }

  const [modifierStockPs, setModifierStockPs] = useState(stockPs.quantite)

  const [produitAcheter, setProduitAcheter] = useState(stockPs.acheter)

  const prendreProduit = (article) => {
    if (article.quantite > 0) {
      setModifierStockPs(article.quantite -= 1)
      setPortefeuille(portefeuille - article.prix)
      setProduitAcheter(article.acheter += 1)
    }
  }

  const rendreProduit = (article) => {
    setModifierStockPs(article.quantite += 1)
    setPortefeuille(portefeuille + article.prix)
    setProduitAcheter(article.acheter -= 1)
    if (article.quantite <= 0) {
      console.warn(article.quantite);
    }
  }

  const [portefeuille, setPortefeuille] = useState(1500)

  const [preview, setPreview] = useState([

  ])

  const ajouterPreview = (article) => {
    const nouveauPreview = [...preview]
    nouveauPreview.push(article)
    setPreview(nouveauPreview)
  }

  const retirerPreview = () => {
    preview.shift()
  }

  const [articlePanier, setArticlePanier] = useState([
  
  ])

  useEffect(() => {
    const data = localStorage.getItem('articlePanier');
    if (data) {
        setArticlePanier(JSON.parse(data))
    }
}, [])

useEffect(() => {
    localStorage.setItem('articlePanier', JSON.stringify(articlePanier))
})

  const ajouterArticlePanier = (article) => {
    const nouveauArticle = [...articlePanier]
    nouveauArticle.push(article)
    setArticlePanier(nouveauArticle)
    console.log(article);
  }

  const viderPanier = () => {
    articlePanier.length = 0
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header argent={portefeuille} />
        <Switch>
          <Route exact path="/">
            <div className="d-flex justify-content-evenly cardAcceuil">
              {dataAcceuil.map((dataAcceuil, index) => (<Acceuil key={index} lien={dataAcceuil.lien} nom={dataAcceuil.nomCategorie} image={dataAcceuil.image} />))}
            </div>
          </Route>
          <Route exact path="/Nintendo">
            <Link to="/">
              <div className='generalPreview d-flex justify-content-end me-5'>
                <button className='bouttonPreviewRetour mt-2 bg-transparent border-0 text-end'>Retour à l'acceuil</button>
              </div>
            </Link>
            <div className="nintendo">
              <div className=" cardNintendo">
                {stockNintendo.slice(0, 3).map((nintendo, index) => (<Nintendo key={index} imageNintendo={nintendo.image} info={nintendo.nom} prixNintendo={nintendo.prix} quantitéNintendo={nintendo.quantite} function={() => prendreProduitNintendo(nintendo)} function2={() => rendreProduitNintendo(nintendo)} acheter={nintendo.acheter} argent={portefeuille} panier={() => ajouterArticlePanier(nintendo)} preview={() => ajouterPreview(nintendo)} />))}
              </div>
              <div className="cardNintendo">
                {stockNintendo.slice(3, 6).map((nintendo, index) => (<Nintendo key={index} imageNintendo={nintendo.image} info={nintendo.nom} prixNintendo={nintendo.prix} quantitéNintendo={nintendo.quantite} function={() => prendreProduitNintendo(nintendo)} function2={() => rendreProduitNintendo(nintendo)} acheter={nintendo.acheter} argent={portefeuille} panier={() => ajouterArticlePanier(nintendo)} preview={() => ajouterPreview(nintendo)} />))}
              </div>
              <div className="cardNintendo">
                {stockNintendo.slice(6, 9).map((nintendo, index) => (<Nintendo key={index} imageNintendo={nintendo.image} info={nintendo.nom} prixNintendo={nintendo.prix} quantitéNintendo={nintendo.quantite} function={() => prendreProduitNintendo(nintendo)} function2={() => rendreProduitNintendo(nintendo)} acheter={nintendo.acheter} argent={portefeuille} panier={() => ajouterArticlePanier(nintendo)} preview={() => ajouterPreview(nintendo)} />))}
              </div>
            </div>
          </Route>
          <Route exact path="/Gameboy">
            <Link to="/">
              <div className='generalPreview d-flex justify-content-end me-5'>
                <button className='bouttonPreviewRetour mt-2 bg-transparent border-0 text-end'>Retour à l'acceuil</button>
              </div>
            </Link>
            <div className="gameboy">
              <div className="cardGameboy">
                {stockGameboy.slice(0, 3).map((dataGameboy, index) => (<Gameboy key={index} imageGameboy={dataGameboy.image} info={dataGameboy.nom} prixGameboy={dataGameboy.prix} quantitéGameboy={dataGameboy.quantite} function={() => prendreProduitGameboy(dataGameboy)} function2={() => rendreProduitGameboy(dataGameboy)} acheter={dataGameboy.acheter} argent={portefeuille}
                  panier={() => ajouterArticlePanier(dataGameboy)} preview={() => ajouterPreview(dataGameboy)} />))}
              </div>
              <div className="cardGameboy">
                {stockGameboy.slice(3, 6).map((dataGameboy, index) => (<Gameboy key={index} imageGameboy={dataGameboy.image} info={dataGameboy.nom} prixGameboy={dataGameboy.prix} quantitéGameboy={dataGameboy.quantite} function={() => prendreProduitGameboy(dataGameboy)} function2={() => rendreProduitGameboy(dataGameboy)} acheter={dataGameboy.acheter} argent={portefeuille}
                  panier={() => ajouterArticlePanier(dataGameboy)} preview={() => ajouterPreview(dataGameboy)} />))}
              </div>
              <div className="cardGameboy">
                {stockGameboy.slice(6, 9).map((dataGameboy, index) => (<Gameboy key={index} imageGameboy={dataGameboy.image} info={dataGameboy.nom} prixGameboy={dataGameboy.prix} quantitéGameboy={dataGameboy.quantite} function={() => prendreProduitGameboy(dataGameboy)} function2={() => rendreProduitGameboy(dataGameboy)} acheter={dataGameboy.acheter} argent={portefeuille}
                  panier={() => ajouterArticlePanier(dataGameboy)} preview={() => ajouterPreview(dataGameboy)} />))}
              </div>
            </div>
          </Route>
          <Route exact path="/Playstation">
            <Link to="/">
              <div className='generalPreview d-flex justify-content-end me-5'>
                <button className='bouttonPreviewRetour mt-2 bg-transparent border-0 text-end'>Retour à l'acceuil</button>
              </div>
            </Link>
            <div className="playstation">
              <div className="cardPlaystation">
                {stockPs.slice(0, 3).map((dataPlaystation, index) => (<Playstation key={index} imagePlaystation={dataPlaystation.image} info={dataPlaystation.nom} prixPlaystation={dataPlaystation.prix} quantitePlaystation={dataPlaystation.quantite} function={() => prendreProduit(dataPlaystation)} function2={() => rendreProduit(dataPlaystation)} acheter={dataPlaystation.acheter} argent={portefeuille} panier={() => ajouterArticlePanier(dataPlaystation)} preview={() => ajouterPreview(dataPlaystation)} />))}
              </div>
              <div className="cardPlaystation">
                {stockPs.slice(3, 6).map((dataPlaystation, index) => (<Playstation key={index} imagePlaystation={dataPlaystation.image} info={dataPlaystation.nom} prixPlaystation={dataPlaystation.prix} quantitePlaystation={dataPlaystation.quantite} function={() => prendreProduit(dataPlaystation)} function2={() => rendreProduit(dataPlaystation)} acheter={dataPlaystation.acheter} argent={portefeuille} panier={() => ajouterArticlePanier(dataPlaystation)} preview={() => ajouterPreview(dataPlaystation)} />))}
              </div>
              <div className="cardPlaystation">
                {stockPs.slice(6, 9).map((dataPlaystation, index) => (<Playstation key={index} imagePlaystation={dataPlaystation.image} info={dataPlaystation.nom} prixPlaystation={dataPlaystation.prix} quantitePlaystation={dataPlaystation.quantite} function={() => prendreProduit(dataPlaystation)} function2={() => rendreProduit(dataPlaystation)} acheter={dataPlaystation.acheter} argent={portefeuille} panier={() => ajouterArticlePanier(dataPlaystation)} preview={() => ajouterPreview(dataPlaystation)} />))}
              </div>
            </div>
          </Route>

          <Route exact path="/panier">
            <h3 className='titrePanier text-light resumerPanier ms-5 mt-3'>Resumé de votre panier: </h3>

            <Panier panier={articlePanier} rendreProduit={rendreProduit} prendreProduit={prendreProduit} supprimer={viderPanier} />
          </Route>
          <Route exact path="/preview">
            <Preview preview={preview} retirerPreview={retirerPreview} />
          </Route>
        </Switch>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
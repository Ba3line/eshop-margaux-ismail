import './App.css';
import dataAcceuil from './Acceuil.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Acceuil from './component/Acceuil/Acceuil';
import Nintendo from './component/Nintendo/Nintendo';
import Gameboy from './component/Gameboy/Gameboy'
import Playstation from './component/Playstation/Playstation'
import Panier from './component/panier/panier'
import { stockPs } from './dataPlaystation.js';
import { stockGameboy } from './dataGameboy.js';
import { stockNintendo } from './dataNintendo'
import { useState } from 'react';

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
    setModifierStockPs(article.quantite -= 1)
    setPortefeuille(portefeuille - article.prix)
    setProduitAcheter(article.acheter += 1)
  }

  const rendreProduit = (article) => {
    setModifierStockPs(article.quantite += 1)
    setPortefeuille(portefeuille + article.prix)
    setProduitAcheter(article.acheter -= 1)
  }

  const [portefeuille, setPortefeuille] = useState(500)

  const [panier, setPanier] = useState([

  ])

  const ajouterPanier = (article) => {
    const nouveauPanier = [...panier]
    nouveauPanier.push(article)
    setPanier(nouveauPanier)
    console.log(panier);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {dataAcceuil.map((dataAcceuil) => (<Acceuil lien={dataAcceuil.lien} nom={dataAcceuil.nomCategorie} image={dataAcceuil.image} />))}
          </Route>
          <Route exact path="/Nintendo">
            <h1>{portefeuille}</h1>
            <div className="nintendo">
              <div className="row1Nintendo">
                {stockNintendo.slice(0, 3).map((nintendo) => (<Nintendo imageNintendo={nintendo.image} info={nintendo.nom} prixNintendo={nintendo.prix} quantitéNintendo={nintendo.quantite} function={() => prendreProduitNintendo(nintendo)} function2={() => rendreProduitNintendo(nintendo)} acheter={nintendo.acheter} argent={portefeuille} panier={() => ajouterPanier(nintendo)} />))}
              </div>
              <div className="row2Nintendo">
                {stockNintendo.slice(3, 6).map((nintendo) => (<Nintendo imageNintendo={nintendo.image} info={nintendo.nom} prixNintendo={nintendo.prix} quantitéNintendo={nintendo.quantite} function={() => prendreProduitNintendo(nintendo)} function2={() => rendreProduitNintendo(nintendo)} acheter={nintendo.acheter} argent={portefeuille} panier={() => ajouterPanier(nintendo)} />))}
              </div>
            </div>
          </Route>
          <Route exact path="/Gameboy">
            <div className="gameboy">
              <div className="row1Gameboy">
                {stockGameboy.slice(0, 3).map((dataGameboy) => (<Gameboy imageGameboy={dataGameboy.image} info={dataGameboy.nom} prixGameboy={dataGameboy.prix} quantitéGameboy={dataGameboy.quantite} function={() => prendreProduitGameboy(dataGameboy)} function2={() => rendreProduitGameboy(dataGameboy)} acheter={dataGameboy.acheter} argent={portefeuille}
                panier={() => ajouterPanier(dataGameboy)} />))}
              </div>
              <div className="row2Gameboy">
                {stockGameboy.slice(3, 6).map((dataGameboy) => (<Gameboy imageGameboy={dataGameboy.image} info={dataGameboy.nom} prixGameboy={dataGameboy.prix} quantitéGameboy={dataGameboy.quantite} function={() => prendreProduitGameboy(dataGameboy)} function2={() => rendreProduitGameboy(dataGameboy)} acheter={dataGameboy.acheter} argent={portefeuille}
                panier={() => ajouterPanier(dataGameboy)} />))}
              </div>
            </div>
          </Route>
          <Route exact path="/Playstation">
            <div className="playstation">
              <div className="row1Playstation">
                {stockPs.slice(0, 3).map((dataPlaystation) => (<Playstation imagePlaystation={dataPlaystation.image} info={dataPlaystation.nom} prixPlaystation={dataPlaystation.prix} quantitePlaystation={dataPlaystation.quantite} function={() => prendreProduit(dataPlaystation)} function2={() => rendreProduit(dataPlaystation)} acheter={dataPlaystation.acheter} argent={portefeuille} panier={() => ajouterPanier(dataPlaystation)} />))}
              </div>
              <div className="row2Playstation">
                {stockPs.slice(3, 6).map((dataPlaystation) => (<Playstation imagePlaystation={dataPlaystation.image} info={dataPlaystation.nom} prixPlaystation={dataPlaystation.prix} quantitePlaystation={dataPlaystation.quantite} function={() => prendreProduit(dataPlaystation)} function2={() => rendreProduit(dataPlaystation)} acheter={dataPlaystation.acheter} argent={portefeuille} panier={() => ajouterPanier(dataPlaystation)} />))}
              </div>
            </div>
          </Route>
          <Route exact path="/panier">
            <Panier portefeuille={portefeuille} panier={panier} portefeuille={portefeuille} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
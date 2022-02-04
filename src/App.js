import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Main from './component/main/main';
import Admin from './component/admin/admin';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
        <Route exact path ='/'>
             <Header />
        <Main />
        <Footer />
      </Route>
        <Route exact path ='/Admin' >
          <Admin />
        </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
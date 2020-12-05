import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './containers/contact';
import ContactList from './containers/ContactList';
import Recherche from './containers/recherche';

function App() {
  return (
    <div className="app">
      <nav>
        <NavLink to={"/"}>Contacts</NavLink>
        <NavLink to={"/contacts_create/1"}>Nouveau <i className="fa fa-pencil"></i></NavLink>
      </nav>
     <div className="content">
      <Switch>
        <Route path={"/contacts"} exact component={ContactList}/>
        <Route path={"/contacts/:id"} exact component={Contact}/>
        <Route path={"/contacts/:action/:id"} exact component={Contact}/>
        <Route path={"/contacts_create/:create"} exact component={Contact}/>
        <Route path={"/search/:item"} exact component={Recherche}/>
        <Redirect to={"/contacts"}/>
      </Switch>
     </div>
    </div>
  );
}

export default App;

import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Contact from './pages/contact';
import ContactList from './pages/ContactList';
import Recherche from './pages/recherche';
import NewContact from './pages/newContact'
import UpdateContact from './pages/UpdateContact'
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="app">
      <Menu/>
     <div className="content">
     <SearchForm/>
      <Switch>
        <Route path={"/contacts"} exact component={ContactList}/>
        <Route path={"/contacts/:id"} exact component={Contact}/>
        <Route path={"/contacts-update/:id"} exact component={UpdateContact}/>
        <Route path={"/contacts-create/"} exact component={NewContact}/>
        <Route path={"/contacts-search/:item"} exact component={Recherche}/>
        <Redirect to={"/contacts"}/>
      </Switch>
     </div>
    </div>
  );
}

export default App;

import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import MenuBar from './components/Menu';
import Contact from './pages/contact';
import ContactList from './pages/ContactList';
import Recherche from './pages/recherche';
import NewContact from './pages/newContact'
import UpdateContact from './pages/UpdateContact'
import SearchForm from "./components/SearchForm";
import { makeStyles } from '@material-ui/core';
import FlashMessage from './components/FlashMessage';

const useStyle = makeStyles((theme)=>({
  root:{
    display:'flex',
    flexDirection:'column',
  },
  content:{
    flexGrow:'1'
  }
}))
function App() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
     <SearchForm/>
     <MenuBar/>
     <main className={classes.content}>
      <Switch>
        <Route path={"/contacts"} exact component={ContactList}/>
        <Route path={"/contacts/:id"} exact component={Contact}/>
        <Route path={"/contacts-update/:id"} exact component={UpdateContact}/>
        <Route path={"/contacts-create/"} exact component={NewContact}/>
        <Route path={"/contacts-search/:item"} exact component={Recherche}/>
        <Redirect to={"/contacts"}/>
      </Switch>
     </main>
     <FlashMessage/>
    </div>
  );
}

export default App;

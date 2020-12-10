import { Link } from 'react-router-dom';
import './App.css';
import Mid from './component/Mid';
import SideBar from './component/SideBar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="app">
         <Router >  
         <SideBar />
         
  <Switch> 
    <Route path="/factchecker">
      <div>
    <h1 >Worked</h1>
    </div>
    </Route>
    <Route path="/">
         <Mid />
    </Route>
  </Switch>
         </Router>

    </div>
  );
}

export default App;

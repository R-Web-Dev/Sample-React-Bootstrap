
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';


function App() {
  return (
    <>
      <Router>
        <NaviBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contacts' component={Contacts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

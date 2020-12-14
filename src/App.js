import {BrowserRouter as Router,
        Switch,
        Route,
} from 'react-router-dom';
import Bubbling_Capturing from './components/Bubbling_Capturing';
import EventDelegation from './components/Event Delegation';
import Home from './components/Home';
import ItemPage from './components/ItemPage';
import Debouncing_Throttling from './components/Debouncing_Throttling';
import StoragePage from './components/StoragePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/bubbling_capturing' exact component={Bubbling_Capturing}/>
        <Route path='/event_delegation' exact component={EventDelegation}/>
        <Route path='/debouncing_throttling' exact component={Debouncing_Throttling}/>
        <Route path="/itempage/:name" exact component={ItemPage}/>
        <Route path='/storage' exact component={StoragePage}/>
      </Switch>
    </Router>
  );
};
export default App;

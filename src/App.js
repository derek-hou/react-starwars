import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Characters from './components/Characters';
import Starships from './components/Starships';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav className="App-header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/character/:characterId">
              <Character />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function Home() {
  return (
    <div className="App">
      <Characters />
    </div>
  );
}

function Character() {
  let { characterId } = useParams();

  return (
    <div className="App">
      <h3>{characterId}</h3>
    </div>
  );
}

export default App;

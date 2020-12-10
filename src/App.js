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
import CharacterDetail from './components/CharacterDetail';
//import Starships from './components/Starships';
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
              <li>
                <Link to="/page/1">Characters</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/page/:pageId/character/:characterId">
              <Character />
            </Route>
            <Route path="/page/:pageId">
              <Page />
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
      <p>List of all Star Wars characters.</p>
    </div>
  );
}

function Page() {
  let { pageId } = useParams();

  return (
    <div className="App">
      <Characters page={pageId} />
    </div>
  );
}

function Character() {
  let { characterId, pageId} = useParams();
  
  return (
    <div className="App">
      <CharacterDetail pageId={pageId} characterId={characterId} />
    </div>
  );
}

export default App;

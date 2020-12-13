import logo from './logo.svg';
import mandalorian from './imgs/mandalorian.webp';
import grogu from './imgs/the-child.jpeg';
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
import StarshipDetail from './components/StarshipDetail';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <header className="app-header">
            <nav>
              <h1>Star Wars</h1>
              <ul className="nav-list flex">
                <li>
                  <Link className="btn" to="/">Home</Link>
                </li>
                <li>
                  <Link className="btn" to="/page/1">Characters</Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/page/:pageId/starships/:starshipId">
              <Starship />
            </Route>
            <Route path="/page/:pageId/character/:characterId">
              <Character />
            </Route>
            <Route path="/page/:pageId">
              <Page />
            </Route>
            <Route exact path="/">
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
    <div className="container flex">
      <div className="img-container"><img src={mandalorian} /></div>
      <div className="img-container"><img src={grogu} /></div>
    </div>
  );
}

function Page() {
  let { pageId } = useParams();

  return (
    <div className="container">
      <Characters page={pageId} />
    </div>
  );
}

function Starship() {
  let { starshipId, pageId} = useParams();
  
  return (
    <div className="container">
      <StarshipDetail pageId={pageId} starshipId={starshipId} />
    </div>
  );
}

function Character() {
  let { characterId, pageId} = useParams();
  
  return (
    <div className="container">
      <CharacterDetail pageId={pageId} characterId={characterId} />
    </div>
  );
}

export default App;

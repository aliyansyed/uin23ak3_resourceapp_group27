import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


//ROUTER//
import Resources from './components/Resources';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/html">
            <Resources category="html" />
          </Route>
          <Route path="/css">
            <Resources category="css" />
          </Route>
          <Route path="/javascript">
            <Resources category="javascript" />
          </Route>
          <Route path="/react">
            <Resources category="react" />
          </Route>
          <Route path="/sanity">
            <Resources category="sanity" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


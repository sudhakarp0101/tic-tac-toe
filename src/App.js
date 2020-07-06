import React from 'react';
import './App.css';
import Title from './components/Title';
import Players from './components/Players'
import Winner from './components/Winner'
import Board from './components/Board'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="window">
          <Title />
          <Switch>
            <Route exact path="/">
              <Players />
            </Route>
            <Route path="/Winner" render={(props) => <Winner {...props} />} />
            <Route path="/Board" render={() => <Board />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

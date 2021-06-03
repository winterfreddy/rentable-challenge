import React from 'react';
import { Router, Route } from 'react-router-dom';
import Search from './Search/Search.js'

class App extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <Route path="/:query" ><Search /></Route>
        </div>
      </Router>
    )
  }
}

export default App;

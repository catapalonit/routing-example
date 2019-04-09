import React, { Component } from 'react';
import { HashRouter, Link } from "react-router-dom"

import routes from './components/routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>

          <Link to="/profile"><button>Profile</button></Link>
          <Link to="/"><button>Home</button></Link>
          {routes}

        </HashRouter>

      </div>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieSite from './components/MovieSite.js';
import ListPicker from './components/ListPicker.js';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/:listID/add" component={MovieSite}/>
            <Route path="/:listID/viewed" component={MovieSite}/>
            <Route path="/:listID" component={MovieSite} />
            <Route path="/" component={ListPicker} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;

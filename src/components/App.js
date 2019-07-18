import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import './App.css';
import Home from './Home/Home';
import Todo from './Todo/Todo';
import Timer from './Timer/Timer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="Welcome APPBK80" />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/timer" component={Timer} />
          <Route path="/todo" component={Todo} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
